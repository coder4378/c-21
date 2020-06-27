var wall,bullet;
var speed,weight,thickness;

function setup () {
createCanvas(1600,400);
thickness=random(22,83);
wall=createSprite(1500,300,thickness,1600);
speed=random(100,321);
weight=random(32,52);
bullet=createSprite(50,200,50,5);
wall.shapeColor="pink";
bullet.shapeColor="yellow";
bullet.velocityX=speed;
}
function draw (){
    bullet.velocityX=speed;

    background("blue");
    if(collide(bullet,wall)){
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/thickness*thickness*thickness;
if (damage>10){
    wall.shapeColor="red";
    
}
if (damage<10){
    wall.shapeColor="green";
    
}
    }
  
drawSprites();
}
function collide (ob1,ob2){
bulletRightEdge=ob1.x+ob1.width;
wallLeftEdge=ob2.x;
if (bulletRightEdge>wallLeftEdge){
   

    return true;
}
else{
return false;
}
}