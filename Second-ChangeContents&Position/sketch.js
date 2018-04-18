var canvas;
var h1;
var x = 100;
var y = 100;

function setup() {
canvas = createCanvas(400,400); 	
canvas.position(400,600);		//co-ordinates relative to webpage co-ordinate
//h1 is a DOM(Document Object Module) and its position is always relative to webpage co-ordinate
h1 = createElement('h1','Waiting...'); 	//syntax: createElement('tag_name','data_inside_tag');
//h1.position(400,100);	//co-ordinates relative to webpage co-ordinate
}

function mousePressed()
{var r = floor(random(1000000)); 
	h1.html("Now i will show you my favourite number");
	createP("My favourite colour is green-----------"+r);
}

function draw() {
	background(204);
	//clear(); 	//for making transparent background
	noFill();
	fill(255,0,255);
	rect(x,y,40,40);		//co-ordinates relative to canvas' co- ordinates
  h1.position(x,y);		//Here h1 is relative to webpage only as it is DOM element
  x = x + random(-5,5);
 // y = y + random(-5,15);
}