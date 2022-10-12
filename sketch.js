
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var block1_options = {
	restitution:0.5,
	friction:0.02,
	frictionAir:0
}

var block2_options = {
	restitution:0.7,
	friction:0.01,
	frictionAir:0
}

var block3_options = {
	restitution:0.01,
	friction:0.1,
	frictionAir:0
}

function preload(){
	
}

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.

	block1 = Bodies.circle(300,10,100,block1_options);
	World.add(world,block1);

	block2 = Bodies.rectangle(110,50,100,100,block2_options);
	World.add(world,block2);

	block3 = Bodies.rectangle(600,50,300,100,block3_options);
	World.add(world,block3);

	rectMode(CENTER);
}


function draw() {
  
  background(0);
  
  rect(block2.position.x, block2.position.y, 100, 100)

  ellipse(block1.position.x, block2.position.y, 100)

  rect(block3.position.x, block3.position.y, 300, 100)

  drawSprites();

 Engine.update(engine);
}



