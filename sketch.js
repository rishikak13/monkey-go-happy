
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

  
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
monkey.scale = 0.1
  ground= createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/ 2;
   foodGroup= new Group();
  obstacleGroup = new Group ();
  score=0;
  
}


function draw() {
  background(255);
  
   if(ground.x < 0){
     ground.x= ground.width /2;
   }
  if(keyDown("space")){
    monkey.velocityY=-12
  }
  monkey.velocityY= monkey.velocityY+0.8
  monkey.collide(ground);
  spawnFood ();
  spawnObstacles();
  textSize(20);
  text("score="+ score,500,50);
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX=0;
    monkey.velocityY=0;
    obstacleGroup.setVelocityXEach(0);
     foodGroup.setVelocityXEach(0);
     obstacleGroup.setLifetimeEach(-1);
     foodGroup.setLifetimeEach(-1);
    survivalTime= Math.ceil(frameCount/ frameRate())
    text("survival time="+survivalTime,100,50);
    
  }
  
drawSprites();
  
}
function spawnFood(){
  if(frameCount% 80===0){
    banana = createSprite (600,100,20,20);
    banana.addImage(bananaImage);
    banana.setVelocity(-3,0);
    banana.scale=0.1;
    banana.y= Math.round(random(120,200));
    banana.lifetime=220;
    monkey.depth= banana.depth+1
    foodGroup.add(banana);
    
  }
}

 function spawnObstacles(){
   if(frameCount% 200===0){
    obstacle = createSprite (600,330,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.setVelocity(-3,0);
    obstacle.scale=0.1;
   obstacle.collide(ground);  
     obstacle.lifetime=300;
     obstacleGroup.add(obstacle);
 }
 }



