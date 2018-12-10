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
    if(grid[gridX][gridY] == 'Obstacle'){return}
    // ping animation
    ping(xCoor, yCoor);
    // update grid to reflect path   
    grid[gridX][gridY] = 'Goal';
    
    // get player's [gridX][gridY] and pass them
    // to findNewPath()
    let startX = Math.floor(player1.x/GRID_WIDTH);
    let startY = Math.floor(player1.y/GRID_HEIGHT);
    findNewPath(startX, startY);
    
    // send player to destination
    goBlockie();
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
      map.load();
    } else if(mapModeEdit){
      mapModeEdit = false;
      GRID_GAP = 0;
      map.load();
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


