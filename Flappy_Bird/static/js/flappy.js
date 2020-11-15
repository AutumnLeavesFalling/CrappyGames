var panSpeed = 2;
var gravity = .5;
var flap = 8;
var debug = false;
var playing = false;
var player;
var pipe;

function setup() {
    window.canvas = createCanvas(screen.width/4, screen.height/2);
	player = new Player(100, canvas.height/2, gravity, panSpeed, flap, debug);
	pipe = new Pipe(panSpeed)

}
function draw() {

	background(116, 185, 255);
	if (debug) {
	for (i=0; i<screen.width; i+=50){
		stroke('rgba(45, 52, 54,1.0)');
		line(i, 0, i, screen.height/2);
		line(0, i, screen.width/2, i);
	}}
	player.show();
	pipe.show();
	player.update();
	pipe.update(player.x, player.y);
	if (pipe.gameOver || player.gameOver){
		print('GameOver!');
		playing = false;
		player.playing = false;
		pipe.playing = false;
		player.gameOver = true;
		pipe.gameOver = true;
	}
	else {
	}
	
	

}

function keyPressed() {
	switch (key) {

		case ' ':
			if (playing) {
				player.flap();
				break;
			}
			else {
				print('Start!');
				playing = true;
				player.playing = playing;
				pipe.playing = playing;
				player.gameOver = false;
				pipe.gameOver = false;
				break;
			}
	}
}
