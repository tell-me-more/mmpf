// ===== KONFIGURATION =====
const SOLUTION_PASSWORD = "mmpflehrer";
const RESET_ALL_PASSWORD = "mmpflehrer";
// =========================

const puzzles = [
  {
    title: "Puzzle 1",
    rows: 7,
    cols: 7,
    islands: [
      { id: "A", row: 0, col: 0, value: 4 },
      { id: "B", row: 0, col: 3, value: 5 },
      { id: "C", row: 0, col: 6, value: 2 },
      { id: "D", row: 3, col: 0, value: 5 },
      { id: "E", row: 3, col: 3, value: 5 },
      { id: "F", row: 3, col: 6, value: 5 },
      { id: "G", row: 6, col: 0, value: 4 },
      { id: "H", row: 6, col: 3, value: 2 },
      { id: "I", row: 6, col: 6, value: 2 }
    ],
    solution: [
      { a: "A", b: "B", count: 2 },
      { a: "A", b: "D", count: 2 },
      { a: "B", b: "C", count: 1 },
      { a: "B", b: "E", count: 2 },
      { a: "D", b: "E", count: 1 },
      { a: "D", b: "G", count: 2 },
      { a: "E", b: "F", count: 2 },
      { a: "C", b: "F", count: 1 },
      { a: "F", b: "I", count: 2 },
      { a: "G", b: "H", count: 2 }
    ]
  },
  {
    title: "Puzzle 2",
    rows: 7,
    cols: 7,
    islands: [
      { id: "A", row: 0, col: 0, value: 3 },
      { id: "B", row: 0, col: 6, value: 3 },
      { id: "C", row: 1, col: 1, value: 2 },
      { id: "D", row: 1, col: 4, value: 4 },
      { id: "E", row: 2, col: 6, value: 4 },
      { id: "F", row: 3, col: 0, value: 5 },
      { id: "G", row: 3, col: 4, value: 3 },
      { id: "H", row: 4, col: 1, value: 1 },
      { id: "I", row: 4, col: 3, value: 4 },
      { id: "J", row: 4, col: 5, value: 2 },
      { id: "K", row: 6, col: 0, value: 2 },
      { id: "L", row: 6, col: 3, value: 3 },
      { id: "M", row: 6, col: 6, value: 4 }
    ],
    solution: [
      { a: "A", b: "B", count: 1 },
      { a: "A", b: "F", count: 2 },
      { a: "F", b: "K", count: 2 },
      { a: "F", b: "G", count: 1 },
      { a: "G", b: "D", count: 2 },
      { a: "D", b: "C", count: 2 },
      { a: "B", b: "E", count: 2 },
      { a: "E", b: "M", count: 2 },
      { a: "M", b: "L", count: 2 },
      { a: "L", b: "I", count: 1 },
      { a: "I", b: "H", count: 1 },
      { a: "I", b: "J", count: 2 }
    ]
  },
  {
    title: "Puzzle 3",
    rows: 7,
    cols: 7,
    islands: [
      { id: "A", row: 0, col: 0, value: 4 },
      { id: "B", row: 0, col: 5, value: 4 },
      { id: "C", row: 1, col: 1, value: 3 },
      { id: "D", row: 1, col: 3, value: 2 },
      { id: "E", row: 2, col: 5, value: 4 },
      { id: "F", row: 3, col: 1, value: 2 },
      { id: "G", row: 4, col: 0, value: 4 },
      { id: "H", row: 4, col: 2, value: 1 },
      { id: "I", row: 5, col: 1, value: 1 },
      { id: "J", row: 5, col: 3, value: 4 },
      { id: "K", row: 5, col: 5, value: 4 },
      { id: "L", row: 6, col: 0, value: 3 },
      { id: "M", row: 6, col: 2, value: 3 },
      { id: "N", row: 6, col: 6, value: 1 }
    ],
    solution: [
      { a: "A", b: "B", count: 2 },
      { a: "A", b: "G", count: 2 },
      { a: "G", b: "H", count: 1 },
      { a: "G", b: "L", count: 1 },
      { a: "L", b: "M", count: 2 },
      { a: "M", b: "N", count: 1 },
      { a: "B", b: "E", count: 2 },
      { a: "E", b: "K", count: 2 },
      { a: "K", b: "J", count: 2 },
      { a: "J", b: "I", count: 1 },
      { a: "J", b: "D", count: 1 },
      { a: "D", b: "C", count: 1 },
      { a: "C", b: "F", count: 2 }
    ]
  },
  {
    title: "Puzzle 4",
    rows: 10,
    cols: 10,
    islands: [
      { id: "A", row: 0, col: 0, value: 4 },
      { id: "B", row: 0, col: 2, value: 4 },
      { id: "C", row: 0, col: 6, value: 1 },
      { id: "D", row: 0, col: 8, value: 1 },

      { id: "E", row: 2, col: 0, value: 6 },
      { id: "F", row: 2, col: 2, value: 5 },
      { id: "G", row: 2, col: 8, value: 3 },

      { id: "H", row: 3, col: 9, value: 1 },

      { id: "I", row: 4, col: 4, value: 3 },
      { id: "J", row: 4, col: 6, value: 3 },

      { id: "K", row: 5, col: 0, value: 3 },
      { id: "L", row: 5, col: 5, value: 1 },
      { id: "M", row: 5, col: 9, value: 2 },

      { id: "N", row: 6, col: 6, value: 2 },

      { id: "O", row: 7, col: 0, value: 1 },
      { id: "P", row: 7, col: 9, value: 2 },

      { id: "Q", row: 8, col: 5, value: 3 },
      { id: "R", row: 8, col: 8, value: 3 },

      { id: "S", row: 9, col: 0, value: 2 },
      { id: "T", row: 9, col: 2, value: 4 },
      { id: "U", row: 9, col: 4, value: 4 },
      { id: "V", row: 9, col: 6, value: 2 },
      { id: "W", row: 9, col: 9, value: 2 }
    ],
    solution: [
      { a: "A", b: "B", count: 2 },
      { a: "A", b: "E", count: 2 },
      { a: "B", b: "C", count: 1 },
      { a: "B", b: "F", count: 1 },
      { a: "D", b: "G", count: 1 },

      { a: "E", b: "F", count: 2 },
      { a: "E", b: "K", count: 2 },
      { a: "F", b: "G", count: 1 },
      { a: "F", b: "T", count: 1 },
      { a: "G", b: "R", count: 1 },

      { a: "H", b: "M", count: 1 },

      { a: "I", b: "J", count: 1 },
      { a: "I", b: "U", count: 2 },
      { a: "J", b: "N", count: 2 },

      { a: "K", b: "O", count: 1 },
      { a: "L", b: "Q", count: 1 },
      { a: "M", b: "P", count: 1 },

      { a: "P", b: "W", count: 1 },
      { a: "Q", b: "R", count: 2 },

      { a: "S", b: "T", count: 2 },
      { a: "T", b: "U", count: 1 },
      { a: "U", b: "V", count: 1 },
      { a: "V", b: "W", count: 1 }
    ]
  },
  {
    title: "Puzzle 5",
    rows: 10,
    cols: 10,
    islands: [
      { id: "A", row: 0, col: 0, value: 3 },
      { id: "B", row: 0, col: 6, value: 4 },
      { id: "C", row: 0, col: 8, value: 1 },

      { id: "D", row: 1, col: 1, value: 1 },
      { id: "E", row: 1, col: 3, value: 3 },
      { id: "F", row: 1, col: 5, value: 2 },

      { id: "G", row: 2, col: 7, value: 1 },
      { id: "H", row: 2, col: 9, value: 3 },

      { id: "I", row: 3, col: 0, value: 5 },
      { id: "J", row: 3, col: 3, value: 6 },
      { id: "K", row: 3, col: 5, value: 4 },

      { id: "L", row: 4, col: 1, value: 2 },
      { id: "M", row: 4, col: 6, value: 7 },
      { id: "N", row: 4, col: 9, value: 4 },

      { id: "O", row: 6, col: 0, value: 3 },
      { id: "P", row: 6, col: 2, value: 6 },
      { id: "Q", row: 6, col: 6, value: 6 },
      { id: "R", row: 6, col: 8, value: 1 },

      { id: "S", row: 7, col: 4, value: 2 },
      { id: "T", row: 7, col: 7, value: 2 },
      { id: "U", row: 7, col: 9, value: 4 },

      { id: "V", row: 9, col: 0, value: 2 },
      { id: "W", row: 9, col: 2, value: 6 },
      { id: "X", row: 9, col: 4, value: 4 },
      { id: "Y", row: 9, col: 6, value: 4 },
      { id: "Z", row: 9, col: 9, value: 4 }
    ],
    solution: [
      { a: "A", b: "B", count: 1 },
      { a: "B", b: "C", count: 1 },
      { a: "D", b: "E", count: 1 },
      { a: "G", b: "H", count: 1 },

      { a: "I", b: "J", count: 2 },
      { a: "J", b: "K", count: 2 },
      { a: "L", b: "M", count: 2 },
      { a: "M", b: "N", count: 2 },

      { a: "O", b: "P", count: 2 },
      { a: "P", b: "Q", count: 2 },
      { a: "Q", b: "R", count: 1 },
      { a: "T", b: "U", count: 2 },

      { a: "V", b: "W", count: 2 },
      { a: "W", b: "X", count: 2 },
      { a: "Y", b: "Z", count: 2 },

      { a: "A", b: "I", count: 2 },
      { a: "I", b: "O", count: 1 },

      { a: "B", b: "M", count: 2 },
      { a: "M", b: "Q", count: 1 },
      { a: "Q", b: "Y", count: 2 },

      { a: "E", b: "J", count: 2 },
      { a: "F", b: "K", count: 2 },
      { a: "H", b: "N", count: 2 },

      { a: "U", b: "Z", count: 2 },
      { a: "P", b: "W", count: 2 },
      { a: "S", b: "X", count: 2 }
    ]
  },
  {
    title: "Puzzle 6",
    rows: 10,
    cols: 10,
    islands: [
      { id: "A", row: 0, col: 0, value: 2 },
      { id: "B", row: 0, col: 2, value: 1 },
      { id: "C", row: 0, col: 4, value: 2 },
      { id: "D", row: 0, col: 6, value: 3 },
      { id: "E", row: 0, col: 9, value: 1 },

      { id: "F", row: 2, col: 6, value: 2 },

      { id: "G", row: 3, col: 0, value: 4 },
      { id: "H", row: 3, col: 4, value: 5 },
      { id: "I", row: 3, col: 9, value: 3 },

      { id: "J", row: 5, col: 1, value: 4 },
      { id: "K", row: 5, col: 3, value: 3 },
      { id: "L", row: 5, col: 9, value: 1 },

      { id: "M", row: 6, col: 0, value: 2 },

      { id: "N", row: 7, col: 3, value: 1 },

      { id: "O", row: 8, col: 1, value: 3 },
      { id: "P", row: 8, col: 4, value: 3 },
      { id: "Q", row: 8, col: 9, value: 1 },

      { id: "R", row: 9, col: 0, value: 2 },
      { id: "S", row: 9, col: 2, value: 2 },
      { id: "T", row: 9, col: 7, value: 1 }
    ],
    solution: [
      { a: "A", b: "B", count: 1 },
      { a: "A", b: "G", count: 1 },

      { a: "C", b: "D", count: 1 },
      { a: "C", b: "H", count: 1 },
      { a: "D", b: "F", count: 2 },

      { a: "E", b: "I", count: 1 },

      { a: "G", b: "H", count: 2 },
      { a: "G", b: "M", count: 1 },

      { a: "H", b: "I", count: 1 },
      { a: "H", b: "P", count: 1 },

      { a: "I", b: "L", count: 1 },

      { a: "J", b: "K", count: 2 },
      { a: "J", b: "O", count: 2 },

      { a: "K", b: "N", count: 1 },

      { a: "M", b: "R", count: 1 },

      { a: "O", b: "P", count: 1 },
      { a: "P", b: "Q", count: 1 },

      { a: "R", b: "S", count: 1 },
      { a: "S", b: "T", count: 1 }
    ]
  },
  {
  title: "Puzzle 7",
  rows: 9,
  cols: 9,
  islands: [
    { id: "A", row: 0, col: 0, value: 2 },
    { id: "B", row: 0, col: 2, value: 2 },
    { id: "C", row: 0, col: 4, value: 3 },
    { id: "D", row: 0, col: 6, value: 2 },
    { id: "AB", row: 0, col: 7, value: 3 },
    { id: "E", row: 0, col: 8, value: 3 },

    { id: "F", row: 1, col: 5, value: 1 },
    { id: "G", row: 1, col: 7, value: 3 },

    { id: "H", row: 2, col: 1, value: 3 },
    { id: "I", row: 2, col: 4, value: 4 },
    { id: "J", row: 2, col: 6, value: 2 },

    { id: "K", row: 3, col: 0, value: 1 },
    { id: "L", row: 3, col: 7, value: 3 },

    { id: "M", row: 4, col: 2, value: 1 },
    { id: "N", row: 4, col: 4, value: 1 },
    { id: "O", row: 4, col: 6, value: 1 },

    { id: "P", row: 5, col: 1, value: 3 },
    { id: "Q", row: 5, col: 8, value: 4 },

    { id: "R", row: 6, col: 2, value: 3 },
    { id: "S", row: 6, col: 4, value: 5 },
    { id: "T", row: 6, col: 7, value: 3 },

    { id: "U", row: 7, col: 1, value: 2 },
    { id: "V", row: 7, col: 3, value: 1 },

    { id: "W", row: 8, col: 0, value: 1 },
    { id: "X", row: 8, col: 2, value: 3 },
    { id: "Y", row: 8, col: 4, value: 6 },
    { id: "Z", row: 8, col: 6, value: 4 },
    { id: "AA", row: 8, col: 8, value: 4 }
  ],
  solution: [
    { a: "A", b: "B", count: 1 },
    { a: "B", b: "C", count: 1 },
    { a: "C", b: "D", count: 1 },
    { a: "D", b: "AB", count: 1 },
    { a: "AB", b: "E", count: 1 },
    { a: "AB", b: "G", count: 1 },

    { a: "F", b: "G", count: 1 },
    { a: "H", b: "I", count: 1 },
    { a: "I", b: "J", count: 1 },

    { a: "R", b: "S", count: 2 },
    { a: "S", b: "T", count: 1 },

    { a: "U", b: "V", count: 1 },

    { a: "W", b: "X", count: 1 },
    { a: "X", b: "Y", count: 2 },
    { a: "Y", b: "Z", count: 2 },
    { a: "Z", b: "AA", count: 2 },

    { a: "A", b: "K", count: 1 },
    { a: "C", b: "I", count: 1 },
    { a: "E", b: "Q", count: 2 },

    { a: "G", b: "L", count: 1 },
    { a: "H", b: "P", count: 2 },
    { a: "I", b: "N", count: 1 },
    { a: "J", b: "O", count: 1 },

    { a: "L", b: "T", count: 2 },
    { a: "M", b: "R", count: 1 },
    { a: "P", b: "U", count: 1 },
    { a: "Q", b: "AA", count: 2 },
    { a: "S", b: "Y", count: 2 }
  ]
}
];

