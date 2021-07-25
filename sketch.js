
function setup()
 {
  createCanvas(400,400);
}

function draw() 
{
  background('orange');
        
if(keyIsDown(RIGHT_ARROW))
{
  background("red");
}

if(keyIsDown(LEFT_ARROW))
{
  background("yellow");
}

if(keyIsDown(UP_ARROW))
{
  background("blue");
}

if(keyIsDown(DOWN_ARROW))
{
  background("green");
}



}




