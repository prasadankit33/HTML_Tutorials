var textbox;
var slider;
var paragraph;

function setup() {
	noCanvas();  
	
	paragraph = createP('Starting Text');
	textbox = createInput("Enter text");
	slider = createSlider(10,64,16);

	textbox.changed(updateText);		//triggered after user changes action like press enter
	//textbox.input(updateText);
	slider.input(updateFontSize);
}

function updateText()
{
	paragraph.html(textbox.value());
}

function updateFontSize()
{
	paragraph.style("font-size",slider.value()+'pt');		//size is in pt/px
}
