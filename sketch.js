var bullet,wall,damage;

var speed,weight,thickness



function setup(){
createCanvas(1600,400);

speed=random(223,321);
weight=random(30,52);
thickness=random(22,83);
bullet=createSprite(50,200,40,20);
bullet.velocityX=speed;
bullet.shapeColor=color(255,255,255);
damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
wall=createSprite(1500,200,thickness, height/2);
wall.shapeColor=color(80,80,80);

}

function draw(){


background(0);
if(hasCollided(bullet,wall)){

if(damage>10){
bullet.shapeColor=color(255,0,0);

}
if(damage<10){
  bullet.shapeColor=color(0,255,0);
}
}












drawSprites();
}