const state = {
  puzzleIndex: 0,
  selectedIslandId: null,
  statusMessages: [],
  edges: null,
  allEdges: [],
  puzzleMetas: [],
  islandStatus: new Map(),
  invalidEdgeSet: new Set(),
  puzzleCheckStatus: puzzles.map(() => null)
};

const boardEl = document.getElementById("board");
const puzzleLabelEl = document.getElementById("puzzleLabel");

const checkBtn = document.getElementById("checkBtn");
const solutionBtn = document.getElementById("solutionBtn");
const resetAllBtn = document.getElementById("resetAllBtn");
const pwModal = document.getElementById("pwModal");
const pwInput = document.getElementById("pwInput");
const pwError = document.getElementById("pwError");
const pwConfirm = document.getElementById("pwConfirm");
const pwCancel = document.getElementById("pwCancel");
const pwPrompt = document.getElementById("pwPrompt");

// ===== Passwort-Modal =====
let pwCallback = null;

function showPasswordModal(promptText, callback) {
  pwPrompt.textContent = promptText;
  pwInput.value = "";
  pwError.classList.add("hidden");
  pwModal.classList.remove("hidden");
  pwCallback = callback;
  setTimeout(() => pwInput.focus(), 50);
}

function hidePasswordModal() {
  pwModal.classList.add("hidden");
  pwCallback = null;
}

