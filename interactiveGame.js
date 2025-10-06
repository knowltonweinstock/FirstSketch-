

//candy corn variables
let candyCornXpos = 0
let candyCornYpos = 0
let candyCornYSpeed = -5
let candyCornDiameter = 100
let candyCorn //image variable for candy corn

//pink candy variable
let pinkCandyXpos = 0
let pinkCandyYpos = 0
let pinkCandyYSpeed = -5
let pinkCandyDiameter = 100
let pinkCandy //image variable for candy corn


//purple candy variables
let purpleCandyXpos = 0
let purpleCandyYpos = 0
let purpleCandyYSpeed = -5
let purpleCandyDiameter = 100
let purpleandy //image variable for candy corn



let startGameBool = true

let winScreenBool = false

let score= 0 


function preload(){
	candyCorn = loadImage('halloweenCandy.png')
	pinkCandy = loadImage('pinkCandy.jpg')
	purpleCandy = loadImage('purpleCandy.jpg')
	candyLand = loadImage('candyLand.jpg')
}


function setup(){
	createCanvas(windowWidth, windowHeight)
	xPos = random(50, windowWidth -50)
	yPos = windowHeight + 50

	imageMode(CENTER)

}


function draw(){
	
	if(startGameBool == true){
		game()
	}

	if(winScreenBool == true){
		winGame()
	}
}


function game(){

	background('candyland.jpg')
	candyLand = loadImage('candyLand.jpg')
	textSize(30)

	text(score, 10, 100)
	
	//image(backgroundImage, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
	
	//candy corn game mechanics

	image(candyCorn, candyCornXpos, candyCornYpos, candyCornDiameter, candyCornDiameter)

	candyCornYpos = candyCornYpos + candyCornYSpeed

	if(dist(mouseX, mouseY, candyCornXpos, candyCornYpos) < candyCornDiameter/2 && mouseIsPressed){
		//score = score + 5
		score + 2
		candyCornYSpeed = candyCornYSpeed * 1.2
		candyCornXpos = random(50, windowWidth -50)
		candyCornYpos = windowHeight + 50
	}

	if(candyCornYpos <=0){
	
		candyCornYSpeed = candyCornYSpeed * 1.2
		print("minus 1")
		candyCornXpos = random(50, windowWidth -50)
		candyCornYpos = windowHeight + 50

		print(candyCornYSpeed)
	}

	if(candyCornYSpeed <= -17){
		candyCornYSpeed = -17
	}


	//pink candy game mechanics

	image(pinkCandy, pinkCandyXpos, pinkCandyYpos, pinkCandyDiameter, pinkCandyDiameter)

	pinkCandyYpos = pinkCandyYpos + pinkCandyYSpeed

	if(dist(mouseX, mouseY, pinkCandyXpos, pinkCandyYpos) < pinkCandyDiameter/2 && mouseIsPressed){
		//score = score + 5
		score + 5
		pinkCandyYSpeed = pinkCandyYSpeed * 1.2
		pinkCandyXpos = random(50, windowWidth -50)
		pinkCandyYpos = windowHeight + 50
	}

	if(pinkCandyYpos <=0){
	
		pinkCandyYSpeed = pinkCandyYSpeed * 1.2
		print("minus 1")
		pinkCandyXpos = random(50, windowWidth -50)
		pinkCandyYpos = windowHeight + 50

		print(pinkCandyYSpeed)
	}

	if(pinkCandyYSpeed <= -17){
		pinkCandyYSpeed = -17
	}




	//purple candy game mechanics

	image(purpleCandy, purpleCandyXpos, purpleCandyYpos, purpleCandyDiameter, purpleCandyDiameter)

	purpleCandyYpos = purpleCandyYpos + purpleCandyYSpeed

	if(dist(mouseX, mouseY, purpleCandyXpos, purpleCandyYpos) < purpleCandyDiameter/2 && mouseIsPressed){
		//score = score + 5
		score++
		purpleCandyYSpeed = purpleCandyYSpeed * 1.2
		purpleCandyXpos = random(50, windowWidth -50)
		purpleCandyYpos = windowHeight + 50
	}

	if(purpleCandyYpos <=0){
	
		purpleCandyYSpeed = purpleCandyYSpeed * 1.2
		print("minus 1")
		purpleCandyXpos = random(50, windowWidth -50)
		purpleCandyYpos = windowHeight + 50

		print(purpleCandyYSpeed)
	}

	if(purpleCandyYSpeed <= -17){
		purpleCandyYSpeed = -17
	}



	if(score == 30){
		winScreenBool = true
		startGameBool = false
	}
}


function winGame(){



}

