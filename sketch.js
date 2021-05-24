var movingRect, fixedRect;
function setup() {
  createCanvas(800,800);

  movingRect= createSprite(400, 200, 50, 50);
  movingRect.shapeColor="green";
  movingRect.debug=true;

  fixedRect= createSprite(600, 200, 80, 50);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;





}

function draw() {
  background("black");  

  //To find distance between the objects
console.log(fixedRect.x-movingRect.x)

movingRect.x=mouseX;
movingRect.y=mouseY;

//Collision detection algorithm states, when two object collide, this distance between them will be
//less that sum of half of width or height

if(fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2 &&
  movingRect.x- fixedRect.x < fixedRect.width/2+movingRect.width/2 &&
  fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 &&
  movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2){
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
}
else{
  movingRect.shapeColor="green"
  fixedRect.shapeColor="green"
}
  
  drawSprites();
} 