pwConfirm.addEventListener("click", () => {
  if (!pwCallback) return;
  if (pwCallback(pwInput.value)) {
    hidePasswordModal();
  } else {
    pwError.classList.remove("hidden");
    pwInput.value = "";
    pwInput.focus();
  }
});

pwCancel.addEventListener("click", hidePasswordModal);

pwInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") pwConfirm.click();
  if (e.key === "Escape") hidePasswordModal();
});

pwModal.addEventListener("click", (e) => {
  if (e.target === pwModal) hidePasswordModal();
});

// ===== Hilfsfunktionen =====
function setEdges(newMap) {
  state.allEdges[state.puzzleIndex] = newMap;
  state.edges = newMap;
}

function edgeKey(a, b) {
  return [a, b].sort().join("|");
}

function cloneMap(map) {
  return new Map(map.entries());
}

function getCurrentPuzzle() {
  return puzzles[state.puzzleIndex];
}

function getMeta() {
  return state.puzzleMetas[state.puzzleIndex];
}

function puzzleError(message) {
  throw new Error(`Ungültige Puzzledefinition: ${message}`);
}

function validatePuzzleDefinition(puzzle) {
  if (!Number.isInteger(puzzle.rows) || puzzle.rows < 2) puzzleError(`${puzzle.title}: rows muss >= 2 sein`);
  if (!Number.isInteger(puzzle.cols) || puzzle.cols < 2) puzzleError(`${puzzle.title}: cols muss >= 2 sein`);
  if (!Array.isArray(puzzle.islands) || puzzle.islands.length < 2) puzzleError(`${puzzle.title}: islands fehlen`);
  if (!Array.isArray(puzzle.solution)) puzzleError(`${puzzle.title}: solution fehlt`);

  const ids = new Set();
  const occupied = new Set();
  puzzle.islands.forEach((island) => {
    if (!island || typeof island.id !== "string" || !island.id.trim()) puzzleError(`${puzzle.title}: Insel ohne id`);
    if (ids.has(island.id)) puzzleError(`${puzzle.title}: id doppelt (${island.id})`);
    ids.add(island.id);
    if (!Number.isInteger(island.row) || island.row < 0 || island.row >= puzzle.rows) puzzleError(`${puzzle.title}: row ungültig (${island.id})`);
    if (!Number.isInteger(island.col) || island.col < 0 || island.col >= puzzle.cols) puzzleError(`${puzzle.title}: col ungültig (${island.id})`);
    if (!Number.isInteger(island.value) || island.value < 1) puzzleError(`${puzzle.title}: value ungültig (${island.id})`);
    const posKey = `${island.row},${island.col}`;
    if (occupied.has(posKey)) puzzleError(`${puzzle.title}: zwei Inseln auf gleicher Position`);
    occupied.add(posKey);
  });
}

