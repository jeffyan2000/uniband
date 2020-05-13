class InsGuitar{
    constructor(id){
        this.strings = [];
        this.sounds = [];

        this.strings.push(new GuitarString(121, 0, 335, 1, "#C0C0C0"));
        this.strings.push(new GuitarString(121, 0, 356, 2, "#C0C0C0"));
        this.strings.push(new GuitarString(121, 0, 377, 3, "#f1c27d"));
        this.strings.push(new GuitarString(121, 0, 398, 4, "#e0ac69"));
        this.strings.push(new GuitarString(121, 0, 419, 5, "#c68642"));
        this.strings.push(new GuitarString(121, 0, 440, 6, "#8d5524"));
        this.sounds.push(new sound("client/sound/guitar/1st_String_E_vbr.mp3"));
        this.sounds.push(new sound("client/sound/guitar/2nd_String_B_vbr.mp3"));
        this.sounds.push(new sound("client/sound/guitar/3rd_String_G_vbr.mp3"));
        this.sounds.push(new sound("client/sound/guitar/4th_String_D_vbr.mp3"));
        this.sounds.push(new sound("client/sound/guitar/5th_String_A_vbr.mp3"));
        this.sounds.push(new sound("client/sound/guitar/6th_String_E_vbr.mp3"));
    }

    draw(){
        for(var string in this.strings){
            this.strings[string].update();
        }

        ctx.drawImage(guitarImg, 0, 0);
        for(var string in this.strings){
            this.strings[string].draw();
        }
    }

    pluck(number){
        this.strings[number].pluck(5, 3);
        this.sounds[number].stop();
        this.sounds[number].reset();
        this.sounds[number].play();
    }
}

class GuitarString{
    constructor(numberOfSegments, x, y, width, color){
        this.color = color;
        this.segments = [];
        this.seg_len = 6;
        this.seg_num = numberOfSegments;
        this.pos = [x, y];
        this.width = width
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
        ctx.moveTo(this.pos[0], this.pos[1]);
        ctx.beginPath();
        ctx.lineWidth = this.width;
        ctx.strokeStyle = this.color;
        for(var i = 0; i < this.seg_num; i += 1){
            ctx.lineTo((i+1)*this.seg_len, this.pos[1] + this.segments[i]);
        }
        ctx.stroke();
        ctx.closePath();
    }

    genCurve(){
        for(var i = 0; i < this.seg_num; i += 1){
            this.segments[i] = Math.sin(i * this.seg_len/58) * this.waveHeight;
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