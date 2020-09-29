
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1 = new ground(700,height-35,2000,20)

	box1 = new box(width/1.23, height-50, 200,20);
	box2 = new box(1210,650,20,100);
	box3 = new box(1390,650,20,100);
    
  paperObject = new paper(50,height-40,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  box1.display();
  box2.display(); 
  box3.display();
  ground1.display();
  paperObject.display();


  drawSprites();
 
}
function keyPressed() 
{
 if (keyCode === UP_ARROW) 
  {
   Matter.Body.applyForce( paperObject.body,paperObject.body.position,{x:85,y:-85})
    
  }
}


