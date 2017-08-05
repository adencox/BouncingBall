var ball;

function setup() {
  createCanvas(500,500);
  ball = new ball();
}

function draw() {
  background(200);
  ball.update();
  ball.show();
}

function mousePressed() {
  ball.reset();
}
