var bgcolor;
var button;
var slider;
var input;
var nameP;

function setup() {
	createCanvas(400,400);  
	bgcolor = color(204);
	nameP = createP('Your name');
	button = createButton("Change background");
	button.mousePressed(changeColor);
	slider = createSlider(10,100,50);		//createSlider(min,max,initial);
	input = createInput('Type your name');

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
	ellipse(200,200,slider.value(),slider.value());
	nameP.html(input.value());
	text(input.value(),10,20);		//syntax:text(your_text,x co-ordinate,y co-ordinate);
}