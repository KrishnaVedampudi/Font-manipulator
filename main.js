function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 550);
    video.position(005, 350);

    canvas = createCanvas(500, 500);
    canvas.position(1000, 350);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() 
{
    console.log('poseNet is Initialized');
}
noseX=0;
noseY=0;
leftWrist=0;
rightWrist=0;
difference=0;

function gotPoses(results)
{
  if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;
        console.log('nose X= ' + noseX + 'noseY = ' + noseY);  
        difference = floor(rightWrist - leftWrist);
    }
}
function draw()
{
    background('#969A97');
    fill('red');
    stroke('black');  
    textSize(difference);
    text('krishna', noseX, noseY );  
}
