var sliders = [];
var angle = 0;

function setup() {
noCanvas();
for(var i=0;i<100;i++)
	{
	sliders[i] = createSlider(0,255,255);
	}
//sliders[0].input(adjustSliders);
}

/*function adjustSliders()
{
	for(var i=1;i<sliders.length;i++)
	{
		sliders[i].value(sliders[0].value());
	}
}
*/

function draw() {
var offset = 0;
	for(var i=0;i<sliders.length;i++)
	{
		var x = map(sin(angle+offset),-1,1,0,255);
		sliders[i].value(x);
		offset+=0.25;
	}
	angle+=0.1;
}