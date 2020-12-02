var movingRectangle, fixedRectangle;
var gameObject1, gameObject2, gameObject3, gameObject4;
function setup() {
  createCanvas(1000,800);
  movingRectangle = createSprite(400,200,80,30);
  fixedRectangle = createSprite(600,400,50,80);
  fixedRectangle.shapeColor = "yellow";
  movingRectangle.shapeColor = "red";
  gameObject1 = createSprite(100,300,50,50);
  gameObject2 = createSprite (200,300,50,50);
  gameObject3 = createSprite (300,300,50,50);
  gameObject4 = createSprite (400,300,50,50);
}

function draw() {
  background(255,255,255);
  movingRectangle.x = mouseX;
  movingRectangle.y = mouseY; 
  if(isTouching(movingRectangle,gameObject3)){
      gameObject3.shapeColor = "blue";
  movingRectangle.shapeColor = "blue";
    } 
    else{
      gameObject3.shapeColor = "black";
      movingRectangle.shapeColor = "black";
    }
  drawSprites();
}
function isTouching(Object1,Object2){
  if(Object1.x-Object2.x < Object1.width/2+Object2.width/2 && 
    Object2.x-Object1.x < Object2.width/2+Object1.width/2 && 
    Object1.y-Object2.y < Object1.height/2+Object2.height/2 && 
    Object2.y-Object1.y < Object2.height/2+Object1.height/2 ){
 return true;
    } 
    else{
return false
    }
}