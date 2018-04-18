var bgcolor;
var button;
var nameP;

function setup() {
	createCanvas(400,400);  
	
	bgcolor = color(204);
	nameP = createP('Your name');
	button = createButton("Change background");
	button.mousePressed(changeStyle);

}

function changeStyle()
{
	nameP.style("background-color","blue");		//syntax: element_name.style("name_of_property","value_of_property");
	nameP.style("padding","24px");
}


function draw() 
{	
	background(bgcolor);
	noFill();
	fill(255,0,255);
	ellipse(200,200,50,50);
}