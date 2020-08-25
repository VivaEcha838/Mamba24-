
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;

var KOBE_BRYANT;
var KOBE_BEAN;
var BEAN_BRYANT;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(100,640,4);
  ground = new Ground(600,790,1200,20);

  KOBE_BRYANT = new Kobe(900,700,20,100);
	KOBE_BEAN = new Kobe(1000,750,200,20);
	BEAN_BRYANT = new Kobe(1100,700,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  paper1.display();
  ground.display();

  KOBE_BRYANT.display();
  KOBE_BEAN.display();
BEAN_BRYANT.display();
  
  drawSprites();
 
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
   
   Matter.Body.applyForce(paper1.body,paper1.body.position,{x:3.5, y:-3.5});

 }
 }