function buildPuzzleMeta(puzzle) {
  validatePuzzleDefinition(puzzle);
  const islandById = new Map(puzzle.islands.map((i) => [i.id, i]));
  const byRow = new Map();
  const byCol = new Map();

  puzzle.islands.forEach((island) => {
    if (!byRow.has(island.row)) byRow.set(island.row, []);
    if (!byCol.has(island.col)) byCol.set(island.col, []);
    byRow.get(island.row).push(island);
    byCol.get(island.col).push(island);
  });

  byRow.forEach((arr) => arr.sort((a, b) => a.col - b.col));
  byCol.forEach((arr) => arr.sort((a, b) => a.row - b.row));

  const neighbors = new Map();
  const edgeDefs = new Map();

  puzzle.islands.forEach((island) => neighbors.set(island.id, { up: null, right: null, down: null, left: null }));

  byRow.forEach((arr) => {
    for (let i = 0; i < arr.length - 1; i += 1) {
      const left = arr[i];
      const right = arr[i + 1];
      neighbors.get(left.id).right = right.id;
      neighbors.get(right.id).left = left.id;
      edgeDefs.set(edgeKey(left.id, right.id), { a: left.id, b: right.id, orientation: "h" });
    }
  });

  byCol.forEach((arr) => {
    for (let i = 0; i < arr.length - 1; i += 1) {
      const up = arr[i];
      const down = arr[i + 1];
      neighbors.get(up.id).down = down.id;
      neighbors.get(down.id).up = up.id;
      edgeDefs.set(edgeKey(up.id, down.id), { a: up.id, b: down.id, orientation: "v" });
    }
  });

  const solutionMap = new Map();
  puzzle.solution.forEach((edge) => {
    if (!islandById.has(edge.a) || !islandById.has(edge.b)) puzzleError(`${puzzle.title}: solution referenziert unbekannte Insel`);
    if (!Number.isInteger(edge.count) || edge.count < 1 || edge.count > 2) puzzleError(`${puzzle.title}: solution count muss 1 oder 2 sein`);
    const key = edgeKey(edge.a, edge.b);
    if (!edgeDefs.has(key)) puzzleError(`${puzzle.title}: solution enthält keine direkten Nachbarn (${edge.a}-${edge.b})`);
    if (solutionMap.has(key)) puzzleError(`${puzzle.title}: solution enthält doppeltes Inselpaar (${key})`);
    solutionMap.set(key, edge.count);
  });

  const solutionCrossing = getCrossingEdges(solutionMap, edgeDefs, islandById);
  if (solutionCrossing.size) {
    puzzleError(`${puzzle.title}: solution enthält Brückenkreuzungen`);
  }

  const expectedDegrees = new Map();
  islandById.forEach((island, id) => expectedDegrees.set(id, island.value));
  const solutionDegrees = computeIslandDegrees(solutionMap, edgeDefs, islandById);
  islandById.forEach((_, id) => {
    if (solutionDegrees.get(id) !== expectedDegrees.get(id)) {
      puzzleError(`${puzzle.title}: Inselwert und Musterlösung passen nicht zusammen (${id})`);
    }
  });
  if (!isConnected(solutionMap, edgeDefs, islandById)) {
    puzzleError(`${puzzle.title}: Musterlösung ist nicht zusammenhängend`);
  }

  const solutionCount = countSolutions(edgeDefs, islandById, expectedDegrees, 2);
  if (solutionCount < 1) {
    puzzleError(`${puzzle.title}: Puzzle ist nicht lösbar`);
  }
  if (solutionCount > 1) {
    puzzleError(`${puzzle.title}: Puzzle hat mehr als eine Lösung`);
  }

  return { islandById, neighbors, edgeDefs, solutionMap };
}

