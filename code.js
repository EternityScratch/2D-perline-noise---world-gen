function setup() {
  createCanvas(5000, 270);
}

function draw() {
  background(30, 60, 200);
  noFill(70, 150, 40);
  strokeWeight(20);
  stroke(70, 150, 40);
  beginShape();
  for (var x = 0; x < width; x++) {
    var nx = map(x, 0, width, 0, 10);
    var y = height * noise(nx);
    vertex(x, y);
  }
  endShape();
  dirt();
}

function dirt() {
  noFill(70, 150, 20);
  strokeWeight(100);
  stroke(170, 100, 0);

  beginShape();
  for (var x = 0; x < width; x++) {
    var nx = map(x, 0, width, 0, 10);
    var y = height * noise(nx)+55;
    vertex(x, y);
  }
  endShape();

  stroke(190, 100, 30);

  beginShape();
  for (var x = 0; x < width; x++) {
    var nx = map(x, 0, width, 0, 10);
    var y = height * noise(nx)+110;
    vertex(x, y);
  }
  endShape();
  
      beginShape();
  for (var x = 0; x < width; x++) {
    var nx = map(x, 0, width, 0, 10);
    var y = height * noise(nx)+160;
    vertex(x, y);
  }
  endShape();
  
        beginShape();
  for (var x = 0; x < width; x++) {
    var nx = map(x, 0, width, 0, 10);
    var y = height * noise(nx)+205;
    vertex(x, y);
  }
  endShape();
}
