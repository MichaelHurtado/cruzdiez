var inter;
var n;
var f;
var angle;
let col=['#FF0000','#00FF00','#0000FF','#000000'];
var a;
var b;
var c;
let c1;
let c2;
let c3;
function windowResized(){
	resizeCanvas(windowWidth,windowHeight);
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  c1 = color(255, 0, 0);
  c2 = color(0, 255, 0);
  c3 = color(0, 0, 255);
  background(0);
  inicializar();
}
function draw(){
  colorMode(HSB);
  for (var i = 0; i<width; i=i+n){
    strokeWeight(f);
    stroke(col[a]);
    push();
    translate(n/2,0);
    line(i, 0, i, height);
    pop();
  }
  for (var i = 0; i<width; i=i+n){
    strokeWeight(f);
    stroke(col[b]);
    push();
    translate(0,0);
    line(i, 0, i, height);
    pop();
  }
  for (var i = 0; i<width/2; i=i+n){
    inter = map(i, 0, width, 0.0, 1.0);
    strokeWeight(f);
    stroke(lerpColor(c1, c3, inter));
    push();
    translate(0,0);
    line(i, 0, i, height/2);
    pop();
  }
  for (var i = 0; i<width/2; i=i+n){
    inter = map(i, 0, width/2, 0.0, 1.0);
    strokeWeight(f);
    stroke(lerpColor(c2, c3, inter));
    push();
    translate(width/2,height/2);
    line(i, 0, i, height/2);
    pop();
  }
  for (var i = 0; i<width; i=i+n){
    strokeWeight(f);
    stroke(col[c]);
    push();
    rotate(angle);
    line(i, 0, i, height);
    pop();
  }
}
function inicializar(){
  n=int(random(3,6));
  f=random(2.5);
  a=int(random(4));
  b=int(random(4));
  c=int(random(4));
}
function mousePressed(){
  inicializar();
}
function touchMoved(){
  angle=map(mouseX,0,width,PI/360,PI/100);
}