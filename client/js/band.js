var ctelement = document.getElementById("ctx");
var ctx = document.getElementById("ctx").getContext("2d");
var ctxbg = document.getElementById("ctx-bg").getContext("2d");
ctx.font = '30px Arial';
var socket = io();

var guitar = new InsGuitar();
function updateCanvas(){
    ctxbg.clearRect(0,0,1024,768);
    guitar.draw();
}

setInterval(updateCanvas,50);