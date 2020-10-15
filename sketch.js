var fixedRect, movingRect;
var obj1, obj2;

function setup() {
  createCanvas(800, 400);
  fixedRect = createSprite(200, 200, 50, 100);
  fixedRect.shapeColor = 'green';
  fixedRect.debug = true;
  movingRect = createSprite(400, 200, 100, 50);
  movingRect.shapeColor = 'green';
  movingRect.debug = true;
  obj1=createSprite(300,200,50,50)
  obj2=createSprite(400,200,50,50)
}

function draw() {
  background(0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,obj1)){
     movingRect.shapeColor = 'red';
     obj1.shapeColor = 'red'

  }else{
     movingRect.shapeColor = 'green';
     obj1.shapeColor = 'green'
  }
  drawSprites();
}


