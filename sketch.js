const Engine = Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var snowe,snoweImg
var bgImg

function preload(){
  bg=loadImage("snow3.jpg");
  snoweImg = loadImage("snow4.webp");

}

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(bg); 
  drawSprites();

  //engine = Engine.update();
  
  createSnowflake();
}

function createSnowflake(){
  if(frameCount%20===0){
  snowe = createSprite(random(0,800), 0, 50, 50);
  snowe.velocityX = -5;
  snowe.velocityY = 4;
  snowe.addImage(snoweImg);
  snowe.scale = 0.1;
  }
}
 
