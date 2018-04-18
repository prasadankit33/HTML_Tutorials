var images = [];
var p;
function setup()
{
	noCanvas();
	for(var i=0;i<5;i++)
	{	
	p = createP("This is a link: ");
	p.style("font-color","00F");
	p.style("background-color","#CCC");
	p.style("padding","24px");

	var a = createA("#","apples"); 	//if we want to make link such that it wont reference to 
	 								//any location then we use '#'
	a.mousePressed(addPhoto);
	a.parent(p);
	}
	var button = select("#clear");
	button.mousePressed(clearStuff);
}

function clearStuff()
{
	for(var i=0;i<images.length;i++)
	{
		images[i].remove();
	}
	images = [];	//reinitialise the array as empty
}

function addPhoto()
{
//createImg function creates a image DOM element
var img = createImg("images.jpg");
images.push(img);	//adding image object to array
img.size(100,100);
//A.parent(B)	-->assigns B as parent of A
//A.parent()	-->returns the parent of A
var paragraph = this.parent();
img.parent(paragraph);
}
