var ctelement = document.getElementById("ctx");
var ctx = document.getElementById("ctx").getContext("2d");
var ctxbg = document.getElementById("ctx-bg").getContext("2d");
ctx.font = '30px Arial';

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
  }

var guitar = new InsGuitar();
function updateCanvas(){
    ctx.clearRect(0,0,1024,768);
    guitar.draw();
}


document.onkeydown = function(event){
	if (event.keyCode === 80) {
		guitar.pluck();
    }
}

setInterval(updateCanvas,50);