class Block {
	constructor(x, y, width, height, color) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = color;
		this.vel = 5;
		this.pathIndex = 0;
		// draw instruction
		this.draw = () => {
			drawRectangle(this.x, this.y, this.width, this.height, this.color);
		}
		this.pathInstructions = [];
		// updateSprite(this);

		// follow path from pathInstructions
		this.moveToXY = () => {
			requestID2 = requestAnimationFrame( () => {
				this.moveToXY()
			})
			busy = true;
			let toX = this.pathInstructions[this.pathIndex].x;
			let toY = this.pathInstructions[this.pathIndex].y;
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
			// look for next waypoint, if it exists
			if((Math.abs(distX) < this.vel/2) && Math.abs(distY) < this.vel/2){
				if(this.pathIndex < this.pathInstructions.length-1){
					// toX = this.pathInstructions[this.pathIndex].x;
					// toY = this.pathInstructions[this.pathIndex].y;
					this.pathIndex ++;
				} else {
					// finished, reset 'busy' and 'i' and close animation
					busy = false;
					let prevGoalX = Math.floor(this.x/GRID_WIDTH);
					let prevGoalY = Math.floor(this.y/GRID_HEIGHT);
					map.load();
					
					grid[prevGoalX][prevGoalY]='Safe';
					this.pathInstructions.length = 0;
					window.cancelAnimationFrame(requestID2);
					this.pathIndex = 0;
					
				}  
			}
		}
		
	}
	get direction(){
		if(this.pathIndex > 0){
				if((this.pathInstructions[this.pathIndex].x - this.pathInstructions[this.pathIndex -1].x) < 0){
				return 'West'
			}
			if((this.pathInstructions[this.pathIndex].x - this.pathInstructions[this.pathIndex -1].x) > 0){
				return 'East'
			}
			if((this.pathInstructions[this.pathIndex].y - this.pathInstructions[this.pathIndex -1].y) > 0){
				return 'South'
			}
			if((this.pathInstructions[this.pathIndex].y - this.pathInstructions[this.pathIndex -1].y) < 0){
				return 'North'
			}
		}
		else {
			return 'East'
		}
	};
} // end class declaration

class Player extends Block {
	constructor(x, y, width, height, image, frameX, frameY) {
		super(x, y, width, height);
		this.frameX = frameX;
		this.frameY = frameY;
		this.image = image;
		this.draw = function(){
			if(this.pathIndex > 0) {
				if(this.direction == 'East'){
				this.frameY = 0;
				takeStep(this);
				}
				if(this.direction == 'West'){
					this.frameY = 100;
					takeStep(this);
				}
				if(this.direction == 'South'){
					this.frameY = 200;
					takeStep(this);
				}
				if(this.direction == 'North'){
					this.frameY = 300;
					takeStep(this);
				}
			}
			
			ctx.drawImage(spriteSheet, this.frameX, this.frameY, this.width, this.height, this.x, this.y, 20, 20);
			
		}
		
	}
}
let player1 = new Player(44*GRID_WIDTH, 21*GRID_HEIGHT, 100, 100, spriteSheet, 0, 0,); 	
let count = 0;
function takeStep(e){
	if(e.frameX < 1500){
		if(count%1==0){
			e.frameX += 100;
		}			
	} else{
		console.log(e.frameX);
		e.frameX = 0;
		count = 0;
		console.log('leaving function');
		
		return;			
	} console.log(count);
	count += 2;	
}
	
	
	
	
	
	
	
	
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



