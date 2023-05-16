song1 = "";
song2 = "";
leftWristX = "";
leftWristY = "";
leftWristScore = 0;
rightWristScore = 0;
rightWristX = "";
rightWristY = "";
function preload(){
song1 = loadSound("Song1.mp3"); 
song2 = loadSound("music.mp3");
}
function setup(){
canvas = createCanvas(450 , 350);
canvas.center();   
video = createCapture(VIDEO);
video.hide();
canvas.position(540 , 300);
poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on('pose' , gotPoses);
}
function draw(){
image(video , 0 , 0 , 500 , 400);   
fill("red");
stroke("red");
if(leftWristScore > 0.2){
    
circle(leftWristX , leftWristY , 20);

document.getElementById("sn").innerHTML = "This Song is See You again";
song1.play();   


song2.stop()
}

if(rightWristScore > 0.2){
    
circle(rightWristX , rightWristY , 20);

document.getElementById("sn").innerHTML = "This Song is Harry Potter Theme Music Remix";

song2.play();    


song1.stop()

}
}
function modelLoaded(){
console.log('posenet Is Initialized!');    
}
function gotPoses(results){
if(results.length > 0){
console.log(results);
leftWristScore = results[0].pose.keypoints[9].score;
console.log("scoreleftWrist = " + leftWristScore);
rightWristScore = results[0].pose.keypoints[10].score;
console.log("scorerightWrist = " + rightWristScore);
leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;  
console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);  
rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
}    
}
