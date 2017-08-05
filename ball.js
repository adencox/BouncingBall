var g = new p5.Vector(0,0.5);

function ball() {
  //initialise the ball variable
  this.pos = createVector(width/2, height/2);
  this.vel = p5.Vector.random2D();
  this.vel.mult(10);
  this.r = 20;

  this.update = function() {
    //right edge limit
    if (this.pos.x + this.r/2 > width) {
      this.pos.x = width - this.r/2;
      this.vel.x = this.vel.x * -0.9; //introduce a deficit
    } else if (this.pos.x - this.r/2 < 0) { //left edge limit
      this.pos.x = this.r/2;
      this.vel.x = this.vel.x * -0.9;
    }

    //bottom "floor" limit
    if (this.pos.y + this.r/2 > height) {
      this.vel.y = this.vel.y * -0.9;
      this.pos.y = height - this.r/2;

      //normalise the y velocity and if the next value it's sufficiently small
      if ((this.vel.y + g.y)/this.vel.y < 0.05) {
        //must mean the ball has stopped bouncing, so introduce friction
        this.vel.x = this.vel.x - this.vel.x*0.03;
      }
    }
    this.move();
  }

  this.show = function() {
    //draw the ball
    fill(0);
    ellipse(this.pos.x,this.pos.y,this.r);
  }

  this.move = function() {
    //add the accn (gravity)
    this.vel.add(g);
    //add the velocity for new position
    this.pos.add(this.vel);
  }

  this.reset = function() {
    //copy of the initialisation to reset the ball
    this.pos = createVector(width/2, height/2);
    this.vel = p5.Vector.random2D();
    this.vel.mult(10);
    this.r = 20;
  }

}
