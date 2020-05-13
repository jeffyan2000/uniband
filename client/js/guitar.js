function InsGuitar(id){
    this.guitarString = new GuitarString();

    this.draw = function(){
        this.guitarString.draw();
    }
}

function GuitarString(){
    this.segments = [];
    this.pos = [0, 100];

    this.draw = function(){
        ctx.beginPath();
        ctx.moveTo(this.pos[0], this.pos[1]);
        ctx.lineTo(300, 150);
        ctx.stroke();
    }
}