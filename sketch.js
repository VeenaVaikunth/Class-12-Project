var track, boy, running_boy, left_boundary, right_boundary;
function preload(){
  //pre-load images
  track=loadAnimation("path.png");
  boy=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track=createSprite(200,200,40,390)
  boy=createSprite(200,200,40,40);
  running_boy.addAnimation("runningimage",boy);
  left_boundary=createSprite(150,200,20,390);
  right_boundary=createSprite(250,200,20,390);
  left_boundary.visible=false;
  right_boundary.visible=false;
}

function draw() {
  background("lightgreen");
  track.velocityY=3;
  if(track.y<0){
    track.y=track.height/2;
  }
  boy.x=mouse.x;
  boy.collide(left_boundary);
  boy.collide(right_boundary);
  drawSprites();
}