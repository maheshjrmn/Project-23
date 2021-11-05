var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

var ball_options={
	isStatics:false,
	restituion:0.3,
	friction:0,
	density:1.2
}

	//Create the Bodies Here.
	ball = Bodies.circle(200,100,20)
	World.add(world, ball)

	rectMode(CENTER)
	ellipseMode(RADIUS)




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
  groundObj.display();
  Engine.display(engine);

  ellipse(ball.position.x, ball.position.y, 20)

  
  

}


function keypressed() {

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball,{x:0, y:0},{x:0.05, y:0})
		
	}
}


