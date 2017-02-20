var x = 10
var y = 10

function setup() {

  createCanvas(400, 400);
  background(0);


  while (x < 800 && y < 800) {

    ellipseMode(CENTER);
    noFill(221, 250);
    strokeWeight(11);
    stroke(255);

    ellipse(width / 2, height / 2, x, y);

    x = x + 70

    y = y + 70

  }
}

function draw() {

}
