var gravity = 1
var grav = 1
var ballHeld
let floor = window.innerHeight - 50
var friction = 100
var rR
var rG
var rB
var velX = 0
var velY = 0
var ballX = 200
var ballY = 50
var ballW = 50
var ballH = 50
let drawPath = true
function ballMove() {
  ballX = mouseX;
  ballY = mouseY;
}
function setGravity() {
  gravity = grav;
}
function setup() {
	let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0,0);
  cnv.mousePressed(function() { if (dist(mouseX,mouseY,ballX,ballY) <= 50) {
    ballHeld = true} });
  cnv.mouseReleased(function() { ballHeld = false });
  background(115)
  keyTyped()
}
function mouseWheel(event) {
  if (event.delta >= 0) {
    grav -= 0.2;
    setGravity();
  }
  else if (event.delta <= 0) {
    grav += 0.2;
    setGravity();
  }
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    grav -= 0.2;
    setGravity();
  }
  else if (keyCode === UP_ARROW) {
    grav += 0.2;
    setGravity();
  }
}
function keyTyped() {
  if (key === " ") {
    background(115)
  }
}

function draw() {
  floor = window.innerHeight - 50
  resizeCanvas(windowWidth, windowHeight)
  background(115)
  fill(0)
  rect(0,floor,window.innerWidth,50)
  if (ballY >= floor - ballH/2) {
    ballY = window.innerHeight - 75
    velY = -velY/1.5
    velX = velX/friction * 99
  }
  if (ballY <= window.innerHeight - window.innerHeight + 25) {
      ballY = window.innerHeight - window.innerHeight + 25
      velY = -velY/1.5
      velX = velX/friction * 99
  }
  if (ballX <= 25) {
    ballX = 25
    velX = -velX/1.25
    rR = random(0,0.255) * 1000
    rG = random(0,0.255) * 1000
    rB = random(0,0.255) * 1000
  }
  if (ballX >= window.innerWidth - 25) {
    ballX = window.innerWidth - 25
    velX = -velX/1.25
  rR = random(0,0.255) * 1000
  rG = random(0,0.255) * 1000
  rB = random(0,0.255) * 1000
  }
  fill(255)
  textSize(50)
  text('Gravity: ' + round(grav,2).toString(),8,50)
  fill(rR,rG,rB)
  ball = ellipse(ballX,ballY,ballW,ballH);
  function path() {
    fill(255,0,0)
    ellipse(ballX,ballY,5,5)
  }
  
  
  if (ballHeld) {
    var mouseDeltaX = mouseX - pmouseX;
    var mouseDeltaY = mouseY - pmouseY;
    velX = mouseDeltaX/2;
    velY = mouseDeltaY/2;
    ballX = mouseX;
    ballY = mouseY;
  }
  else {
  velY+= gravity/5
  ballY += velY
  ballX += velX/2
  }
}