function countSolutions(edgeDefs, islandById, expectedDegrees, limit = 2) {
  const edgeKeys = [...edgeDefs.keys()];
  const incident = new Map([...islandById.keys()].map((id) => [id, []]));
  edgeKeys.forEach((key, index) => {
    const def = edgeDefs.get(key);
    incident.get(def.a).push(index);
    incident.get(def.b).push(index);
  });

  const edgeValues = new Array(edgeKeys.length).fill(0);
  const degrees = new Map([...islandById.keys()].map((id) => [id, 0]));
  let solutions = 0;

  function maxRemaining(nodeId, position) {
    return incident.get(nodeId).reduce((sum, index) => sum + (index > position ? 2 : 0), 0);
  }

  function backtrack(position) {
    if (solutions >= limit) return;

    if (position >= edgeKeys.length) {
      const allExact = [...expectedDegrees.entries()].every(([id, target]) => degrees.get(id) === target);
      if (!allExact) return;
      const candidate = new Map();
      edgeKeys.forEach((key, index) => candidate.set(key, edgeValues[index]));
      if (getCrossingEdges(candidate, edgeDefs, islandById).size) return;
      if (!isConnected(candidate, edgeDefs, islandById)) return;
      solutions += 1;
      return;
    }

    const key = edgeKeys[position];
    const def = edgeDefs.get(key);
    const aTarget = expectedDegrees.get(def.a);
    const bTarget = expectedDegrees.get(def.b);

    for (let count = 0; count <= 2; count += 1) {
      const aNext = degrees.get(def.a) + count;
      const bNext = degrees.get(def.b) + count;
      if (aNext > aTarget || bNext > bTarget) continue;

      edgeValues[position] = count;
      degrees.set(def.a, aNext);
      degrees.set(def.b, bNext);

      const aFeasible = aNext + maxRemaining(def.a, position) >= aTarget;
      const bFeasible = bNext + maxRemaining(def.b, position) >= bTarget;
      if (aFeasible && bFeasible) backtrack(position + 1);

      degrees.set(def.a, aNext - count);
      degrees.set(def.b, bNext - count);
    }
  }

  backtrack(0);
  return solutions;
}

