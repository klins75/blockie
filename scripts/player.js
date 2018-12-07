class Player1 extends Component 
{
	constructor(width, height, color, x, y, type, frameX, frameY)
	{
		super(width, height, color, x, y, type);
		this.frameX = frameX;
		this.frameY = frameY;
		this.inventory = 
		{
			'keys':[]
		}
		this.newPos = function() 
		{
			moveThing(this);	
			this.x += this.speedX;
			this.y += this.speedY;
			boundaryCheck(this);
			doorOpen(this);
			collisionDetect(this);
			itemPickUp(this);
			
		}
		this.draw = function()
		{
			ctx.drawImage(spriteSheet, this.frameX, this.frameY, this.width, this.height, this.x, this.y, 18, 18);
		}
	}
}

