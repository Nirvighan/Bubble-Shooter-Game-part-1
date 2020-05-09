//import { text } from "body-parser";

var life = 200;
var score = 0;
var temp = 0;
function preload(){



}





function setup() {
  createCanvas(600,600);

   border1 = createSprite(0,295,10,600);
   border2 = createSprite(600,295,10,600);
   border3 = createSprite(295,0,600,10);
   border4 = createSprite(295,600,600,10);
  
   bubble1 = createSprite(10,590,20,20);
   bubble2 = createSprite(590,590,20,20);
   bubble3 = createSprite(10,10,20,20);
   bubble4 = createSprite(590,10,20,20);
   bubble5 = createSprite(10,295,20,20);
   bubble6 = createSprite(590,295,20,20);
   bubble7 = createSprite(295,10,20,20);
   bubble8 = createSprite(295,590,20,20);
   bubble9 = createSprite(500,590,20,20);
   bubble10 = createSprite(580,590,20,20);

  bubble1.velocityY = -2;
  bubble2.velocityY = -2;
  bubble3.velocityY = -2;
  bubble4.velocityY = -2;
  bubble5.velocityY = -2;
  bubble6.velocityY = -2;
  bubble7.velocityY = -2;
  bubble8.velocityY = -2;
  bubble9.velocityY = -2;
  bubble10.velocityY = -2;


  bubble1.velocityX = -3;
  bubble2.velocityX = -3;
  bubble3.velocityX = -3;
  bubble4.velocityX = -3;
  bubble5.velocityX = -3;

  bubble9.velocityX = 3;
  bubble6.velocityX = 3;
  bubble7.velocityX = 3;
  bubble8.velocityX = 3;
  bubble10.velocityX = 3;

  player = createSprite(295,295,40,40);
  player.shapeColor = "white";

  
  


}

function draw() {
  background(0);
  
  textSize(20);
  fill("white");
  text("Life " + life , 285,350);
  text("Score " + score , 285,390);

  
  
  //ellipse(500,500,100,100);
 //rotate(220);
  //triangle(230, 275, 260, 230, 286, 275);

  bubble1.bounceOff(border1);
  bubble2.bounceOff(border1);
  bubble3.bounceOff(border1);
  bubble4.bounceOff(border1);
  bubble5.bounceOff(border1);
  bubble6.bounceOff(border1);
  bubble7.bounceOff(border1);
  bubble8.bounceOff(border1);
  bubble9.bounceOff(border1);
  bubble10.bounceOff(border1);

  bubble1.bounceOff(border2);
  bubble2.bounceOff(border2);
  bubble3.bounceOff(border2);
  bubble4.bounceOff(border2);
  bubble5.bounceOff(border2);
  bubble6.bounceOff(border2);
  bubble7.bounceOff(border2);
  bubble8.bounceOff(border2);
  bubble9.bounceOff(border2);
  bubble10.bounceOff(border2);

  bubble1.bounceOff(border3);
  bubble2.bounceOff(border3);
  bubble3.bounceOff(border3);
  bubble4.bounceOff(border3);
  bubble5.bounceOff(border3);
  bubble6.bounceOff(border3);
  bubble7.bounceOff(border3);
  bubble8.bounceOff(border3);
  bubble9.bounceOff(border3);
  bubble10.bounceOff(border3);

  bubble1.bounceOff(border4);
  bubble2.bounceOff(border4);
  bubble3.bounceOff(border4);
  bubble4.bounceOff(border4);
  bubble5.bounceOff(border4);
  bubble6.bounceOff(border4);
  bubble7.bounceOff(border4);
  bubble8.bounceOff(border4);
  bubble9.bounceOff(border4);
  bubble10.bounceOff(border4);

  // bubble1.bounceOff(bubble2);
  // bubble1.bounceOff(bubble3);
  // bubble1.bounceOff(bubble4);
  // bubble1.bounceOff(bubble5);
  // bubble1.bounceOff(bubble6);
  // bubble1.bounceOff(bubble7);
  // bubble1.bounceOff(bubble8);
  // bubble1.bounceOff(bubble9);
  // bubble1.bounceOff(bubble10);

  // bubble2.bounceOff(bubble3);
  // bubble2.bounceOff(bubble4);
  // bubble2.bounceOff(bubble5);
  // bubble2.bounceOff(bubble6);
  // bubble2.bounceOff(bubble7);
  // bubble2.bounceOff(bubble8);
  // bubble2.bounceOff(bubble9);
  // bubble2.bounceOff(bubble10);
  

  // bubble3.bounceOff(bubble4);
  // bubble3.bounceOff(bubble5);
  // bubble3.bounceOff(bubble6);
  // bubble3.bounceOff(bubble7);
  // bubble3.bounceOff(bubble8);
  // bubble3.bounceOff(bubble9);
  // bubble3.bounceOff(bubble10);
  

  // bubble4.bounceOff(bubble5);
  // bubble4.bounceOff(bubble6);
  // bubble4.bounceOff(bubble7);
  // bubble4.bounceOff(bubble8);
  // bubble4.bounceOff(bubble9);
  // bubble4.bounceOff(bubble10);

  // bubble5.bounceOff(bubble6);
  // bubble5.bounceOff(bubble7);
  // bubble5.bounceOff(bubble8);
  // bubble5.bounceOff(bubble9);
  // bubble5.bounceOff(bubble10);

  // bubble6.bounceOff(bubble7);
  // bubble6.bounceOff(bubble8);
  // bubble6.bounceOff(bubble9);
  // bubble6.bounceOff(bubble10);

  // bubble7.bounceOff(bubble8);
  // bubble7.bounceOff(bubble9);
  // bubble7.bounceOff(bubble10);

  // bubble8.bounceOff(bubble9);
  // bubble8.bounceOff(bubble10);

  // bubble9.bounceOff(10);
  

  

  


  createEdgeSprites();

  if(keyDown(RIGHT_ARROW))
  {
    
   player.shapeColor = "blue";

   
  }

  if(keyDown(UP_ARROW))
  {
   player.velocityY = -4;

  }

  if(player.y<0)
  {

    player.y = 620;
  }

  if(keyDown(DOWN_ARROW))
  {
   player.velocityY = 0;

  }

  if(keyDown(32))
  {
    bullets();
  }


  if(bubble1.isTouching(player) || bubble2.isTouching(player) || bubble3.isTouching(player) || bubble4.isTouching(player) || bubble5.isTouching(player) || bubble6.isTouching(player) || bubble7.isTouching(player) || bubble8.isTouching(player) || bubble9.isTouching(player) || bubble10.isTouching(player))
  {
    life = life - 2;

  }

  if(life === 0)
  {

    temp = 1;
   

  }

  if(temp === 1)
  {
    bubble1.velocityY = 0;
    bubble2.velocityY = 0;
    bubble3.velocityY = 0;
    bubble4.velocityY = 0;
    bubble5.velocityY = 0;
    bubble6.velocityY = 0;
    bubble7.velocityY = 0;
    bubble8.velocityY = 0;
    bubble9.velocityY = 0;
    bubble10.velocityY = 0;
 
    text("GAME OVER" , 200,200);
    player.velocityY = 0;

  }

  

  drawSprites();
}