function getBridgeSegments(edgeMap, edgeDefs, islandById) {
  const segments = [];
  edgeMap.forEach((count, key) => {
    if (count < 1) return;
    const def = edgeDefs.get(key);
    const a = islandById.get(def.a);
    const b = islandById.get(def.b);
    segments.push({ key, orientation: def.orientation, r1: a.row, c1: a.col, r2: b.row, c2: b.col });
  });
  return segments;
}

function getCrossingEdges(edgeMap, edgeDefs, islandById) {
  const segments = getBridgeSegments(edgeMap, edgeDefs, islandById);
  const crossing = new Set();
  for (let i = 0; i < segments.length; i += 1) {
    const s1 = segments[i];
    for (let j = i + 1; j < segments.length; j += 1) {
      const s2 = segments[j];
      if (s1.orientation === s2.orientation) continue;
      const h = s1.orientation === "h" ? s1 : s2;
      const v = s1.orientation === "v" ? s1 : s2;
      const hRow = h.r1;
      const hMinCol = Math.min(h.c1, h.c2);
      const hMaxCol = Math.max(h.c1, h.c2);
      const vCol = v.c1;
      const vMinRow = Math.min(v.r1, v.r2);
      const vMaxRow = Math.max(v.r1, v.r2);
      const intersects = vCol > hMinCol && vCol < hMaxCol && hRow > vMinRow && hRow < vMaxRow;
      if (intersects) {
        crossing.add(h.key);
        crossing.add(v.key);
      }
    }
  }
  return crossing;
}

function computeIslandDegrees(edgeMap, edgeDefs, islandById) {
  const degrees = new Map();
  islandById.forEach((_, id) => degrees.set(id, 0));
  edgeMap.forEach((count, key) => {
    if (!count) return;
    const def = edgeDefs.get(key);
    degrees.set(def.a, degrees.get(def.a) + count);
    degrees.set(def.b, degrees.get(def.b) + count);
  });
  return degrees;
}

function isConnected(edgeMap, edgeDefs, islandById) {
  const ids = [...islandById.keys()];
  if (!ids.length) return false;
  const graph = new Map(ids.map((id) => [id, new Set()]));
  edgeMap.forEach((count, key) => {
    if (!count) return;
    const def = edgeDefs.get(key);
    graph.get(def.a).add(def.b);
    graph.get(def.b).add(def.a);
  });
  const start = ids.find((id) => graph.get(id).size > 0) || ids[0];
  const queue = [start];
  const visited = new Set([start]);
  while (queue.length) {
    const current = queue.shift();
    graph.get(current).forEach((next) => {
      if (visited.has(next)) return;
      visited.add(next);
      queue.push(next);
    });
  }
  return visited.size === ids.length;
}

function validateState() {
  const meta = getMeta();
  const crossingEdges = getCrossingEdges(state.edges, meta.edgeDefs, meta.islandById);
  const degrees = computeIslandDegrees(state.edges, meta.edgeDefs, meta.islandById);
  const islandStatus = new Map();
  const messages = [];

  let allDegreeExact = true;
  meta.islandById.forEach((island, id) => {
    const current = degrees.get(id);
    if (current === island.value) {
      islandStatus.set(id, "ok");
    } else {
      allDegreeExact = false;
      islandStatus.set(id, current > island.value ? "over" : "under");
    }
  });

  if (crossingEdges.size) {
    messages.push({ type: "warn", text: "Es gibt sich kreuzende Brücken." });
  } else {
    messages.push({ type: "ok", text: "Keine Brückenkreuzung erkannt." });
  }

  if (allDegreeExact) {
    messages.push({ type: "ok", text: "Alle Inselwerte stimmen genau." });
  } else {
    messages.push({ type: "warn", text: "Mindestens eine Insel hat zu viele oder zu wenige Brücken." });
  }

  const connected = isConnected(state.edges, meta.edgeDefs, meta.islandById);
  messages.push({ type: connected ? "ok" : "warn", text: connected ? "Alle Inseln sind zusammenhängend." : "Der Graph ist noch nicht vollständig zusammenhängend." });

  const solved = !crossingEdges.size && allDegreeExact && connected;
  if (solved) {
    messages.push({ type: "ok", text: "Puzzle gelöst! Sehr gut!" });
  }

  state.statusMessages = messages;
  state.islandStatus = islandStatus;
  state.invalidEdgeSet = crossingEdges;
  return { solved, crossingEdges, degrees };
}

