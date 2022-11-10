const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;
var cannon;
var angle;
var cannonBall;
var balls=[];
var boat;
var boats=[];
var boatAnimation=[];
var boatSpritedata, boatSpritesheet;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
  boatSpritedata=loadJSON("assets/boat/boat.json");
 boatSpritesheet=loadImage("assets/boat/boat.png");

}



function setup() {
  canvas = createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

angle=-PI/4;

  rectMode(CENTER);
  ellipseMode(RADIUS);
  //Use a palavra-chave new para criar um objeto torre. (Desafio 
  tower_options ={
    isStatic:true
  }
  tower=Bodies.rectangle(160, 350, 160, 310, tower_options);
  World.add(world, tower);

  cannon=new Cannon(180,110,100,50,angle);

  cannonBall=new CannonBall(cannon.x,cannon.y);

  boat=new Boat(width,height-100,200,200,-100);

  var boatFrames=boatSpritedata.frames;
  for(var i=0;i<boatFrames.length;i++){
var pos=boatFrames[i].position;
var img=boatSpritesheet.get(pos.x,pos.y,pos.w,pos.h);
boatAnimation.push(img);
  }
}
function draw() 
{
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);
//exibir a torre (Desafio 4)
push();
imageMode(CENTER);
image(towerImage, tower.position.x, tower.position.y, 160, 310);
pop();

for(var i=0;i<balls.length;i++){
showCannonBalls(balls[i],i);
}

cannon.display();
Matter.Body.setVelocity(boat.body,{x:-0.9,y:0});
boat.display();

//cannonBall.display();
}

function keyReleased(){
if(keyCode===DOWN_ARROW){
//cannonBall.shoot()
balls[balls.length-1].shoot();
}


}
function keyPressed()
{
  if(keyCode===DOWN_ARROW){
var cannonBall=new CannonBall(cannon.x,cannon.y);
balls.push(cannonBall)
  }
}
function showCannonBalls(ball,index){
ball.display();
if(ball.body.position.x>=width|| ball.body.position.y>=height-50){
Matter.World.remove(world,ball.body);
balls.splice(index,1)
}
}