function setup() {
  createCanvas(900, 550);
  noLoop();
}

function draw() {
  drawSky();
  drawSun();
  drawDistantMountains();
  drawLake();
  drawFuji();
  drawReflection();
  drawForegroundTrees();
  drawClouds();
}

function drawSky() {
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(color(255, 200, 220), color(120, 170, 255), inter);
    stroke(c);
    line(0, y, width, y);
  }
}

function drawSun() {
  noStroke();
  fill(255, 140, 100, 180);
  ellipse(width * 0.8, height * 0.25, 90);
}

function drawDistantMountains() {
  noStroke();
  fill(120, 140, 180);
  triangle(100, height/2, 300, height*0.35, 500, height/2);
  triangle(400, height/2, 650, height*0.38, 850, height/2);
}

function drawLake() {
  noStroke();
  fill(90, 130, 190);
  rect(0, height/2, width, height/2);
}

function drawFuji() {
  noStroke();
  
  // Main mountain
  fill(80, 90, 130);
  triangle(
    width*0.25, height/2,
    width*0.5, height*0.18,
    width*0.75, height/2
  );
  
  // Snow cap
  fill(255);
  triangle(
    width*0.43, height*0.30,
    width*0.5, height*0.18,
    width*0.57, height*0.30
  );
}

function drawReflection() {
  push();
  translate(0, height);
  scale(1, -1);
  tint(255, 70);
  drawFuji();
  pop();
}

function drawForegroundTrees() {
  for (let x = 50; x < width; x += 80) {
    drawTree(x, height/2 + 60);
  }
}

function drawTree(x, y) {
  // trunk
  fill(70, 40, 20);
  rect(x-5, y, 10, 30);
  
  // foliage
  fill(30, 100, 60);
  triangle(x-20, y+10, x, y-40, x+20, y+10);
  triangle(x-15, y-5, x, y-50, x+15, y-5);
}

function drawClouds() {
  fill(255, 230);
  noStroke();
  drawCloud(200, 120);
  drawCloud(600, 150);
}

function drawCloud(x, y) {
  ellipse(x, y, 60, 40);
  ellipse(x + 30, y - 10, 70, 50);
  ellipse(x + 60, y, 60, 40);
}
