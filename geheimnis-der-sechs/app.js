const MIN_COINS = 14;
const MAX_COINS = 21;
const SEARCH_RESET_DELAY_MS = 2200;
const HIDE_ANIMATION_MS = 2400;
const WRONG_REVEAL_MS = 1000;

const elements = {
  body: document.body,
  board: document.getElementById('board'),
  coinCountNumber: document.getElementById('coinCountNumber'),
  coinCountRange: document.getElementById('coinCountRange'),
  startButton: document.getElementById('startButton'),
  resetButton: document.getElementById('resetButton'),
  confirmPanel: document.getElementById('confirmPanel'),
  confirmText: document.getElementById('confirmText'),
  confirmButton: document.getElementById('confirmButton'),
  cancelButton: document.getElementById('cancelButton'),
  phaseName: document.getElementById('phaseName'),
  instructionText: document.getElementById('instructionText'),
  statusText: document.getElementById('statusText'),
};

const state = {
  phase: 0,
  totalCoins: 14,
  coins: [],
  pendingIndex: null,
  secretIndex: null,
  animationLocked: false,
  timerIds: [],
};

function clampCoinCount(value) {
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) return MIN_COINS;
  return Math.min(MAX_COINS, Math.max(MIN_COINS, parsed));
}

function clearTimers() {
  state.timerIds.forEach((id) => window.clearTimeout(id));
  state.timerIds = [];
}

function queueTimeout(fn, delay) {
  const id = window.setTimeout(fn, delay);
  state.timerIds.push(id);
}

function setStatus(message, tone = 'neutral') {
  elements.statusText.textContent = message;
  elements.statusText.className = `status-text status-${tone}`;
}

function setPhase(phase) {
  state.phase = phase;
  elements.body.classList.remove('phase0', 'phase1', 'phase2');
  elements.body.classList.add(`phase${phase}`);

  if (phase === 0) {
    elements.phaseName.textContent = 'Phase 0 - Vorbereitung';
    elements.instructionText.textContent = 'Lege die Anzahl der Münzen fest und starte dann die Runde.';
    elements.confirmPanel.classList.add('hidden');
    toggleConfigInputs(false);
  } else if (phase === 1) {
    elements.phaseName.textContent = 'Phase 1 - Stern verstecken';
    elements.instructionText.textContent = 'Wähle eine Münze im Körper der 6 und bestätige die Platzierung.';
    toggleConfigInputs(true);
  } else if (phase === 2) {
    elements.phaseName.textContent = 'Phase 2 - Stern suchen';
    elements.instructionText.textContent = 'Klicke Münzen an, bis der Stern gefunden wurde.';
    elements.confirmPanel.classList.add('hidden');
    toggleConfigInputs(true);
  }

  renderBoard();
}

function toggleConfigInputs(disabled) {
  elements.coinCountNumber.disabled = disabled;
  elements.coinCountRange.disabled = disabled;
  elements.startButton.disabled = disabled;
}

function interpolatePoint(a, b, t) {
  return {
    x: a.x + (b.x - a.x) * t,
    y: a.y + (b.y - a.y) * t,
  };
}

function cubicBezierPoint(p0, p1, p2, p3, t) {
  const mt = 1 - t;
  return {
    x:
      (mt ** 3) * p0.x +
      3 * (mt ** 2) * t * p1.x +
      3 * mt * (t ** 2) * p2.x +
      (t ** 3) * p3.x,
    y:
      (mt ** 3) * p0.y +
      3 * (mt ** 2) * t * p1.y +
      3 * mt * (t ** 2) * p2.y +
      (t ** 3) * p3.y,
  };
}

function sampleCubicBezier(p0, p1, p2, p3, count) {
  if (count <= 0) return [];
  if (count === 1) return [p0];

  const points = [];
  for (let index = 0; index < count; index += 1) {
    const t = index / (count - 1);
    points.push(cubicBezierPoint(p0, p1, p2, p3, t));
  }
  return points;
}

function clearRevealStates() {
  state.coins.forEach((coin) => {
    coin.revealState = null;
    coin.slideDirection = null;
  });
}

function getHookCount(totalCoins) {
  if (totalCoins <= 16) return 5;
  if (totalCoins <= 19) return 6;
  return 7;
}

