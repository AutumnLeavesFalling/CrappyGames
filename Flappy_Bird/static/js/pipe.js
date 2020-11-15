class Pipe{

    constructor (panSpeed, debug=false) {
        this.debug = debug;
        this.panSpeed = panSpeed;
        this.gap = 100;
        this.nextPipe = 150;
        this.width = 50;
        this.opening = floor(random(100, window.canvas.height-100));
        this.x = window.canvas.width;
        this.playing = false;
        this.gameOver = false;

    }

    show() {
       fill(0, 184, 148);
       rect(this.x, 0, this.width, this.opening);
       rect(this.x, this.opening+this.gap, this.width, window.canvas.height);
       if (this.debug){
            fill('rgb(214, 48, 49)'); //Red-Up
            ellipse(this.x, this.opening, 5, 5);
            ellipse(this.x+this.width, this.opening, 5, 5);

            fill('rgb(225, 112, 85)'); // Orange-Down
            ellipse(this.x, this.opening+this.gap, 5, 5);
            ellipse(this.x+this.width, this.opening+this.gap+this.width, 5, 5);
        }

    }

    update(birdLocX, birdLocY) {
        if (this.playing){
            if (debug) {
            print('Playing from Pipe!');
            }
            if (this.x+this.width    < 0){
                this.opening = floor(random(100, window.canvas.height-100));
                this.x = window.canvas.width;
            }
            else{
            this.x -= this.panSpeed;
            }
                if (birdLocX >= this.x && birdLocX <= this.x + this.width){
                    if (birdLocY <= this.opening) {
                        if (debug){
                        print('GameOver From Pipe');
                        }
                        this.gameOver = true;
                    }
                    else if (birdLocY >= this.opening+this.gap) {
                        if (debug){
                        print('GameOver From Pipe');
                        }
                        this.gameOver = true;
                    }
                    else{}
                }
                else{}
        }
        else if (this.gameOver) {
            if (debug){
            print('GameOver triggered from Pipe!');
            }
            this.x = window.canvas.width;
            this.opening = floor(random(100, window.canvas.height-100));
            this.gameOver = false;
        }
        else {}
    }
}