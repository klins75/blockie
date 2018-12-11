
let map = {
	obstacleColor : 'rgba(0, 0, 0, 0)',
	SafeColor : 'rgba(0, 0, 0, 0)',
  load : function() {
		// change this to a .forEach to get
		// rid of pathIndex crap
    for (let i=0; i<GRID_COLS; i++) {
      grid[i] = (grid[i] || []);
      for (let j=0; j<GRID_ROWS; j++) {
        if(grid[i][j]=='Obstacle'){}
        else{grid[i][j] = 'Safe'}
      }
    }
  },
  update : function() {
    for(let i=0; i < GRID_COLS; i++){
      for(let j=0; j < GRID_ROWS; j++) {
				// edit mode wall-making
  			if(mapModeEdit && mouseDown){
    			if(eWhich == 1){
						grid[mouseMoveCoorX][mouseMoveCoorY]="Obstacle";
					}
					if(eWhich == 3){
    				grid[mouseMoveCoorX][mouseMoveCoorY]="Safe";
					}
				} // --------------------
				if(grid[i][j] =='Obstacle'){
          drawRectangle([i]*GRID_WIDTH, [j]*GRID_HEIGHT, GRID_WIDTH-GRID_GAP, GRID_HEIGHT-GRID_GAP, this.obstacleColor);
				} else /*(grid[i][j] == 'Safe')*/{
          drawRectangle([i]*GRID_WIDTH, [j]*GRID_HEIGHT, GRID_WIDTH-GRID_GAP, GRID_HEIGHT-GRID_GAP, this.SafeColor);
        }
        
      }      
    }
	},
	clear : function() {
		// change this to a .forEach
    for (let i=0; i<GRID_COLS; i++) {
      grid[i] = (grid[i] || []);
      for (let j=0; j<GRID_ROWS; j++) {
        grid[i][j] = 'Safe'
      }
    }
	}
}




let gridPrint = [

	["Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle"],

	["Safe", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Obstacle", "Obstacle"],

	["Obstacle", "Obstacle", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Safe", "Obstacle"],

	["Obstacle", "Obstacle", "Obstacle", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Obstacle", "Safe", "Obstacle"],

	["Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Safe", "Obstacle"],

	["Obstacle", "Obstacle", "Safe", "Safe", "Safe", "Obstacle", "Obstacle", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Obstacle", "Obstacle"],

	["Obstacle", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Obstacle", "Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Safe", "Safe", "Obstacle"],

	["Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Obstacle", "Obstacle"],

	["Obstacle", "Safe", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle"],

	["Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Obstacle", "Obstacle", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Safe", "Obstacle"],

	["Obstacle", "Safe", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle"],

	["Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Obstacle"],

	["Obstacle", "Safe", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Safe", "Obstacle"],

	["Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Obstacle"],

	["Obstacle", "Safe", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle"],

	["Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Obstacle"],

	["Obstacle", "Safe", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Safe", "Obstacle"],

	["Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Obstacle"],

	["Obstacle", "Safe", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle"],

	["Obstacle", "Obstacle", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Obstacle"],

	["Obstacle", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Safe", "Obstacle"],

	["Obstacle", "Safe", "Obstacle", "Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Obstacle"],

	["Obstacle", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle"],

	["Obstacle", "Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Obstacle"],

	["Obstacle", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle"],

	["Obstacle", "Safe", "Obstacle", "Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle"],

	["Obstacle", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle"],

	["Obstacle", "Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle"],

	["Obstacle", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle"],

	["Obstacle", "Safe", "Obstacle", "Obstacle", "Safe", "Obstacle", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle"],

	["Obstacle", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle"],

	["Obstacle", "Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle"],

	["Obstacle", "Obstacle", "Safe", "Safe", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Safe", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle"],

	["Obstacle", "Obstacle", "Obstacle", "Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle"],

	["Obstacle", "Safe", "Safe", "Safe", "Safe", "Obstacle", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Obstacle", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle"],

	["Obstacle", "Safe", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Safe", "Obstacle", "Obstacle", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Obstacle"],

	["Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Safe", "Obstacle", "Obstacle", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Safe", "Obstacle"],

	["Obstacle", "Safe", "Obstacle", "Safe", "Safe", "Obstacle", "Safe", "Obstacle", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Obstacle"],

	["Obstacle", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Obstacle", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle"],

	["Obstacle", "Safe", "Obstacle", "Safe", "Safe", "Obstacle", "Safe", "Obstacle", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Obstacle"],

	["Obstacle", "Safe", "Obstacle", "Safe", "Safe", "Obstacle", "Safe", "Obstacle", "Obstacle", "Safe", "Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Safe", "Obstacle"],

	["Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Obstacle"],

	["Obstacle", "Safe", "Obstacle", "Safe", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle"],

	["Obstacle", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle"],

	["Obstacle", "Safe", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle"],

	["Obstacle", "Safe", "Obstacle", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle"],

	["Obstacle", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Obstacle", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Safe", "Obstacle", "Obstacle", "Obstacle", "Obstacle"],

	["Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle", "Obstacle"]


];
