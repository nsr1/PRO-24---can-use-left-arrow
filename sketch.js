
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1, box2, box3, ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER)

	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new bin(310,height-205,20,100)
	box2 = new bin(width/2, height-150,200,20)
	box3 = new bin(490,height-205,20,100)
	
	ground = new Ground(400,570,800,20)

	Paper = new paper(20,height-200,20)
	console.log(Paper.x)
  	console.log(Paper.y)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display()
  Paper.display()
  box1.display()
  box2.display()
  box3.display()
  
  keyPressed();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		
		Matter.Body.applyForce(Paper.body,Paper.body.position,{x:5, y:5})
	}
}

function keyPressed2(){
	if (keyCode === DOWN_ARROW){
		
		Matter.Body.applyForce(Paper.body,Paper.body.position,{x:10, y:10})
	}
}



