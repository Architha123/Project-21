
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var left;
var right;


function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;
   ground = new Ground(width/2,390,width,20);
   left = new Ground(1150,330,20,120);
   right = new Ground(1300,330,20,120);

	//Create the Bodies Here.
	var ball_options={
	//isStatic : false,
	restitution : 0.3,
	friction : 2,
	density: 1.2	


	}
	

	Engine.run(engine);
  
	ball = Bodies.circle(50,250,40,ball_options);
	World.add(world,ball);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,40);
  
  ground.show();
  left.show();
 right.show();
if(keyCode===UP_ARROW){
	keyPressed();
}
  drawSprites();
  
 
}
function keyPressed(){
	
	Matter.Body.applyForce(ball,ball.position,{x:10,y:-12});
		console.log("hi!")
}
