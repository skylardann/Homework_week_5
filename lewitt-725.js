function setup() {
  createCanvas(400, 400);
}

function draw() {

  rectMode(RADIUS);
  fill(40, 86, 130, 222);
  rect(200, 200, 200, 200);
  rectMode(CENTER);
  fill(0);
  strokeWeight(4);
  stroke(250);
  rect(200, 200, 200, 200);

}
