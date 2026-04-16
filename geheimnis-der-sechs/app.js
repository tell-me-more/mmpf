const MIN_COINS = 18;
const MAX_COINS = 24;
const SEARCH_RESET_DELAY_MS = 2200;
const HIDE_ANIMATION_MS = 2400;
const WRONG_REVEAL_MS = 1000;

const elements = {
  body: document.body,
  board: document.getElementById('board'),
  coinCountDisplay: document.getElementById('coinCountDisplay'),
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
  totalCoins: MIN_COINS,
  coins: [],
  pendingIndex: null,
  secretIndex: null,
  animationLocked: false,
  timerIds: [],
};

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
    elements.instructionText.textContent = 'Die nächste Runde wird mit einer zufälligen Anzahl von 18 bis 24 Münzen vorbereitet.';
    elements.confirmPanel.classList.add('hidden');
    toggleStartButton(false);
  } else if (phase === 1) {
    elements.phaseName.textContent = 'Phase 1 - Stern verstecken';
    elements.instructionText.textContent = 'Wähle eine Münze im Körper der 6 und bestätige die Platzierung.';
    toggleStartButton(true);
  } else if (phase === 2) {
    elements.phaseName.textContent = 'Phase 2 - Stern suchen';
    elements.instructionText.textContent = 'Klicke Münzen an, bis der Stern gefunden wurde.';
    elements.confirmPanel.classList.add('hidden');
    toggleStartButton(true);
  }

  renderBoard();
}

function toggleStartButton(disabled) {
  elements.startButton.disabled = disabled;
}

function clearRevealStates() {
  state.coins.forEach((coin) => {
    coin.revealState = null;
    coin.slideDirection = null;
  });
}

const GRID_INSET_X = 16;
const GRID_INSET_Y = 6;
const GRID_SPAN_W = 68;
const GRID_SPAN_H = 88;

function buildLayout(patternRows) {
  const rows = patternRows.length;
  const columns = patternRows[0].length;

  return {
    columns,
    rows,
    points: patternRows.flatMap((row, rowIndex) => (
      Array.from(row).flatMap((cell, columnIndex) => {
        if (cell !== 'H' && cell !== 'B') return [];

        return [{
          gridX: columnIndex + 1,
          gridY: rows - rowIndex,
          kind: cell === 'H' ? 'hook' : 'body',
        }];
      })
    )),
  };
}

// Every variant uses its own raster size so the six can grow in height and width
// as more coins are added. H marks the hook, B marks the circular body.
const SIX_LAYOUTS = {
  18: buildLayout(
    [
      '.HHH.',
      'H....',
      'H....',
      'BBBB.',
      'B...B',
      'B...B',
      'B...B',
      '.BBB.',
    ],
  ),
  19: buildLayout(
    [
      '.HHH.',
      'H....',
      'H....',
      'H....',
      'BBBB.',
      'B...B',
      'B...B',
      'B...B',
      '.BBB.',
    ],
  ),
  20: buildLayout(
    [
      '.HHH..',
      'H.....',
      'H.....',
      'H.....',
      'BBBB..',
      'B...B.',
      'B...B.',
      'B...B.',
      '.BBBB.',
    ],
  ),
  21: buildLayout(
    [
      '.HHH..',
      'H.....',
      'H.....',
      'H.....',
      'BBBBB.',
      'B....B',
      'B....B',
      'B....B',
      '.BBBB.',
    ],
  ),
  22: buildLayout(
    [
      '.HHHH.',
      'H.....',
      'H.....',
      'H.....',
      'H.....',
      'BBBB..',
      'B...B.',
      'B...B.',
      'B...B.',
      '.BBBB.',
    ],
  ),
  23: buildLayout(
    [
      '.HHHH.',
      'H.....',
      'H.....',
      'H.....',
      'H.....',
      'BBBBB.',
      'B....B',
      'B....B',
      'B....B',
      '.BBBB.',
    ],
  ),
  24: buildLayout(
    [
      '.HHHH..',
      'H......',
      'H......',
      'H......',
      'BBBBB..',
      'B....B.',
      'B....B.',
      'B....B.',
      'B....B.',
      '.BBBB..',
    ],
  ),
};

function getRandomCoinCount() {
  return MIN_COINS + Math.floor(Math.random() * (MAX_COINS - MIN_COINS + 1));
}

function updateCoinCountDisplay() {
  elements.coinCountDisplay.textContent = `${state.totalCoins} Münzen`;
}

function buildCoinLayout(totalCoins) {
  const layout = SIX_LAYOUTS[totalCoins] ?? SIX_LAYOUTS[MIN_COINS];

  return layout.points.map(({ gridX, gridY, kind }) => ({
    id: `${kind}-${gridX}-${gridY}`,
    kind,
    x: GRID_INSET_X + ((gridX - 0.5) * GRID_SPAN_W) / layout.columns,
    y: GRID_INSET_Y + ((layout.rows - gridY + 0.5) * GRID_SPAN_H) / layout.rows,
    revealState: null,
    slideDirection: null,
  }));
}

function resetRound() {
  clearTimers();
  state.pendingIndex = null;
  state.secretIndex = null;
  state.animationLocked = false;
  state.totalCoins = getRandomCoinCount();
  updateCoinCountDisplay();
  state.coins = buildCoinLayout(state.totalCoins);
  setPhase(0);
  setStatus(`Bereit für eine neue Runde mit ${state.totalCoins} Münzen.`, 'neutral');
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
      resetRound();
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
  setStatus(`Phase 1 läuft mit ${state.totalCoins} Münzen. Wähle eine Münze im Körper der 6.`, 'neutral');
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

function bindEvents() {
  elements.startButton.addEventListener('click', startRound);
  elements.resetButton.addEventListener('click', resetRound);
  elements.confirmButton.addEventListener('click', confirmPlacement);
  elements.cancelButton.addEventListener('click', cancelPlacement);
}

function init() {
  bindEvents();
  resetRound();
}

init();