function setStatus(messages) {
  state.statusMessages = messages;
  renderStatus();
}

function resetEdges() {
  const next = new Map();
  getMeta().edgeDefs.forEach((_, key) => next.set(key, 0));
  setEdges(next);
  state.islandStatus = new Map();
  state.invalidEdgeSet = new Set();
}

function canToggleTo(edgeKeyValue, nextCount) {
  if (nextCount === 0) return { ok: true };
  const meta = getMeta();
  const candidate = cloneMap(state.edges);
  candidate.set(edgeKeyValue, nextCount);
  const crossings = getCrossingEdges(candidate, meta.edgeDefs, meta.islandById);
  if (crossings.size) {
    return { ok: false, reason: "Diese Brücke würde eine Kreuzung erzeugen." };
  }
  return { ok: true };
}

function toggleBridge(a, b) {
  const meta = getMeta();
  const key = edgeKey(a, b);
  if (!meta.edgeDefs.has(key)) {
    setStatus([{ type: "warn", text: "Brücken sind nur zwischen direkten Nachbarn erlaubt." }]);
    return;
  }
  const current = state.edges.get(key) || 0;
  const next = (current + 1) % 3;
  const check = canToggleTo(key, next);
  if (!check.ok) {
    setStatus([{ type: "warn", text: check.reason }]);
    return;
  }
  state.edges.set(key, next);
  state.selectedIslandId = null;
  validateState();
  render();
}

function showSolution() {
  const meta = getMeta();
  const full = new Map();
  meta.edgeDefs.forEach((_, key) => full.set(key, 0));
  meta.solutionMap.forEach((count, key) => full.set(key, count));
  setEdges(full);
  validateState();
  render();
  setStatus([{ type: "ok", text: "Lösung wurde eingeblendet." }]);
}

function switchPuzzle(index) {
  state.puzzleIndex = index;
  state.selectedIslandId = null;
  state.edges = state.allEdges[index];
  validateState();
  state.statusMessages = [{ type: "neutral", text: `Puzzle ${index + 1} geladen. Tippe auf Inseln, um Brücken zu setzen.` }];
  render();
}

function resetAll() {
  puzzles.forEach((_, i) => {
    const next = new Map();
    state.puzzleMetas[i].edgeDefs.forEach((_, key) => next.set(key, 0));
    state.allEdges[i] = next;
  });
  state.puzzleIndex = 0;
  state.selectedIslandId = null;
  state.puzzleCheckStatus = puzzles.map(() => null);
  state.edges = state.allEdges[0];
  state.islandStatus = new Map();
  state.invalidEdgeSet = new Set();
  setStatus([{ type: "neutral", text: "Alle Puzzles wurden zurückgesetzt. Neue Gruppe kann starten." }]);
  render();
}

function renderStatus() {
  // Status-Anzeige wurde entfernt – keine Aktion nötig
}

function renderPuzzleNav() {
  const nav = document.getElementById("puzzleNav");
  nav.innerHTML = "";
  const label = document.createElement("span");
  label.className = "puzzle-nav-label";
  label.textContent = "Puzzle:";
  nav.append(label);
  puzzles.forEach((puzzle, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "nav-btn" + (i === state.puzzleIndex ? " active" : "");
    btn.setAttribute("aria-label", `Zu ${puzzle.title} wechseln`);
    btn.setAttribute("aria-current", i === state.puzzleIndex ? "true" : "false");
    btn.textContent = String(i + 1);
    const checkStatus = state.puzzleCheckStatus[i];
    if (checkStatus) {
      const badge = document.createElement("span");
      badge.className = "status-badge " + checkStatus;
      badge.setAttribute("aria-label", checkStatus === "ok" ? "Richtig gelöst" : "Noch nicht korrekt");
      badge.textContent = checkStatus === "ok" ? "✓" : "✗";
      btn.append(badge);
    }
    btn.addEventListener("click", () => {
      if (i !== state.puzzleIndex) switchPuzzle(i);
    });
    nav.append(btn);
  });
}

function svgCoord(col, row, cell) {
  return {
    x: (col + 0.5) * cell,
    y: (row + 0.5) * cell
  };
}

