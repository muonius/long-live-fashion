let r = 10;

function setup() {
  createCanvas(600, 600);
  noStroke();
  background(0);
}

function draw() {
  noFill();
  push();
  translate(width / 2 - 10, height / 2 - 10);
  stroke("red");
  strokeWeight(5);
  beginShape();
  for (let i = 0; i < 720; i += 10) {
    let angle = radians(i);
    var x = r * cos(angle) * angle;
    var y = r * sin(angle) * angle;
    vertex(x, y);
    // speed += 0.00001;
  }
  endShape();
  pop();

  push();
  translate(width / 2 - 5, height / 2 - 5);
  stroke(150);
  strokeWeight(5);
  beginShape();
  for (let i = 0; i < 1200; i += 10) {
    let angle = radians(i);
    var x = r * cos(angle) * angle;
    var y = r * sin(angle) * angle;
    vertex(x, y);
    // speed += 0.00001;
  }
  endShape();
  pop();
}