function buildCoinLayout(totalCoins) {
  const hookCount = getHookCount(totalCoins);
  const bodyCount = totalCoins - hookCount;

  const center = { x: 58, y: 66 };
  const radiusX = 22;
  const radiusY = 25;
  const joinAngle = (225 * Math.PI) / 180;

  const bodyCoins = [];
  for (let index = 0; index < bodyCount; index += 1) {
    const angle = joinAngle + (2 * Math.PI * index) / bodyCount;
    bodyCoins.push({
      id: `body-${index}`,
      kind: 'body',
      x: center.x + radiusX * Math.cos(angle),
      y: center.y + radiusY * Math.sin(angle),
      revealState: null,
      slideDirection: null,
    });
  }

  const joinPoint = bodyCoins[0];
  const hookCoins = sampleCubicBezier(
    { x: 54, y: 10 },
    { x: 44, y: 8 },
    { x: 35, y: 24 },
    { x: joinPoint.x, y: joinPoint.y - 2 },
    hookCount,
  ).map((point, index) => ({
    id: `hook-${index}`,
    kind: 'hook',
    x: point.x,
    y: point.y,
    revealState: null,
    slideDirection: null,
  }));

  return [...hookCoins, ...bodyCoins];
}

function resetRound(keepCoinCount = true) {
  clearTimers();
  state.pendingIndex = null;
  state.secretIndex = null;
  state.animationLocked = false;
  if (!keepCoinCount) {
    state.totalCoins = MIN_COINS;
    syncCoinInputs(MIN_COINS);
  }
  state.coins = buildCoinLayout(state.totalCoins);
  setPhase(0);
  setStatus('Bereit für eine neue Runde.', 'neutral');
}

function syncCoinInputs(value) {
  elements.coinCountNumber.value = value;
  elements.coinCountRange.value = value;
}

function isBodyCoin(index) {
  return state.coins[index]?.kind === 'body';
}

function getSlideDirection(coin) {
  return coin.x < 58 ? 'left' : 'right';
}

function handleCoinClick(index) {
  if (state.animationLocked) return;

  if (state.phase === 1) {
    if (!isBodyCoin(index)) return;
    state.pendingIndex = index;
    elements.confirmPanel.classList.remove('hidden');
    elements.confirmText.textContent = 'Stern unter dieser Münze verstecken?';
    setStatus('Platzierung ausgewählt. Jetzt bestätigen oder eine andere Münze wählen.', 'neutral');
    renderBoard();
    return;
  }

  if (state.phase === 2) {
    inspectCoin(index);
  }
}

function inspectCoin(index) {
  if (state.secretIndex === null) return;

  state.animationLocked = true;
  clearRevealStates();

  const coin = state.coins[index];
  const isCorrect = index === state.secretIndex;
  coin.revealState = isCorrect ? 'star' : 'empty';
  coin.slideDirection = getSlideDirection(coin);
  renderBoard();

  if (isCorrect) {
    setStatus('Stern gefunden!', 'success');
    queueTimeout(() => {
      resetRound(true);
    }, SEARCH_RESET_DELAY_MS);
    return;
  }

  setStatus('Kein Stern unter dieser Münze. Suche weiter.', 'warn');
  queueTimeout(() => {
    coin.revealState = null;
    coin.slideDirection = null;
    state.animationLocked = false;
    renderBoard();
  }, WRONG_REVEAL_MS);
}

function confirmPlacement() {
  if (state.pendingIndex === null) return;

  clearRevealStates();
  state.secretIndex = state.pendingIndex;
  state.pendingIndex = null;
  state.animationLocked = true;
  state.coins[state.secretIndex].revealState = 'placing';
  elements.confirmPanel.classList.add('hidden');
  renderBoard();
  setStatus('Stern wird versteckt.', 'neutral');

  queueTimeout(() => {
    if (state.secretIndex !== null) {
      state.coins[state.secretIndex].revealState = null;
    }
    state.animationLocked = false;
    setPhase(2);
    setStatus('Phase 2 läuft. Finde den Stern unter den Münzen.', 'neutral');
  }, HIDE_ANIMATION_MS);
}

