var bgcolor;
var button;
var slider;
var nameInput;
var nameP;

function setup() 
{
	createCanvas(400,400);  
	bgcolor = color(204);
	nameP = createP('Your name');

	nameP.mouseOver(overpara);	//when mouse hovers over the specified element on webpage 
	nameP.mouseOut(outpara);	//when mouse exits hovering the specified element on webpage=


	button = createButton("Change background");
	button.mousePressed(changeColor);
	slider = createSlider(10,100,50);		//createSlider(min,max,initial);
	nameInput = createInput('Type your name');

	//nameInput.changed(updateText);		//triggers when given element(nameInput here) changes
	nameInput.input(updateText);
}

function updateText()
{
	nameP.html(nameInput.value());		
}

function overpara()		//we need to close the events which overwrite the function calls made in setup
{
	nameP.html("Your mouse is over me");
}

function outpara()		//we need to close the events which overwrite the function calls made in setup
{
	nameP.html("Your mouse is out");
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
	//nameP.html(input.value());	//we need to close the events which overwrite the function calls made in setup
	text(nameInput.value(),10,20);		//syntax:text(your_text,x co-ordinate,y co-ordinate);
}