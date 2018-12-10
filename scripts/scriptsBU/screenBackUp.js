window.onload = () => {
  requestID = requestAnimationFrame(drawAll);
  block1 = new Block(0, 0, 20, 20, 'orange'); 
    
  colorGrid();
  startConsole();
}

  // canvas
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  // upper canvas
  let displayPing = false;
  let display = false;
  const upperCanvas = document.getElementById('canvasUpper');
  const ctxU = upperCanvas.getContext('2d');
  
  
  
  // Blockie
  let block1;
  let spriteSheet = document.getElementById('spriteSheet');
  // request for a separate animation frame (cheesy workaround)
  let requestID2;
  // mapMode: normal(false) or edit(true)
  let mapModeEdit = false;
  // mousedown check (for map editing)
  let mouseDown = false;
  eWhich = [];
  
  
  // draw function for the canvas
  const drawAll = () => {
    // edit mode wall-making
    if(mapModeEdit && mouseDown){
      if(eWhich == 1)
      grid[mouseMoveCoorX][mouseMoveCoorY]="Obstacle";
    } if(eWhich == 3){
      grid[mouseMoveCoorX][mouseMoveCoorY]="Empty";
    }
    requestID = requestAnimationFrame(drawAll);
    ctxU.clearRect(0, 0, upperCanvas.width, upperCanvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    colorGrid();
    
    // messages on upper canvas
    if(!mapModeEdit){
      if(display){display.draw()};
      if(displayPing){displayPing.draw()};
      block1.draw();
      player1.draw();
    }
    
  }
  
  
  function displayMessage(text, duration){
    // displays on upper canvas
    display = new Message(text, duration);
    // display.text = text;
    setTimeout(function(){
      display = false
    },duration*1000);
  }

  class Message {
    constructor(text, duration) {
      this.text = text;
      this.duration = duration;
      this.draw = () => {
        ctx.restore();
        ctx.fillStyle = 'white';
        ctx.font = '25px Monospace';
        ctx.fillText(text, 40, 240);
        ctx.fill();
        // ctxU.restore();
      }
    }
  }

  function ping(x, y) {
    displayPing = new Ping(x,y);
    setTimeout(function(){
      displayPing = false
    },600);
  }

  class Ping {
    constructor(x,y) {
      this.x = x;
      this.y = y;
      this.radius = 5;
      this.finn = 1;
      this.color1 = 200;
      this.color2 = 200;

      this.draw = function() {
        ctxU.save();
        ctxU.beginPath();
        ctxU.strokeStyle = `rgb(${this.color1},${this.color2},${this.color2})`;
        ctxU.globalAlpha = this.finn;
        ctxU.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        ctxU.stroke();
        this.radius += 1.8;
        this.finn -= .04;
        this.color1 -= 10;
        this.color2 += 10;
        // ctxU.restore();
      }
    }
  }

  class Block {
    constructor(x, y, width, height, color) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = color;
      this.vel = 5;
      // draw instruction
      this.draw = () => {
        drawRectangle(this.x, this.y, this.width, this.height, this.color);
      }
      // follow path from pathInstructions
      this.moveToXY = (timestamp, x, y) => {
        requestID2 = requestAnimationFrame( () => {
          this.moveToXY(timestamp, x, y)
        })
        busy = true;
        let toX = Number(x);
        let toY = Number(y);
        let distX = toX - this.x;
        let distY = toY - this.y;
        let resultant = Math.sqrt(Math.pow(distX, 2) + Math.pow(distY,2));
        // controlling x and y motion. 
        if(Math.abs(distX) > 0) {
          if(distX > 0){this.x += Math.abs((distX)/resultant)*this.vel}
          if(distX < 0){this.x -= Math.abs((distX)/resultant)*this.vel}   
        }
        if(Math.abs(distY) > 0){
          if(distY > 0){this.y += Math.abs((distY)/resultant)*this.vel}
          if(distY < 0){this.y -= Math.abs((distY)/resultant)*this.vel}
        }
        // console.log(`distX= ${distX}, distY= ${distY}`);
        // look for next waypoint, if it exists
        if((Math.abs(distX) < this.vel/2) && Math.abs(distY) < this.vel/2){
          if(pathIndex < pathInstructions.length){
            x = pathInstructions[pathIndex].x; y = pathInstructions[pathIndex].y;
            pathIndex ++;
          } else {
            // finished, reset 'busy' and 'i' and close animation
            busy = false;
            let prevGoalX = Math.floor(this.x/GRID_WIDTH);
            let prevGoalY = Math.floor(this.y/GRID_HEIGHT);
            resetGrid();
            
            grid[prevGoalX][prevGoalY]='Empty';
            pathInstructions.length = 0;
            window.cancelAnimationFrame(requestID2);
            pathIndex = 1;
          }  
        }
      }
    }
  } // end class declaration

  class Player extends Block {
    constructor(x, y, width, height, image, frameX, frameY) {
      super(x, y, width, height);
      this.frameX = frameX;
      this.frameY = frameY;
      this.image = image;
      this.draw = () => {
        ctx.drawImage(spriteSheet, this.frameX, this.frameY, this.width, this.height, this.x, this.y, 20, 20);
      }
    }
  }
  let player1 = new Player(10, 10, 20, 20, spriteSheet, 0, 0,);

  // global counter (cheesy workaround)
  let pathIndex = 1;

  // generic draw instructions for a rectangle
  const drawRectangle = (x, y, width, height, color) => {
    ctx.save();
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    ctx.fill();
    ctx.restore();
    
  }
  // set busy to 'false' initially
  let busy = false;
  
  // path instructions
  let pathInstructions = [];  


  // MOUSEDOWN/UP events: (for map editing)
  canvasUpper.addEventListener('mousedown', function(e){
    eWhich = e.which;
    // console.log(eWhich);
    mouseDown = true;
    e.preventDefault();
  });
  canvasUpper.addEventListener('mouseup', function(e){
    mouseDown = false;
    eWhich = 0;
  });
  // MOUSEMOVE event for map editing
  canvasUpper.addEventListener('mousemove', function(e){
    // monFiveL1.innerHTML = e.offsetX + ' ' + e.offsetY;
    mouseMoveCoorX = Math.floor(e.offsetX/GRID_WIDTH);
    mouseMoveCoorY = Math.floor(e.offsetY/GRID_HEIGHT);
  });
  // prevent right-click context menu
  document.addEventListener('contextmenu', function(e) { 
    e.preventDefault();
  }, false);

  let mouseMoveCoorX = [];
  let mouseMoveCoorY = [];
  
  // toggle edit mode
  document.addEventListener('click', function(e){
    if(e.target.value == 'editButton')
    {
      if(!mapModeEdit){
        mapModeEdit = true;
        GRID_GAP = 1;
        resetGrid();
      } else if(mapModeEdit){
        mapModeEdit = false;
        GRID_GAP = 0;
        resetGrid();
      }
    }
    if(e.target.value == 'submitMap')
    {
      if(confirm("Are you sure (previous map will be overwritten)")){
        localStorage.setItem('grid', JSON.stringify(grid));
      }
    }
    if(e.target.value == 'getMap')
    {
      grid = JSON.parse(localStorage.getItem('grid'));
    }
    if(e.target.value == 'submitDefaultMap')
    {
      if(confirm("Are you sure (default map will be overwritten)")){
        localStorage.setItem('defaultMap', JSON.stringify(grid));
      }
    }
    if(e.target.value == 'getDefaultMap')
    {
      grid = JSON.parse(localStorage.getItem('defaultMap'));
    }
  });
  // submit map
  
  
  // set goal/build walls
  upperCanvas.addEventListener('click', function(e){
    let xCoor = e.offsetX;
    let yCoor = e.offsetY;
    let gridX = Math.floor(xCoor/GRID_WIDTH);
    let gridY = Math.floor(yCoor/GRID_HEIGHT);

    if(!mapModeEdit){
      let startX = Math.floor(block1.x/GRID_WIDTH);
      let startY = Math.floor(block1.y/GRID_HEIGHT);
      grid[startX][startY] = "Start";  // will we have to reverse these?      
      ping(xCoor, yCoor);
      grid[gridX][gridY] = 'Goal';
      findNewPath(startX, startY);
      goBlockie();
      grid[startX][startY]="Empty";
    }
    // if(mapModeEdit){
    //   GRID_GAP = 1;

    // }
  })

  function goBlockie(){
    if(busy){
      /*window.cancelAnimationFrame(requestID2)*/
      return}
    let a = 0;
    let b = 0;
    let x = pathInstructions[a].x;
    let y = pathInstructions[b].y;
      let z = 0;
      block1.moveToXY(z, x, y);
  };

  
  

  
  
  

