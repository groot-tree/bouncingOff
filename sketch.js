var fixedRect, movingRect,rect3,rect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
rect3 = createSprite(10,400,50,50);
rect3.shapeColor = "red";
rect3.velocityX = 5;

rect4 = createSprite(900,400,50,50);
rect4.shapeColor = "red";
rect4.velocityX = -5;


  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bouncingOff(movingRect,fixedRect);
bouncingOff(rect3,rect4);

  drawSprites();
}











