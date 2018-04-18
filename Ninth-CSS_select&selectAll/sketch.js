//Types of selectors
//1. Tag selector->all elements of a particular type of tag 
//eg. <p>,<button>
//2. id selector ->a single element with a specified tag by "#" symbol
//3. class selector -> a group of elements specified by "." symbol
//Higher the specificity then higher will be its precedence order in implementation


var textbox;
var slider;
var paragraph;

function setup() 
{	
	background(204);
	createCanvas(40,60);  
	createP("This is a paragraph written by me");
	//paragraph = select('#unicorn');
	paragraph = selectAll('.rainbow');
	for(var i=0;i<paragraph.length;i++)
	{
	paragraph[i].style("padding","16pt");
	}
	
	var button = select('#button');
	button.mousePressed(canvasBackground);
	
}

function canvasBackground()
{
	background(random(255));
}

function changeBackground()
{
	paragraph.style('background-color','blue');

}

function draw()
{
	
}

