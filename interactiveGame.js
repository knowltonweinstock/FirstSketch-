let xPos = 0
let yPos = 0

//let xSpeed = 5
let ySpeed = -5

let ballDiameter = 100

let score= 0 


function setup(){
	createCanvas(windowWidth, windowHeight)
	xPos = random(50, windowWidth -50)
	yPos = windowHeight + 50

}


function draw(){
	background(255)

	text(score, 10, 100)
	ellipse(xPos, yPos, ballDiameter, ballDiameter )

	//xPos = xPos + xSpeed
	yPos = yPos + ySpeed
	print(yPos)
	// if(xPos >= windowWidth - ballDiameter/2 || xPos <= ballDiameter/2){
	// 	//reverse x speed
	// 	xSpeed = xSpeed * -1
	// 	fill(173, 123, 209)
	// }

	if(dist(mouseX, mouseY, xPos, yPos) < 50){
		score ++
		xPos = random(50, windowWidth -50)
		yPos = windowHeight + 50

	}
	if(yPos <=0){
		//reverse x speed
		// ySpeed = ySpeed * -1
		// fill(151, 232, 174)
		ySpeed = ySpeed * 1.2
		print("minus 1")
		xPos = random(50, windowWidth -50)
		yPos = windowHeight + 50
	}

}