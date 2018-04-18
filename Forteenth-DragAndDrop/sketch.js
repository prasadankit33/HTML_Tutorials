var dropzone;

function setup()
{
	/*//Using canvas as dropzone
	var canvas = createCanvas(200,200);
	canvas.drop(gotFile);
	*/
  createCanvas(400,400);
  background(0);

  dropzone = select('#dropzone');
  dropzone.dragOver(highlight);	
  dropzone.dragLeave(unhighlight);
  dropzone.drop(gotFile,unhighlight);	//(receive the file,triggered when dropped)
}

function gotFile(file)
{
	createP(file.name+ " "+file.size);
	createP(file.type);
	createP(file.size);
	var img = createImg(file.data);
	//img.size(100,100);
	image(img,0,0,200,200);
}

function highlight()
{
  dropzone.style('background-color','#CCC');
}

function unhighlight()
{
	dropzone.style('background-color',"#FFF");
}