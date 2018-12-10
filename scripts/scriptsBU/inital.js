

// checks whether block.move is in process
let busy = false;  

// track mouse (find a way to get rid of this)
let mouseMoveCoorX = [];
let mouseMoveCoorY = [];

// canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// upper canvas
let displayPing = false;
let display = false;
const upperCanvas = document.getElementById('canvasUpper');
const ctxU = upperCanvas.getContext('2d');

let spriteSheet = document.getElementById('spriteSheet');
// request for a separate animation frame (cheesy workaround)
let requestID2;
// mapMode: normal(false) or edit(true)
let mapModeEdit = false;
// mousedown check (for map editing)
let mouseDown = false;
eWhich = [];

// map constants
let grid = [];
const GRID_WIDTH = 20;
const GRID_HEIGHT = 20;
let GRID_GAP = 1;
const GRID_COLS = 48;
const GRID_ROWS = 30;
let obstacles = [];

// global counter (cheesy workaround)
let pathIndex = 0;
// path instructions
// let pathInstructions = []; 

// let newPath; // move this or kill it

// let pathInstructionsXCoor = 0;
// let pathInstructionsYCoor = 0;














// indexedDB constants
let db;
const customerData = [
  { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
  { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" }
];