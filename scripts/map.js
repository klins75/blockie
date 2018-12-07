// Create a 4x4 grid
// Represent the grid as a 2-dimensional array
// let gridWidth = 48;
// let gridHeight = 30;
let grid = [];
// grid for map
const GRID_WIDTH = 20;
const GRID_HEIGHT = 20;
const GRID_GAP = 2;
const GRID_COLS = 48;
const GRID_ROWS = 30;
let obstacles = [];

function resetGrid(){
  for (let i=0; i<GRID_COLS; i++) {
    grid[i] = (grid[i] || []);
    for (let j=0; j<GRID_ROWS; j++) {
      if(grid[i][j]=='Obstacle'){console.log(`${grid[i][j]}`)}
      else{grid[i][j] = 'Empty'}
    }
  }



}
resetGrid();
  function colorGrid() {
    for(let i=0; i < GRID_COLS; i++){
      for(let j=0; j < GRID_ROWS; j++) {
        if(grid[i][j] == 'Empty'){
          drawRectangle([i]*GRID_WIDTH, [j]*GRID_HEIGHT, GRID_WIDTH-GRID_GAP, GRID_HEIGHT-GRID_GAP, 'gray');
        }
        if(grid[i][j] =='Obstacle'){
          drawRectangle([i]*GRID_WIDTH, [j]*GRID_HEIGHT, GRID_WIDTH-GRID_GAP, GRID_HEIGHT-GRID_GAP, 'darkblue');
        }
        if(grid[i][j]=='Goal'){
          drawRectangle([i]*GRID_WIDTH, [j]*GRID_HEIGHT, GRID_WIDTH-GRID_GAP, GRID_HEIGHT-GRID_GAP, 'red');
        }
        if(grid[i][j]=='Start'){
          drawRectangle([i]*GRID_WIDTH, [j]*GRID_HEIGHT, GRID_WIDTH-GRID_GAP, GRID_HEIGHT-GRID_GAP, 'green');
        }
        if(grid[i][j]=='Visited'){
          drawRectangle([i]*GRID_WIDTH, [j]*GRID_HEIGHT, GRID_WIDTH-GRID_GAP, GRID_HEIGHT-GRID_GAP, 'lightblue');
        }
        
      }
      
    }
  }
 

  


  // grid[2][0] = "Obstacle";
  // grid[2][1] = "Obstacle";
  // grid[2][2] = "Obstacle";
  // grid[2][3] = "Obstacle";
  // grid[2][4] = "Obstacle";
  // grid[2][5] = "Obstacle";
  // grid[2][6] = "Obstacle";
  // grid[2][7] = "Obstacle";
  // grid[2][8] = "Obstacle";
  // grid[2][9] = "Obstacle";

  // grid[12][12] = "Obstacle";
  // grid[13][12] = "Obstacle";
  // grid[14][12] = "Obstacle";
  // grid[15][12] = "Obstacle";
  // grid[16][12] = "Obstacle";
  // grid[17][12] = "Obstacle";
  // grid[18][12] = "Obstacle";
  // grid[19][12] = "Obstacle";
  // grid[20][12] = "Obstacle";
  // grid[22][12] = "Obstacle";

  // grid[20][13] = "Obstacle";
  // grid[20][14] = "Obstacle";
  // grid[20][15] = "Obstacle";
  // grid[20][16] = "Obstacle";
  // grid[20][17] = "Obstacle";
  // grid[20][18] = "Obstacle";
  // grid[20][19] = "Obstacle";
  // grid[20][20] = "Obstacle";
  // grid[20][21] = "Obstacle";
  // grid[20][22] = "Obstacle";

  // grid[21][16] = "Obstacle";
  // grid[22][16] = "Obstacle";
  // grid[23][16] = "Obstacle";
  // grid[24][16] = "Obstacle";
  // grid[25][16] = "Obstacle";
  // grid[26][16] = "Obstacle";
  // grid[29][16] = "Obstacle";

  // grid[0][12] = "Obstacle";
  // grid[1][12] = "Obstacle";
  // grid[2][12] = "Obstacle";
  // grid[3][12] = "Obstacle";
  // grid[4][12] = "Obstacle";
  // grid[5][12] = "Obstacle";
  // grid[6][12] = "Obstacle";
  // grid[7][12] = "Obstacle";
  // grid[8][12] = "Obstacle";
  // grid[9][12] = "Obstacle";

  // grid[12][13] = "Obstacle";
  // grid[12][14] = "Obstacle";
  // grid[12][15] = "Obstacle";
  // grid[12][16] = "Obstacle";
  // grid[12][17] = "Obstacle";
  // grid[12][18] = "Obstacle";
  // grid[12][19] = "Obstacle";
  // grid[12][20] = "Obstacle";
  // grid[12][21] = "Obstacle";
  // grid[12][22] = "Obstacle";

  // grid[11][15] = "Obstacle";
  // grid[10][15] = "Obstacle";
  // grid[9][15] = "Obstacle";
  // grid[8][15] = "Obstacle";
  // grid[7][15] = "Obstacle";
  // grid[6][15] = "Obstacle";
  // grid[5][15] = "Obstacle";
  // grid[4][15] = "Obstacle";





 

// COMPONENT CONSTRUCTOR
class Component {

	constructor (width, height, color, x, y, type){
		this.width = width;
		this.height = height;
		this. color = color;
		this.x = x;
		this.y = y;
		this.type = type;
		this.speedX = 0;
		this.speedY = 0;
		this.draw = function(){
			// Chooses what type, and Draws it
			if (this.type == "text") 
			{
				ctx.font = this.width + " " + this.height;
				ctx.fillStyle = color;
				ctx.fillText(this.text, this.x, this.y);
			} 
			else if(this.type == 'circle') 
			{
				let radius = this.width;
				ctx.beginPath();				
				ctx.arc(this.x, this.y, radius, 0, 2*Math.PI,false);
				ctx.fillStyle = color;
				ctx.fill();
			} else if(this.type == 'image') 
			{
        let src = this.color;
        let xCoor = this.x;
        let yCoor = this.y;
				ctx.drawImage(src, xCoor, yCoor);
			
			} 
			else 
			{
				ctx.fillStyle = color;
				ctx.fillRect(this.x, this.y, this.width, this.height);
			}
		}	
		// Updating the object's position
		this.newPos = function() {
			this.x += this.speedX;
			this.y += this.speedY;
			boundaryCheck(this);			
		}		
	}

	// remember cicles don't have top,bottom,sides
	get top() { return this.y}   
	get bottom() {return this.y + this.height}
	get left() {return this.x}
	get right() {return this.x + this.width}
	get center() {return [this.x + this.width/2, this.y + this.width/2]}
}




