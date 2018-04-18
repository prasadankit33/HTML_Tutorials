//We  can use id of elements for making them child and parent

var challenges = ['Swim Across English Chanel','Climb Mount Everest','Go near mouth of active volcano'];
function setup()
{
	noCanvas();
/*	var canvasMaking = createCanvas(400,400);
	//Both are accepted calling with and without #
   //canvasMaking.parent("canvas");		//canvasMaking is "parent" of canvas
	canvasMaking.parent("#canvas");		//canvasMaking is "parent" of canvas
*/
var button = select("#button");
button.mousePressed(addChallenge);

}

function addChallenge()
{
	var r =floor(random(0,challenges.length));
	var li = createElement('li',challenges[r]);
	li.parent(ChallengeList);
}
