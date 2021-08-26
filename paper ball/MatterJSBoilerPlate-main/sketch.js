
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ballImage;
var wall1;
var wall2;
var ground;

function preload()
{
ballImage = loadImage (paper.png);
	
}

function setup() {
	createCanvas(800, 700);

	ball = createSprite (200,200,20,20);
    ball.addImage(ballImage);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



