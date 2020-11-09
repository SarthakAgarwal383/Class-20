//creating global variables for rectangles
var MovingRect,FixedRect;


function setup() {
  createCanvas(800,400);
  //creating sprites for rectangles
  FixedRect=createSprite(400, 200, 50, 50);
  FixedRect.shapeColor="red";

  MovingRect=createSprite(200,300,50,50);
  MovingRect.shapeColor="yellow";
}

function draw() {
  background(0);  
//allowing the MovingRect to move with Mouse
MovingRect.x=mouseX;
MovingRect.y=mouseY;

//writing the conditions to change the color of sprites on their collision
if(MovingRect.x-FixedRect.x<MovingRect.width/2+FixedRect.width/2 &&
    FixedRect.x-MovingRect.x<MovingRect.width/2+FixedRect.width/2 &&
    MovingRect.y-FixedRect.y<MovingRect.height/2+FixedRect.height/2 &&
    FixedRect.y-MovingRect.y<MovingRect.height/2+FixedRect.height/2){
  MovingRect.shapeColor="blue";
  FixedRect.shapeColor="green";
}
else{
  FixedRect.shapeColor="red";
  MovingRect.shapeColor="yellow";
}



  drawSprites();
}