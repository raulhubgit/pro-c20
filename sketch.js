
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.

	var plane_options = {
		isStatic:true
	}

	ground = Bodies.rectangle(200, 390, 400, 20, plane_options);
	World.add(world, ground);

	block1_op = {
		restitution:0.7,
		friction:5,
		frictionAir:1
	}

	block1 = Bodies.circle(220, 10, 10, block1_op);
	World.add(world, block1);

	block2_op = {
		restitution:0.7,
		friction:5,
		frictionAir:1
	}

	block2 = Bodies.rectangle(110,50,10,10,block2_op);
	World.add(world, block2);

	block3_op = {
		restitution:0.7,
		friction:5,
		frictionAir:1
	}

	block3 = Bodies.rectangle(350,50,10,10,block3_op);
	World.add(world, block3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(51);
  Engine.run(engine);

	rect(ground.position.x, ground.position.y, 400, 20);

	ellipse(block1.position.x, block1.position.y, 20);

	rect(block2.position.x, block2.position.y, 24);

	rect(block3.position.x, block3.position.y, 20);
  drawSprites();
 
}



