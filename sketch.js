
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var chain1, chain2, chain3, chain4, chain5;
var roofObject1;




function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
		world = engine.world;
		

	//Create the Bodies Here.
	bobObject1=new Bob(200,500, 100);
	bobObject2=new Bob(300,500, 100);
	bobObject3=new Bob(400,500, 100);
	bobObject4=new Bob(500,500, 100);
	bobObject5=new Bob(600,500, 100);
	roofObject1=new Ground(400, 200, 700, 30);
	chain1=new Chain(bobObject1.body,roofObject1.body,-100*2,0)
	chain2=new Chain(bobObject2.body,roofObject1.body, -100*1,0);
	chain3=new Chain(bobObject3.body,roofObject1.body, 0,0);
	chain4=new Chain(bobObject4.body,roofObject1.body, 100*1,0);
    chain5=new Chain(bobObject5.body,roofObject1.body, 100*2,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(253);

  if (keyDown("f")) {
	console.log("presses f key");
	var vectorA = Matter.Vector.create(200,620)
	var vectorB = Matter.Vector.create(50,50)


	Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, { x: 2000, y: 0 });
}

  


  	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
  roofObject1.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  //drawSprites();
 
}





