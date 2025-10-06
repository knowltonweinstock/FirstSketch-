

//candy corn variables
let candyCornXpos = 0
let candyCornYpos = 0
let candyCornYSpeed = -3
let candyCornDiameter = 100
let candyCorn //image variable for candy corn

//santa candy variable
let santaCandyXpos = 0
let santaCandyYpos = 0
let santaCandyYSpeed = -4
let santaCandyDiameter = 100
let santaCandy //image variable for candy corn


//happy candy variables
let happyCandyXpos = 0
let happyCandyYpos = 0
let happyCandyYSpeed = -5
let happyCandyDiameter = 100
let happyCandy //image variable for candy corn


//firework variables
let fireworks 

//time variables
let timer = 35


let startGameBool = true

let winScreenBool = false

let loseGameBool = false

let score= 0 


function preload(){
	candyCorn = loadImage('halloweenCandy.png')
	santaCandy = loadImage('santaCandy.png')
	happyCandy = loadImage('happyCandy.png')
	candyLand = loadImage('candyLand.jpg')
	fireworks = loadImage('giphy.gif')
}


function setup(){
	createCanvas(windowWidth, windowHeight)
	xPos = random(50, windowWidth -50)
	yPos = windowHeight + 50

	imageMode(CENTER)
	//rectMode(CENTER)

}


function draw(){
	
	if(startGameBool == true){
		game()
	}

	if(winScreenBool == true){
		winGame()
	}

	if(loseGameBool == true){
		loseGame()
	}
}


function game(){
	textAlign(LEFT)
	//background('candyland.jpg')
	image(candyLand, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
	textSize(30)

	fill(255)
	noStroke()
	rect(45, 30, 300, 120)
	fill(0)
	text('Collect 30 Candies!', 50, 70)
	text(score, 50, 100)
	text(timer, 50, 140)
	
	//
	
	//candy corn game mechanics

	image(candyCorn, candyCornXpos, candyCornYpos, candyCornDiameter, candyCornDiameter)

	candyCornYpos = candyCornYpos + candyCornYSpeed

	if(dist(mouseX, mouseY, candyCornXpos, candyCornYpos) < candyCornDiameter/2 && mouseIsPressed){
		//score = score + 5
		score++
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


	//santa candy game mechanics

	image(santaCandy, santaCandyXpos, santaCandyYpos, santaCandyDiameter, santaCandyDiameter)

	//image(santaCandy, windowWidth/2, windowHeight/2)

	santaCandyYpos = santaCandyYpos + santaCandyYSpeed

	if(dist(mouseX, mouseY, santaCandyXpos, santaCandyYpos) < santaCandyDiameter/2 && mouseIsPressed){
		//score = score + 5
		score = score + 5
		santaCandyYSpeed = santaCandyYSpeed * random(1.2, 1.5)
		santaCandyXpos = random(50, windowWidth -50)
		santaCandyYpos = windowHeight + 50
	}

	if(santaCandyYpos <=0){

		santaCandyYSpeed = santaCandyYSpeed * 1.2
		print("minus 1")
		santaCandyXpos = random(50, windowWidth -50)
		santaCandyYpos = windowHeight + 50

		print(santaCandyYSpeed)
	}

	if(santaCandyYSpeed <= -17){
		santaCandyYSpeed = -17
	}




	//happy candy game mechanics

	image(happyCandy, happyCandyXpos, happyCandyYpos, happyCandyDiameter, happyCandyDiameter)

	happyCandyYpos = happyCandyYpos + happyCandyYSpeed

	if(dist(mouseX, mouseY, happyCandyXpos, happyCandyYpos) < happyCandyDiameter/2 && mouseIsPressed){
		//score = score + 5
		score = score + 3
		happyCandyYSpeed = happyCandyYSpeed * random(1.2, 1.5)
		happyCandyXpos = random(50, windowWidth -50)
		happyCandyYpos = windowHeight + 50
	}

	if(happyCandyYpos <=0){

		happyCandyYSpeed = happyCandyYSpeed * random(1.2, 1.5)
		print("minus 1")
		happyCandyXpos = random(50, windowWidth -50)
		happyCandyYpos = windowHeight + 50

		print(happyCandyYSpeed)
	}

	if(happyCandyYSpeed <= -17){
		happyCandyYSpeed = -17
	}



	if(score >= 30){
		winScreenBool = true
		startGameBool = false

	}

	//timer function

	if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
		timer --;
	}

	if (timer == 0) {

		startGameBool = false
		loseGameBool = true


	}
}


function winGame(){
	//background('fireworks.gif')
	image(fireworks, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
	textAlign(CENTER)
	fill(255)
	text('YOU WIN! Press R to Reload Game', windowWidth/2, windowHeight/2)



}

function loseGame(){
	background(0)
	textAlign(CENTER)
	fill(255)
	text("GAME OVER", windowWidth/2, windowHeight/2);
}



function keyPressed(){

	if(winScreenBool == true){
		if(key === 'r'){
			winScreenBool = false
			startGameBool = true
			loseGameBool = false 

			score = 0
			candyCornYSpeed = -3
			santaCandyYSpeed = -4
			happyCandyYSpeed = -5

			timer = 35


		}

	}

	if(loseGameBool == true){
		if(key === 'r'){
			winScreenBool = false
			startGameBool = true
			loseGameBool = false 

			score = 0
			candyCornYSpeed = -3
			santaCandyYSpeed = -4
			happyCandyYSpeed = -5

			timer = 35


		}

	}


}