function createBridgeLine(svg, x1, y1, x2, y2, offsetX, offsetY, bad) {
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", String(x1 + offsetX));
  line.setAttribute("y1", String(y1 + offsetY));
  line.setAttribute("x2", String(x2 + offsetX));
  line.setAttribute("y2", String(y2 + offsetY));
  line.setAttribute("class", "bridge-line");
  if (bad) line.setAttribute("stroke", "#b63d30");
  svg.append(line);
}

function render() {
  const puzzle = getCurrentPuzzle();
  const meta = getMeta();
  puzzleLabelEl.textContent = `${puzzle.title} · ${puzzle.rows}×${puzzle.cols}`;
  boardEl.style.setProperty("--rows", puzzle.rows);
  boardEl.style.setProperty("--cols", puzzle.cols);
  boardEl.innerHTML = "";

  const cellSize = Math.max(44, Math.min(64, Math.floor((window.innerWidth - 120) / (puzzle.cols + 1))));
  boardEl.style.setProperty("--cell", `${cellSize}px`);

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("bridges");
  svg.setAttribute("viewBox", `0 0 ${puzzle.cols * cellSize} ${puzzle.rows * cellSize}`);
  svg.setAttribute("width", String(puzzle.cols * cellSize));
  svg.setAttribute("height", String(puzzle.rows * cellSize));

  state.edges.forEach((count, key) => {
    if (!count) return;
    const def = meta.edgeDefs.get(key);
    const a = meta.islandById.get(def.a);
    const b = meta.islandById.get(def.b);
    const p1 = svgCoord(a.col, a.row, cellSize);
    const p2 = svgCoord(b.col, b.row, cellSize);
    const bad = state.invalidEdgeSet.has(key);
    if (count === 1) {
      createBridgeLine(svg, p1.x, p1.y, p2.x, p2.y, 0, 0, bad);
    } else {
      const horizontal = a.row === b.row;
      const dx = horizontal ? 0 : 6;
      const dy = horizontal ? 6 : 0;
      createBridgeLine(svg, p1.x, p1.y, p2.x, p2.y, dx, dy, bad);
      createBridgeLine(svg, p1.x, p1.y, p2.x, p2.y, -dx, -dy, bad);
    }
  });

  boardEl.append(svg);

  puzzle.islands.forEach((island) => {
    const degree = computeIslandDegrees(state.edges, meta.edgeDefs, meta.islandById).get(island.id);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "island";
    button.style.left = `calc(((${island.col} + 0.5) * var(--cell)))`;
    button.style.top = `calc(((${island.row} + 0.5) * var(--cell)))`;
    button.dataset.id = island.id;
    button.textContent = island.value;
    button.setAttribute("aria-label", `Insel ${island.id}, Soll ${island.value}, aktuell ${degree}`);
    if (state.selectedIslandId === island.id) button.classList.add("selected");
    const degreeState = state.islandStatus.get(island.id);
    if (degreeState === "ok") button.classList.add("valid");
    if (degreeState === "over") button.classList.add("invalid");
    button.addEventListener("click", () => {
      if (state.selectedIslandId && state.selectedIslandId !== island.id) {
        toggleBridge(state.selectedIslandId, island.id);
      } else {
        state.selectedIslandId = island.id;
        render();
      }
    });
    boardEl.append(button);
  });

  renderPuzzleNav();
  renderStatus();
}

function initialize() {
  state.puzzleMetas = puzzles.map(buildPuzzleMeta);
  // Kanten-Zustand für jedes Puzzle initialisieren
  state.allEdges = puzzles.map((_, i) => {
    const next = new Map();
    state.puzzleMetas[i].edgeDefs.forEach((_, key) => next.set(key, 0));
    return next;
  });
  state.edges = state.allEdges[0];
  state.selectedIslandId = null;
  setStatus([{ type: "neutral", text: "Puzzle geladen. Wähle eine Insel und tippe dann auf eine Nachbarinsel, um eine Brücke zu setzen." }]);
  render();

  checkBtn.addEventListener("click", () => {
    const { solved } = validateState();
    state.puzzleCheckStatus[state.puzzleIndex] = solved ? "ok" : "wrong";
    render();
  });

  solutionBtn.addEventListener("click", () => {
    showPasswordModal("Bitte gib das Lehrer-Passwort ein, um die Lösung anzuzeigen.", (pw) => {
      if (pw !== SOLUTION_PASSWORD) return false;
      showSolution();
      return true;
    });
  });

  resetAllBtn.addEventListener("click", () => {
    showPasswordModal("Bitte gib das Passwort ein, um alle Puzzles für eine neue Gruppe zurückzusetzen.", (pw) => {
      if (pw !== RESET_ALL_PASSWORD) return false;
      resetAll();
      return true;
    });
  });

  window.addEventListener("resize", render);
}

initialize();
