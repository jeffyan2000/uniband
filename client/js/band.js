var ctelement = document.getElementById("ctx");
var ctx = document.getElementById("ctx").getContext("2d");
var ctxbg = document.getElementById("ctx-bg").getContext("2d");
ctx.font = '30px Arial';

var guitarImg=new Image();
guitarImg.src = 'client/sound/guitar/guitar.png';

var guitar = new InsGuitar();
function updateCanvas(){
    ctx.clearRect(0,0,1024,768);
    guitar.draw();
}


document.onkeyup = function(event){
	if (event.keyCode === 79) {
		guitar.pluck(0);
    }else if (event.keyCode === 73) {
		guitar.pluck(1);
    }else if (event.keyCode === 85) {
		guitar.pluck(2);
    }else if (event.keyCode === 188) {
		guitar.pluck(3);
    }else if (event.keyCode === 77) {
		guitar.pluck(4);
    }else if (event.keyCode === 78) {
		guitar.pluck(5);
    }
}

setInterval(updateCanvas,50);