//mam not working but done know why..
var car,wall,speed,weight;


function setup() {
createCanvas(800,400);

car = createSprite(200, 200, 40, 40);
car.shapeColor = "white"
car.velocityX = speed;

wall = createSprite(700,200,20,80);

}

function draw() {
  background(0,0,0);  
  
  var speed=random(55,90);
  var weight=random(400,1500); 

if(isTouching(wall,car)){
car.velocityX = 0;
var deformation = 0.5 * weight * speed * speed/22500;
if(deformation>180)
{
  car.shapeColor = "red";
}

  if(deformation<180 && deformation>100)
{
  car.shapeColor = "yellow";
}

if(deformation<100)
{
car.shapeColor = "green";
}

}

  drawSprites();
}

