window.onload = () => {
  // requestID = requestAnimationFrame(drawAll);
  // block1 = new Block(20, 0, 20, 20, 'orange');
  grid = gridPrint; 
  map.load();
  // loadMap();
  // colorGrid();
  map.update();
  startConsole();
  spriteSheet = new Image();
  spriteSheet.src = 'images/spriteSheet2.png';
  spriteSheet.onload = drawAll;
}
  
// draw function for the canvas
function drawAll(){
  requestID = requestAnimationFrame(drawAll);
  // clear previous
  ctxU.clearRect(0, 0, upperCanvas.width, upperCanvas.height);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // update map
  map.update();


  if(!mapModeEdit){
    if(display){display.draw()};
    if(displayPing){displayPing.draw()};
    player1.draw();
  }
}
  
  // MESSAGES
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
// ANIMATIONS
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

// generic draw instructions for a rectangle
const drawRectangle = (x, y, width, height, color) => {
  ctx.save();
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
  ctx.fill();
  ctx.restore();  
}
 


  
  

  
  
  

