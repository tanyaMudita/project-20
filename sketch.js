var wall , car , deformation;
var speed
var weight

function setup() {
  createCanvas(1600,400);
 wall=createSprite(1500, 200, 60, height/2);
 wall.shapeColour=(80,80,80);  

 speed=random(30,200);
 weight=random(400,2000);
 
 car=createSprite(40,200,30,30);
 car.shapeColour=("gray");
 car.velocityX=speed;

 

}

function draw() {
  background(0);  
  
  console.log(deformation);
  
  if(wall.x-car.x<car.width/2+wall.width/2){
     
    car.velocityX=0;
     deformation=0.5*weight*speed*speed/22500

    if(deformation<100){

      car.shapeColor=("green");

    }
    
    if(deformation<180 && deformation>100){

      car.shapeColor=("yellow");

    }

    if(deformation>180){

      car.shapeColor=("red");

    }

  }
  
  drawSprites();

}