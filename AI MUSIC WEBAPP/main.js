song=""

rightWristX=""
rightWristY=""

leftWristX=""
leftWristY=""
function setup(){
  canvas = createCanvas(400,400);
  canvas.position(550,200);
  video = createCapture(VIDEO);
  video.size(400,400);
  video.position(550,200)
  poseNet = ml5.poseNet(video, modelLoaded);
  posnet.on('pose' ,gotPoses)
}
function modelLoaded(){
  console.log("poseNet is initialized")
}
function gotPoses(results){
  if(results.length>0){
    console.log(results);
  
    rightWristX = results[0].pose.rightWrist.x
    rightWristY = results[0].pose.rightWrist.y
    console.log("rightWristX value is " + rightWristX + "  rightWristY value is " + rightWristY)

    leftWristX = results[0].pose.leftWrist.x
    leftWristY = results[0].pose.leftWrist.y
    console.log("leftWristX value is " + leftWristX + "  leftWristY value is " + leftWristY)
  }
}
function draw(){
    image(video,0,0,600,500);

    fill("blue");
    stroke("blue");
    circle(leftWristX,leftWristY,20);
}
function preload(){
  song=loadSound("Song.mp3");
}
function play(){
    song.play();
}

