

  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext("2d");
  var currentPoint;
  var placeholder = new Array(); //new array to hold the rectangles
  var hit = 0;


function getRandomNumber(max){
    return Math.floor(Math.random() * max); //between 0 - max
}

function draw(){
    placeholder = [];
    var rect = new Object();

    rect.x = getRandomNumber(500-40);
    rect.y = getRandomNumber(500-40);

    context.fillStyle = "black";
    //draw at random x and y value with 80 size
    context.fillRect(rect.x,rect.y,40,40);

    //add to array
    placeholder.push(rect);
}

 function bonnyMouseDown(event){

    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;

    //var i = placeholder.length-1;
//only check if hit the last rectangle, if collision function is true, hit increase by 1
for(var i = 0; i < placeholder.length; i++){
    if(collision(placeholder[i].x, placeholder[i].y,40,40,x,y)){
        hit = hit + 1;
        var s = document.getElementById('score').innerHTML = 'SCORE: ' +  hit;
        context.clearRect(placeholder[i].x, placeholder[i].y,40,40);
        placeholder.slice(i,i-1);
        draw();
    }

}
}

    function collision(rectX, rectY, rectW, rectH, mouseX, mouseY){
        if(((rectX < mouseX) && (rectX + rectW > mouseX)) &&
            ((rectY < mouseY) && (rectY + rectH > mouseY))){
                return true;
            }
        else{
            return false;
        }
    }

    //setInterval(draw, 2000);

 function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }


canvas.addEventListener("mousedown", bonnyMouseDown);


 function play(){
    start();
    draw();
}
function replay(){
h = 0;m = 0;s = 10;
clearTimeout(timeout);
document.getElementById("s").innerHTML= s;
hit = 0;
document.getElementById("score").innerHTML= 'SCORE: ' +  hit;

context.clearRect(0,0,canvas.width, canvas.height);
}
//initial
var h = 0;
var m = 0;
var s = 10;
document.getElementById("h").innerHTML= h;
document.getElementById("m").innerHTML= m;
document.getElementById("s").innerHTML= s;
var timeout = null;


function start(){
document.getElementById("h").innerHTML= h;
document.getElementById("m").innerHTML= m;
document.getElementById("s").innerHTML= s;
        if (s === -1){
        m -= 1;
        s = 59;
    }

         if (m === -1){
        h -= 1;
        m = 59;
    }

      if (h == -1){
        clearTimeout(timeout);
        alert('Time up');
        return false;
    }

    timeout = setTimeout(function(){
        s--;
        start();
    }, 1000);
}

function stop(){
    clearTimeout(timeout);
}
