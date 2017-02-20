function setup() {
  createCanvas(480, 480);
}

function draw() {
  background(255);
  fill(200);
  stroke(100, 0, 0);

  for (var i = 0; i <= 500; i += 8) {
    line(i, 2, 2, i);
  }

  for (var j = 0; j <= 500; j += 8) {
    line(504, j, j, 507);
  }
}
