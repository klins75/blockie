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
		this.pathInstructions = [];
		// updateSprite(this);
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
				if(pathIndex < this.pathInstructions.length){
					x = this.pathInstructions[pathIndex].x; y = this.pathInstructions[pathIndex].y;
					pathIndex ++;
				} else {
					// finished, reset 'busy' and 'i' and close animation
					busy = false;
					let prevGoalX = Math.floor(this.x/GRID_WIDTH);
					let prevGoalY = Math.floor(this.y/GRID_HEIGHT);
					map.load();
					
					grid[prevGoalX][prevGoalY]='Empty';
					this.pathInstructions.length = 0;
					window.cancelAnimationFrame(requestID2);
					pathIndex = 0;
					
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
		this.draw = function(){
			ctx.drawImage(spriteSheet, this.frameX, this.frameY, this.width, this.height, this.x, this.y, 20, 20);
		}
	}
}
let player1 = new Player(0, 0, 20, 20, spriteSheet, 0, 0,); 	
	
	
	
	
	
	
	
	
	
	// Blockie
  // let block1;



// class Player1 extends Component 
// {
// 	constructor(width, height, color, x, y, type, frameX, frameY)
// 	{
// 		super(width, height, color, x, y, type);
// 		this.frameX = frameX;
// 		this.frameY = frameY;
// 		this.inventory = 
// 		{
// 			'keys':[]
// 		}
// 		this.newPos = function() 
// 		{
// 			moveThing(this);	
// 			this.x += this.speedX;
// 			this.y += this.speedY;
// 			boundaryCheck(this);
// 			doorOpen(this);
// 			collisionDetect(this);
// 			itemPickUp(this);
			
// 		}
// 		this.draw = function()
// 		{
// 			ctx.drawImage(spriteSheet, this.frameX, this.frameY, this.width, this.height, this.x, this.y, 18, 18);
// 		}
// 	}
// }



