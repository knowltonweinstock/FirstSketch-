let ellipseBrushBool = false;
let squareBrushBool = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(157, 194, 242);           
  rectMode(CENTER);
  textSize(20);
}

function draw() {
  fill(0);
  text("Beach Day", 100, 100);
}

// draw while dragging
function mouseDragged() {
  if (ellipseBrushBool) {
    ellipseBrush();
  } else if (squareBrushBool) {
    squareBrush();
  }
}

function ellipseBrush() {
  fill(237, 237, 159);
  ellipse(mouseX, mouseY, 50, 50);   
}

function squareBrush() {    
  fill(31, 51, 204);
  rect(mouseX, mouseY, 100, 100);
}

function keyPressed() {
  if (key === 'e') {
    ellipseBrushBool = true;
    squareBrushBool = false;
  }

  if (key === 's') {
    ellipseBrushBool = false;
    squareBrushBool = true;
  }
}

if(mouseIsPressed == true){
	background(255);
	} else {
	background(0, 0, 255);
}	
