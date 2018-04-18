var bgcolor;
var button;

function setup() {
	createCanvas(400,400);  
	bgcolor = color(204);
	button = createButton("Change background");
	button.mousePressed(changeColor);
}

function changeColor()
{	
	bgcolor = color(random(255),random(255),random(255));
}


function draw() 
{
	background(bgcolor);
	noFill();
	fill(255,0,255);
	rect(100,100,40,40);
}