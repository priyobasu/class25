const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
var engine, world, object;
var box1,box2,box3,paper;

function preload() {
  dustbin=loadImage("dustbingreen.png")
}
function setup() {
  createCanvas(1350, 400);
  engine=Engine.create(); // create engine
  world=engine.world;     // create world in the engine
  /* */// adding body to the world
  ground=new Ground(800,height,1600,10)
 box1=new Box(1050,385,150,15);
 box2= new Box(1130,317,15,140);
 box3= new Box(980,317,15,140);
 
 paper=new Paper(100,10,80);
 
}

function draw() {
  background("lightgreen");
  //fill("lime");
  Engine.update(engine);// update the engine
  imageMode(CENTER);
  
  ground.display();
  box1.display();
  box2.display();
  
  box3.display();
  paper.display();
  image(dustbin,1055,320,150,150)
  
  if (keyDown(UP_ARROW)) {

  Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:-10});

  }
    
}