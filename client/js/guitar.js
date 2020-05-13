class InsGuitar{
    constructor(id){
        this.guitarString = new GuitarString(112);
    }

    draw(){
        this.guitarString.update();
        
        this.guitarString.draw();
    }

    pluck(){
        this.guitarString.pluck(10, 6);
    }
}

class GuitarString{
    constructor(numberOfSegments){
        this.segments = [];
        this.seg_len = 5;
        this.seg_num = numberOfSegments;
        this.pos = [0, 100];
        this.initSegments(numberOfSegments);
        this.length = numberOfSegments * this.seg_len;
        
        this.waveHeight = 0;
        this.maxHeight = 0;
        this.direction = 0;
    }

    initSegments(number){
        for(var i = 0; i < number; i++){
            this.segments.push(0);
        }
    }

    draw(){
        ctx.beginPath();
        ctx.moveTo(this.pos[0], this.pos[1]);
        for(var i = 0; i < this.seg_num; i += 1){
            ctx.lineTo((i+1)*this.seg_len, this.pos[1] + this.segments[i]);
        }
        ctx.stroke();
        ctx.closePath();
    }

    genCurve(){
        for(var i = 0; i < this.seg_num; i += 1){
            this.segments[i] = Math.sin(i * this.seg_len/60) * this.waveHeight;
        }
    }

    update(){
        if(this.maxHeight > 0){
            this.waveHeight += this.direction;
            if(this.waveHeight < -this.maxHeight){
                this.maxHeight -= 1;
                this.direction = -this.direction;
                this.waveHeight = -this.maxHeight;
            }
            else if(this.waveHeight > this.maxHeight){
                this.maxHeight -= 1;
                this.direction = -this.direction;
                this.waveHeight = this.maxHeight;
            }
            this.genCurve();
        }
    }

    pluck(strength, tensity){
        this.waveHeight = strength;
        this.maxHeight = strength;
        this.direction = -tensity;
    }
}