// -------------- CANVAS EVENTS ------------- //

// CANVAS MOUSEDOWN
canvasUpper.addEventListener('mousedown', function(e){
  eWhich = e.which;
  // console.log(eWhich);
  mouseDown = true;
  e.preventDefault();
});
// CANVAS MOUSEUP
canvasUpper.addEventListener('mouseup', function(e){
  mouseDown = false;
  eWhich = 0;
});
// CANVAS MOUSEMOVE
canvasUpper.addEventListener('mousemove', function(e){
  // monFiveL1.innerHTML = e.offsetX + ' ' + e.offsetY;
  mouseMoveCoorX = Math.floor(e.offsetX/GRID_WIDTH);
  mouseMoveCoorY = Math.floor(e.offsetY/GRID_HEIGHT);
});
// CANVAS RIGHT CLICK
document.addEventListener('contextmenu', function(e) { 
  e.preventDefault();
}, false);
// CANVAS LEFT CLICK
upperCanvas.addEventListener('click', function(e){

  // click coordinates in (x,y) and [gridX][gridY]
  let xCoor = e.offsetX;
  let yCoor = e.offsetY;
  let gridX = Math.floor(xCoor/GRID_WIDTH);
  let gridY = Math.floor(yCoor/GRID_HEIGHT);

  // LEFT-CLICK functions in Non-Edit Mode
  if(!mapModeEdit){
    // ensure destination not an obstacle
    if(grid[gridX][gridY] != 'Obstacle'){
      // if player is already moving
      if(busy){
        let currentInst = player1.pathInstructions[player1.pathIndex];  
        busy = false;
        let prevGoalX = Math.floor(player1.x/GRID_WIDTH);
        let prevGoalY = Math.floor(player1.y/GRID_HEIGHT);
        map.load();					
        grid[prevGoalX][prevGoalY]='Safe';
        player1.pathInstructions.length = 0;
        player1.pathIndex = 0;
        window.cancelAnimationFrame(requestID2);
        player1.pathInstructions.push(currentInst);
        player1.moveToXY();
        return;
      }
      // ping animation
      ping(xCoor, yCoor);
      // set goal
      grid[gridX][gridY] = 'Goal';
      // get player's [gridX][gridY] and pass them
      // to findNewPath()
      let startX = Math.floor(player1.x/GRID_WIDTH);
      let startY = Math.floor(player1.y/GRID_HEIGHT);
      let path = findPath(startX, startY);
      if(!path){
        grid[gridX][gridY] = 'Safe';
        map.load();
        return
      }
      player1.pathInstructions = path;
      // player1.pathInstructions = findPath(startX, startY);

      player1.moveToXY();
    }    
  }
})



// ----------- NON CANVAS EVENTS -------------- //

// DOCUMENT LEFT CLICK
document.addEventListener('click', function(e){
  if(e.target.value == 'editButton')
  {
    if(!mapModeEdit){
      mapModeEdit = true;
      GRID_GAP = 1;
      map.obstacleColor = 'rgba(80, 80, 80, .6)';
      map.load();
    } else if(mapModeEdit){
      mapModeEdit = false;
      GRID_GAP = 0;
      map.obstacleColor = 'rgba(0, 0, 0, 0)';
      map.load();
    }
  }
  switch(e.target.value) {
    case 'submitMap':
      if(confirm("Previous map will be overwritten")) {
        localStorage.setItem('grid', JSON.stringify(grid));
      }
      break;
    case 'getMap':
      grid = JSON.parse(localStorage.getItem('grid'));
      break;
    case 'submitDefaultMap':
      if(confirm("Are you sure (default map will be overwritten)")){
        localStorage.setItem('defaultMap', JSON.stringify(grid));
      }
      break;
    case 'getDefaultMap':
      grid = JSON.parse(localStorage.getItem('defaultMap'));
      break;
    case 'clearMap':
      map.clear();
      break;
    case 'pause':
      let currentInst = player1.pathInstructions[player1.pathIndex];    
      busy = false;
      let prevGoalX = Math.floor(player1.x/GRID_WIDTH);
      let prevGoalY = Math.floor(player1.y/GRID_HEIGHT);
      map.load();					
      grid[prevGoalX][prevGoalY]='Safe';
      player1.pathInstructions.length = 0;
      player1.pathIndex = 0;
      window.cancelAnimationFrame(requestID2);
      player1.pathInstructions.push(currentInst);
      player1.moveToXY();
      
  }

});