function bullets()
{

  bullet = createSprite(player.x,player.y - 25,10,10);
  bullet.shapeColor = "red";
  bullet.velocityY = -5;

  if(bullet.isTouching(bubble1))
  {
    bubble1.x = 0;
    bubble1.y = 600;
    score = score + 1;
    bubble1.velocityY = -4;

  }

  if(bullet.isTouching(bubble2))
  {
    bubble2.x = 295;
    bubble2.y = 600;
    score = score + 1;
    bubble2.velocityY = -4;

  }
  if(bullet.isTouching(bubble3))
  {
    bubble3.x = 0;
    bubble3.y = 295;
    score = score + 1;
    bubble3.velocityY = -4;

  }
  if(bullet.isTouching(bubble4))
  {
    bubble4.x = 600;
    bubble4.y = 295;
    score = score + 1;
    bubble4.velocityY = -4;

  }
  if(bullet.isTouching(bubble5))
  {
    bubble5.x = 295;
    bubble5.y = 0;
    console.log("yayyayayya");
    score = score + 1;
    bubble5.velocityY = -4;

  }
  if(bullet.isTouching(bubble6))
  {
    bubble6.x = 600;
    bubble6.y = 600;
    score = score + 1;
    bubble6.velocityY = -4;

  }
  if(bullet.isTouching(bubble7))
  {
    bubble7.x = 342;
    bubble7.y = 0;
    score = score + 1;
    bubble7.velocityY = -4;

  }

  if(bullet.isTouching(bubble8))
  {
    bubble8.x = 542;
    bubble8.y = 600;
    score = score + 1;
    bubble8.velocityY = -4;

  }
  if(bullet.isTouching(bubble9))
  {
    bubble9.x = 123;
    bubble9.y = 0;
    score = score + 1;
    bubble9.velocityY = -4;

  }
  if(bullet.isTouching(bubble10))
  {
    bubble10.x = 242;
    bubble10.y = 600;
    score = score + 1;
    bubble10.velocityY = -4;

  }





}