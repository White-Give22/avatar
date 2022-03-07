let mic;
let miclevel;
let angle;
let angle1;
let angle2;
let angle3;
let angle4;
let d;
let d1;
let d2;
let h;
let h1;
let facea = 145;
let ew = 0;
let ew1 = 0;
let ew2 = 0;
let ew3 = 0;
let ew4 = 0;
let fr = 24;
let myf;
let myf1;
let myf2;
let myf3;
let myf4;
let myf5;
let myf6;
let myf7;
let myf8;
let myf9;
let myf10;
let myf11;
let myf12;
let myf13;
let myf14;
let myf15;
let myf16;
let startMic = false;

function preload() {
  img = loadImage("bg.png");
}

function setup() {
  myf = new Fire();
  myf1 = new Fire();
  myf2 = new Fire();
  myf3 = new Fire();
  myf4 = new Fire();
  myf5 = new Fire();
  myf6 = new Fire();
  myf7 = new Fire();
 myf8= new Fire();
 myf9= new Fire();
 myf10= new Fire();
 myf11= new Fire();
 myf12= new Fire();
 myf13= new Fire();
 myf14= new Fire();
 myf15= new Fire();
 myf16= new Fire();
  console.log(myf);
  createButton("Start").mousePressed(startmic);

  angleMode(DEGREES);
  frameRate(fr);
}
function startmic(){
  mic = new p5.AudioIn();
  mic.start();

  startMic = true;
}



function draw() {
if (startMic){
  createCanvas(500, 500);
  background(img);
  miclevel = mic.getLevel();
  //console.log("mic level: " + mic.getLevel());
  angle = map(mic.getLevel(), 0, 0.4, 0, 360);
  angle1 = map(mic.getLevel(), 0, 0.4, 0, -360);
  angle2 = map(mic.getLevel(), 0, 0.4, 35, 45);
  angle3 = map(mic.getLevel(), 0, 0.4, 25, 35);
  angle4 = map(mic.getLevel(), 0, 0.4, 15, 25);

  //avatar

  body();
  head();
  headblack();
  eye();
  lefteyeblack(angle);
  righteyeblack(angle1);
  hand();
  hat();
  face();
  ewf();
  shinystar();
}
}

function body() {
  push();
  noStroke();
  push();
  fill(13, 128, 118, 40);
  beginShape();
  vertex(width * 0.4, height * 0.3);
  vertex(width * 0.268, height * 0.7);
  vertex(width * 0.71, height * 0.7);
  vertex(width * 0.5, height * 0.25);
  endShape(CLOSE);
  pop();

  push();
  fill(13, 128, 118, 30);
  beginShape();
  vertex(width * 0.235, height * 0.8);
  vertex(width * 0.268, height * 0.7);
  vertex(width * 0.71, height * 0.7);
  vertex(width * 0.752, height * 0.8);
  endShape(CLOSE);
  pop();

  push();
  fill(13, 128, 118, 25);
  beginShape();
  vertex(width * 0.235, height * 0.8);
  vertex(width * 0.2, height * 0.9);
  vertex(width * 0.8, height * 0.9);
  vertex(width * 0.752, height * 0.8);
  endShape(CLOSE);
  pop();

  pop();
}

function head() {
  push();
  fill(0, 0, 0, 200);
  strokeWeight(0);

  ellipse(width * 0.4, height * 0.35, height * 0.4);
  pop();
}

function headblack() {
  push();
  fill(177, 221, 252, facea);

  translate(width * 0.45, height * 0.1565);
  ellipse(0, 0, 1);
  beginShape();
  strokeWeight(0);
  vertex(0, 0);
  bezierVertex(111, 20, 100, 218, -50, 194);
  bezierVertex(-100, 70, 50, 40, 0, 0);
  endShape();
  pop();
}

function eye() {
  //left eye
  ellipse(width * 0.25, height * 0.3, height * 0.1);
  //right eye
  push();
  fill(0, 0, 0);
  ellipse(width * 0.45, height * 0.3, height * 0.1);
  pop();
}

function lefteyeblack() {
  //left eyeblack
  push();
  fill(0, 0, 0);
  translate(width * 0.25, height * 0.3);
  rotate(angle);
  ellipse(width * 0.025, height * 0, height * 0.05);
  pop();
}

function righteyeblack() {
  //right eyeblack
  push();

  translate(width * 0.45, height * 0.3);
  rotate(angle1);
  ellipse(width * 0.025, height * 0, height * 0.05);
  pop();
}

function hand() {
  //left hand
  fill(65, 171, 171,110);
  ellipse(width * 0.25, height * 0.6, height * 0.08);
  //right hand
  fill(64, 139, 168,150);
  ellipse(width * 0.575, height * 0.6, height * 0.08);
}

function hat() {
  //hat
  fill(95, 145, 156, 200);
  triangle(
    width * 0.3,
    height * 0.2,
    width * 0.45,
    height * 0.2,
    width * 0.375,
    height * 0
  );
}

function face() {
  fill(255, 255, 255);
  if (
    mouseX > width * 0.4 &&
    mouseX < width * 0.5 &&
    mouseY > height * 0.25 &&
    mouseY < height * 0.35
  ) {
    facea = random(0, 200);
  }
}

function ewf() {
  noStroke();

  ew = ew + 2 * (deltaTime / 30);
  if (ew >= width) {
    if (fr === 24) {
      fr = 10;
      frameRate(fr);
    } else {
      fr = 24;
      frameRate(fr);
    }
    ew = 0;
  }

  ew1 = ew1 + 3 * (deltaTime / 30);
  if (ew1 >= width) {
    if (fr === 24) {
      fr = 10;
      frameRate(fr);
    } else {
      fr = 24;
      frameRate(fr);
    }
    ew1 = 0;
  }

  ew2 = ew2 + 4 * (deltaTime / 30);
  if (ew2 >= width) {
    if (fr === 24) {
      fr = 10;
      frameRate(fr);
    } else {
      fr = 24;
      frameRate(fr);
    }
    ew2 = 0;
  }

  ew3 = ew3 + 5 * (deltaTime / 30);
  if (ew3 >= width) {
    if (fr === 24) {
      fr = 10;
      frameRate(fr);
    } else {
      fr = 24;
      frameRate(fr);
    }
    ew3 = 0;
  }

  ew4 = ew4 + 6 * (deltaTime / 30);
  if (ew4 >= width) {
    if (fr === 24) {
      fr = 10;
      frameRate(fr);
    } else {
      fr = 24;
      frameRate(fr);
    }
    ew4 = 0;
  }

  fill(50, 230, 152, 40);
  ellipse(ew1, ew, height * 0.05);
  ellipse(ew4 + 200, ew2, height * 0.05);
  ellipse(ew + 150, ew1, height * 0.03);
  ellipse(ew2, ew, height * 0.025);
  ellipse(ew3 + 20, ew2, height * 0.03);
  ellipse(ew + 400, ew4, height * 0.02);
  ellipse(ew2, ew, height * 0.02);
}

function shinystar(){
  if (mouseIsPressed === true) {
    myf.display();
    myf1.display();
    myf2.display();
    myf3.display();
    myf4.display();
    myf5.display();
    myf6.display();
    myf7.display(); 
    myf8.display();
    myf9.display();
    myf10.display();
    myf11.display();
    myf12.display();
    myf13.display();
    myf14.display();
    myf13.display();
    myf16.display();
  }
}
