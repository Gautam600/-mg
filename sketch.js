
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,ball1,ball3,ball2,ball4,ball5,ball6,ball7,chain;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,100,650,10);
	ball1=new Paper(200,400,20);
	ball2=new Paper(250,400,20);
	ball3=new Paper(300,400,20);
	ball4=new Paper(350,400,20);
	ball5=new Paper(400,400,20);
	ball6=new Paper(450,400,20);
	ball7=new Paper(500,400,20);
	chain=new Chain(ground.body,ball1.body);
		Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(200);
  Engine.update(engine);
  ground.display();
  ball1.display();
  ball3.display();
  ball4.display();
  ball6.display();
  ball5.display();
  ball7.display();
  chain.display();  
    drawSprites();
 ball2.display();
}



