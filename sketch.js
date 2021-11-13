var track,boy;
var trackImg,boyImg;
var carrotImg,carrot,carrotGroup;
var cornImg,corn,cornGroup;
var friesImg,fries,friesGroup;
var watermelonImg,watermelonImg,watermelonGroup;
var icecream,icecreamImg,icecreamGroup;
var burger,burgerImg,burgerGroup;
var kfc,kfcImg,kfcGroup;
var gameState= "play";
var gameover;
var score= 100;




function preload(){
 boyImg=loadAnimation("21.png","lm k.png","34.png")
 trackImg=loadImage("background.jpg");
 burgerImg=loadImage("burger.png");
 watermelonImg=loadImage("watermelon.jpeg");
 icecreamImg=loadImage("ice cream.jpeg");
 friesImg=loadImage("fries.png");
 cornImg=loadImage("corn.jpeg");
 kfcImg=loadImage("kfc.png");
 carrotImg=loadImage("carrot.jpeg");
 gameover=loadAnimation("gameover.jpg")
}

function setup() {
    createCanvas(windowWidth,windowHeight)

    track= createSprite(700,350);
  track.addImage("track",trackImg);
  track.velocityX = -3;
  track.scale=2.69;
    

    boy=createSprite(100,300);
    boy.addAnimation("boy",boyImg);
    boy.scale=0.5;

    carrotGroup = new Group();
  watermelonGroup = new Group();
  cornGroup = new Group();
  friesGroup = new Group();
  kfcGroup = new Group();
  burgerGroup = new Group();
  icecreamGroup = new Group();
  
  
}

function draw() {
  background(100);
  if(track.x < 700){
    track.x = 800
  }
  //console.log(track.x);
  //console.log(boy.y)
  
    if (gameState === "play") {

      spawnCorn()
      spawnBurger()
      spawnCarrot()
      spawnFries()
      spawnIcecream()
      spawnKfc()
      spawnWatermelon()



        if(keyDown("Down") && boy.y<height  ){
          boy.y = boy.y + 6;
        }
        
        if(keyDown("Up") && boy.y>0){
          boy.y = boy.y - 6;
        }

        if(carrotGroup.isTouching(boy)){
          score+=50
          carrotGroup.destroyEach()
        }
        if(watermelonGroup.isTouching(boy)){
          score+=150
          watermelonGroup.destroyEach()
        }
        if(cornGroup.isTouching(boy)){
          score+=100
          cornGroup.destroyEach()
        }
        if(friesGroup.isTouching(boy)){
          score-=75
          friesGroup.destroyEach()
        }
        if(icecreamGroup.isTouching(boy)){
          score-=50
          icecreamGroup.destroyEach()
        }
        if(burgerGroup.isTouching(boy)){
          score-=75
          burgerGroup.destroyEach()
        }
        if(kfcGroup.isTouching(boy)){
          score-=100
          kfcGroup.destroyEach()
        }
        if(score<=0){
        gameState= "end"
        }
    }

    if (gameState  === "end"){
      track.velocityX=0
      
      carrotGroup.destroyEach();
      cornGroup.destroyEach();
      icecreamGroup.destroyEach();
      watermelonGroup.destroyEach();
      friesGroup.destroyEach();
      kfcGroup.destroyEach();
      burgerGroup.destroyEach();
      boy.x=-100

     
    

      
    }
    
    
 drawSprites();
// Score

fill("#FFFF");
textAlign("center");
textSize(30);
text("Score " + score, width - 200, 100);
fill("#FFFF");

if(gameState==="end"){
textAlign("center");
textSize(75);
text("Game Over " , width/2, height/2);
}

}



function spawnCorn(){
  if (frameCount % 450 === 0) {
     corn = createSprite(width,200);
    

     corn.y = Math.round(random(25,600));
     

     corn.velocityX = -3  ;
    
    
    corn.addImage(cornImg);
    corn.scale=0.2
   


     corn.lifetime = -1;
    

    cornGroup.add(corn);
    
  }
}
function spawnWatermelon(){
  if (frameCount % 500 === 0) {
    
     watermelon = createSprite(width,220);


     
     watermelon.y = Math.round(random(25,600));


     
    watermelon.velocityX = -3;
   
   
    watermelon.addImage(watermelonImg);
    watermelon.scale=0.2
  


     
    watermelon.lifetime = -1;
  
    
    watermelonGroup.add(watermelon);
    
  }
}
function spawnCarrot(){
  if (frameCount % 600 === 0) {
    
     carrot = createSprite(width,200);

     carrot.y = Math.round(random(25,600));

  
    carrot.velocityX = -3;
    
  
    carrot.addImage(carrotImg);
    carrot.scale=0.2


    carrot.lifetime = -1;


    carrotGroup.add(carrot);
  }
}
function spawnIcecream()
{
  if (frameCount % 200 === 0) {
    
     icecream = createSprite(width,200);

    icecream.y = Math.round(random(25,600));

 
    icecream.velocityX = -3;
   
 
    icecream.addImage(icecreamImg);
    icecream.scale=0.2


    icecream.lifetime = -1;


   icecreamGroup.add(icecream);
 }
}
function spawnFries()
{
  if (frameCount % 300 === 0) {
    
    fries = createSprite(width,200);

    fries.y = Math.round(random(25,600));

 
   fries.velocityX = -3;
   
 
    fries.addImage(friesImg);
   fries.scale=0.2


   fries.lifetime = -1;


   friesGroup.add(fries);
 }
}
function spawnBurger()
  {
    if (frameCount % 500 === 0) {
    
      burger = createSprite(width,200);
 
      burger.y = Math.round(random(25,600));
 
   
     burger.velocityX = -3;
     
   
     burger.addImage(burgerImg);
     burger.scale=0.1
 
 
     burger.lifetime = -1;
 
 
     burgerGroup.add(burger);
   }
  }


  function spawnKfc()
  {
    if (frameCount % 800 === 0) {
    kfc = createSprite(width,200);
 
      kfc.y = Math.round(random(25,600));
 
   
     kfc.velocityX = -3;
     
   
     kfc.addImage(kfcImg);
     kfc.scale=0.2
 
 
     kfc.lifetime = -1;
 
 
     kfcGroup.add(kfc);
    }
  }
  