function cancelPlacement() {
  state.pendingIndex = null;
  elements.confirmPanel.classList.add('hidden');
  setStatus('Auswahl verworfen. Bitte eine andere Münze im Körper der 6 wählen.', 'neutral');
  renderBoard();
}

function startRound() {
  clearTimers();
  state.pendingIndex = null;
  state.secretIndex = null;
  state.animationLocked = false;
  state.coins = buildCoinLayout(state.totalCoins);
  setPhase(1);
  setStatus('Phase 1 läuft. Wähle eine Münze im Körper der 6.', 'neutral');
}

function renderBoard() {
  elements.board.innerHTML = '';

  state.coins.forEach((coin, index) => {
    const coinButton = document.createElement('button');
    coinButton.type = 'button';
    coinButton.className = 'coin';
    coinButton.style.left = `${coin.x}%`;
    coinButton.style.top = `${coin.y}%`;
    coinButton.setAttribute('role', 'gridcell');

    let ariaLabel = `Münze ${index + 1}`;
    if (coin.kind === 'body') ariaLabel += ' im Körper der 6';
    else ariaLabel += ' im Haken der 6';

    if (state.phase === 1 && coin.kind === 'body') {
      coinButton.classList.add('clickable', 'body-available');
      ariaLabel += ', auswählbar';
    }

    if (state.phase === 2) {
      coinButton.classList.add('clickable');
      ariaLabel += ', überprüfbar';
    }

    if (state.pendingIndex === index) {
      coinButton.classList.add('pending');
      ariaLabel += ', aktuell ausgewählt';
    }

    if (coin.revealState === 'placing') {
      coinButton.classList.add('placing');
      ariaLabel += ', Stern wird versteckt';
    }

    if (coin.revealState === 'star') {
      coinButton.classList.add('reveal-coin', 'found', coin.slideDirection === 'left' ? 'slide-left' : 'slide-right');
      ariaLabel += ', Stern gefunden';
    }

    if (coin.revealState === 'empty') {
      coinButton.classList.add('reveal-coin', 'empty', coin.slideDirection === 'left' ? 'slide-left' : 'slide-right');
      ariaLabel += ', kein Stern';
    }

    if (state.phase === 0) {
      coinButton.classList.add('disabled');
    }

    if (state.phase > 0) {
      coinButton.addEventListener('click', () => handleCoinClick(index));
    }

    coinButton.setAttribute('aria-label', ariaLabel);

    const label = document.createElement('span');
    label.className = 'coin-label';
    label.textContent = String(index + 1);
    coinButton.appendChild(label);

    const underlay = document.createElement('span');
    underlay.className = 'underlay';
    underlay.style.left = `${coin.x}%`;
    underlay.style.top = `${coin.y}%`;
    underlay.setAttribute('aria-hidden', 'true');

    if (coin.revealState === 'placing') {
      underlay.classList.add('star', 'visible', 'slide-under');
      underlay.textContent = '★';
    } else if (coin.revealState === 'star') {
      underlay.classList.add('star', 'visible');
      underlay.textContent = '★';
    } else if (coin.revealState === 'empty') {
      underlay.classList.add('empty', 'visible');
      underlay.textContent = '✕';
    }

    elements.board.appendChild(coinButton);
    elements.board.appendChild(underlay);
  });
}

function handleCoinInput(value) {
  const clamped = clampCoinCount(value);
  state.totalCoins = clamped;
  syncCoinInputs(clamped);
  state.coins = buildCoinLayout(clamped);
  renderBoard();
}

function bindEvents() {
  elements.coinCountNumber.addEventListener('input', (event) => handleCoinInput(event.target.value));
  elements.coinCountRange.addEventListener('input', (event) => handleCoinInput(event.target.value));
  elements.startButton.addEventListener('click', startRound);
  elements.resetButton.addEventListener('click', () => resetRound(true));
  elements.confirmButton.addEventListener('click', confirmPlacement);
  elements.cancelButton.addEventListener('click', cancelPlacement);
}

function init() {
  state.coins = buildCoinLayout(state.totalCoins);
  bindEvents();
  setPhase(0);
  setStatus('Bereit für eine neue Runde.', 'neutral');
}

init();
