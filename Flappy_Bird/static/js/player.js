

class Player {

    constructor(x, y, gravity, panSpeed, flapY, debug=false) {
        this.sx = x
        this.sy = y;
        this.x = x;
        this.y = y;
        this.gravity = gravity;
        this.flapY = flapY;
        this.velY = 0;
        this.velX = panSpeed;
        this.size = 20;
        this.debug = debug;
        this.playing = false;
        this.gameOver = false;

    }

    show() {
        noStroke();
        fill(253, 203, 110);
        ellipse(this.x, this.y, this.size);
    }

    update() {

        if (this.playing)
            {   
                if (this.debug){
                print('Playing from Player!');
                    }
                this.velY += this.gravity;
                this.y += this.velY;
            
                if (this.y < 0) {
                    this.y = 1;
                }

                else if (this.y > window.canvas.height) {
                    if (this.debug){
                    print('GameOver from Player!');
                    }
                    this.gameOver = true;
            
                }
                
                else {}
            }
        else if (this.gameOver){
                    if (this.debug){
                    print('GameOver triggered from Player!');
                    }
                    this.velY = 0;  
                    this.x = this.sx;
                    this.y = this.sy;
                    this.gameOver = false;
                }
        else { }
        

    }

    flap() {
        this.velY = -this.flapY;
        
        // debug
        if (this.debug) {
            console.log('Jump!');
        }

    }

}
