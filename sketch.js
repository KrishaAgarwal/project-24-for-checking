
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, block1, block2, block3;
var ground;

function preload(){
	
}

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(120, 425);
	paper.velocityX = -5;

	block1 = new Dustbin(600,425,100,20);
	block2 = new Dustbin(550,400,20,70);
	block3 = new Dustbin(650,400,20,70);
	ground = createSprite(width/2,445,width,20);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);

	paper.display();
	block1.display();
	block2.display();
	block3.display();
	drawSprites(); 
	keyPressed2();
}

function keyPressed1(){
	if(keyCode === UP_ARROW && paper.body.position.x <650 && paper.body.position.y> 150){
		paper.body.position.x = paper.body.position.x +25;
		paper.body.position.y = paper.body.position.y -15;
	}	
}


function keyPressed2(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{
			x: 25,
			y: -25
		});
	}
}