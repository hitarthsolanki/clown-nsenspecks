nosex =0;
nosey=0;

  RighteyeX = 0;
   RighteyeY = 0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
    specks = loadImage('https://i.postimg.cc/Gh2MCb1g/transparent-background-sunglasses-4.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    nosex=results[0].pose.nose.x-15;
    nosey=results[0].pose.nose.y-15;
    RighteyeX = results[0].pose.rightEye.x-20; 
   RighteyeY = results[0].pose.rightEye.y-20;
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(clown_nose,nosex,nosey,30,30);
  image(specks, RighteyeX, RighteyeY, 90, 40);

}
function take_snapshot(){    
  save('myFilterImage.png');
}
