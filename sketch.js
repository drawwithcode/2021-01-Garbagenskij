function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(100);
}

function draw() {
  background("black");
  noFill();
  stroke("white");
  strokeWeight(windowWidth / 450);

  let a = frameCount;
  let x = windowWidth / 2;
  circle(x, windowHeight / 2, x);

  if (a <= x) {
    circle((a + x) / 2, windowHeight / 2, a);
    arc(x + a / 2, windowHeight / 2, x - a, x - a, PI, 0, OPEN);
  }
  for (let w = 100; w < 1000000; w = w + 100) {
    if (a >= w && a <= x + w) {
      circle((a - w + x) / 2, windowHeight / 2, a - w);
      arc(
        x + (a - w) / 2,
        windowHeight / 2,
        x - (a - w),
        x - (a - w),
        PI,
        0,
        OPEN
      );
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
