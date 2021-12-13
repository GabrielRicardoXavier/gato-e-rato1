var jerry, tom;
var jerryimg, tomimg
var jardim, 

function preload() {
    //load the images here
    jerryimg = loadAnimation("mouse1.png","mouse2.png","mouse3.png","mouse4.png");
    tomimg = loadAnimation("cat1.png","cat2.png","cat3.png","cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    jerry = createSprite(300,400);
    jerry.addAnimation(jerryimg);
    tom = createSprite(900,400);
    tom.velocityX = -5;
    tom.addAnimation(tomimg);
}

function draw() {

    background("black");
    //Write condition here to evalute if tom and jerry collide
    if(jerry.x - tom.x < tom.width / 2 + jerry.width / 2 && tom.x - jerry.x < jerry.width / 2 + tom.width / 2){
        tom.velocityX = 0;
        jerry.velocityX = 0;
    } else {
        
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
