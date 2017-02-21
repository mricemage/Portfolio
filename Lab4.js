var LINE = 1;

var RECTANGLE = 2;

var currentDrawingMode = LINE;


var canvas = document.getElementById("drawingCanvas");

var drawingContext = canvas.getContext("2d");

var startPoint;

function setDrawingMode(newDrawingMode) {
	currentDrawingMode = newDrawingMode;
}

function getMousePos(canvas, evt)
{
	var rect = canvas.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	}
}

function mouseDown(event)
{
	// console.log(event);

	// drawingContext.beginPath();
	// drawingContext.moveTo(0,0);

	// var realmousePos = getMousePos(canvas, event); //event is the "event" in function mouseDown.
	// drawingContext.lineTo(event.clientX, event.clientY);
	// drawingContext.stroke();

	startPoint = getMousePos(canvas, event);
}

function clearCanvas()
{
	drawingContext.clearRect(0,0, canvas.width, canvas.height);
	//Delete all the canvas from (0,0) to the highest Width and Height.
}

function mouseUp(event)



{
	var realMousePos = getMousePos(canvas, event);

	if(currentDrawingMode == LINE)
	{

	drawingContext.beginPath();
	drawingContext.moveTo(startPoint.x,startPoint.y);
	drawingContext.lineTo(realMousePos.x,realMousePos.y);
	drawingContext.stroke();

	}

	else if (currentDrawingMode == RECTANGLE)
	{
	drawingContext.beginPath();
	drawingContext.rect(startPoint.x,startPoint.y, realMousePos.x - startPoint.x, realMousePos.y - startPoint.y);
	drawingContext.fill();
	}
}

// At first the function mouseDown does not have connection to the canvas
// After this, addEventListener was added.

canvas.addEventListener("mousedown", mouseDown);

//function has the name "mouseDown", which is same to the addEventListener.
canvas.addEventListener("mouseup", mouseUp);