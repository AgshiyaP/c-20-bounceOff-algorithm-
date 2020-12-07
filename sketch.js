var movingRect
var fixedRect
function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "red";
  movingRect.velocityX = -5;
  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor = "blue";
  fixedRect.velocityX = 5;

  

  movingRect.debug = false;
  fixedRect.debug = false;
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2){
      
    fixedRect.velocityX = fixedRect.velocityX * (-1);
    movingRect.velocityX = movingRect.velocityX * (-1);

   }

   if (movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
      
      fixedRect.velocityY = fixedRect.velocityY * (1);
      movingRect.velocityY = movingRect.velocityY * (1);

    }
     



    drawSprites();

}