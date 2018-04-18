//Types of selectors
//1. Tag selector->all elements of a particular type of tag 
//eg. <p>,<button>
//2. id selector ->a single element with a specified tag by "#" symbol
//3. class selector -> a group of elements specified by "." symbol
//Higher the specificity then higher will be its precedence order in implementation


var textbox;
var slider;
var paragraph;
var paragraphs;


function setup() 
{	
	background(204);
	createCanvas(40,60);  
	createP("This is a paragraph written by me");
	paragraph = select('#unicorn');
/*	paragraph.mouseOver(highlight);
	paragraph.mouseOut(unhighlight);
*/
	for(var i=0;i<100;i++)
	{
		var par = createP('rainbow');
		par.position(random(500),random(500));
	}

	paragraphs = selectAll('p');
	for(var i=0;i<paragraphs.length;i++)
	{
	paragraphs[i].mouseOver(highlight);
	paragraphs[i].mouseOut(unhighlight);
	}
	
}

function highlight()
{
	this.style('padding','8pt');		//this is used to refer to the specific DOM element which 
										//calls this function
	this.style('background-color','blue');
}

function unhighlight()
{
	this.style('padding',"0pt");
	this.style('background-color','white');
}

function draw()
{
	
}

