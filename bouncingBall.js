
let xPos = 0
let yPos = 0

let xSpeed = 5
let ySpeed = 5

let ballDiameter = 100


function setup(){
	createCanvas(windowWidth, windowHeight)
	xPos = windowWidth/2
	yPos = windowHeight/2

}


function draw(){

	ellipse(xPos, yPos, ballDiameter, ballDiameter )

	xPos = xPos + xSpeed
	yPos = yPos + ySpeed

	if(xPos >= windowWidth - ballDiameter/2 || xPos <= ballDiameter/2){
		//reverse x speed
		xSpeed = xSpeed * -1
		fill(173, 123, 209)
	}

	if(yPos >= windowHeight - ballDiameter/2 || yPos <= ballDiameter/2){
		//reverse x speed
		ySpeed = ySpeed * -1
		fill(151, 232, 174)
	}

}

