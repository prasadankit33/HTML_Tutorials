function setup()
{
	for(var i=0;i<10;i++)
	{
		//var p = createP("apples");
		var p = createA("https://en.wikipedia.org/wiki/Apple","apples");
		
		var x = floor(random(windowWidth));
		var y = floor(random(windowHeight));
		p.position(x,y);
		p.class('apples');
		p.mousePressed(becomeBlueberry);
	}

	for(var i=0;i<10;i++)
	{
		//var p = createP("blueberries");
		//var p = createA("https://en.wikipedia.org/wiki/Blueberry","blueberries");
		var p = createA("#","blueberries");
		var x = floor(random(windowWidth));
		var y = floor(random(windowHeight));
		p.position(x,y);
		p.class('blueberries');
		p.mousePressed(becomeApple);
	}
}

function becomeBlueberry()
{
	this.class("blueberries");
}

function becomeApple()
{
	this.class("apples");
}