//JS://

function preload() {
}
function setup() {
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.hide()
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    fill("pink")
    circle(x, y, 25);
 
}

function take_snapshot() {
save('MyFilterImage.png');
}

function modelLoaded() {
    console.log("Loaded!")
}
var x
var y

function gotPoses(result) {
if (result.length > 0){
    console.log(result);
    x = result[0].pose.nose.x -165;
    y = result[0].pose.nose.y - 125;  
}

}