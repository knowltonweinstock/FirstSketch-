

let bluey

//position of bluey 
let blueyX
let blueyY

//bluey spped 
let blueyXspeed = 3
let blueyYspeed = 3

let score = 0

let mouseDist

let startGameBool = true 
let winGameBool = false 

function preload(){
	bluey = loadImage('cartoon.jpeg')

}

function setup(){
	createCanvas(windowWidth, windowHeight)

	blueyX = windowWidth/2
	blueyY = windowHeight/2

	imageMode(CENTER)

}

function draw(){
	if(startGameBool == true){
		startGame()

	}

	if(winGameBool == true){
		winGame()

	}

}

//function that starts the game
function startGame(){
	background(0)

	fill(255)
	textSize(40)
	text('Tag Bluey! Your score is: ' + score + ' points!', 10, 100)

	mouseDist = dist(mouseX, mouseY, blueyX, blueyY)

	image(bluey, blueyX, blueyY, 50, 50)

	blueyX = blueyX + blueyXspeed
	blueyY = blueyY + blueyYspeed

	if(blueyX >= windowWidth - 25 || blueyX <= 25){
		blueyXspeed = blueyXspeed * -1

	}

	if(blueyY >= windowHeight - 25 || blueyY <= 25){
		blueyYspeed = blueyYspeed * -1
	}

	if(mouseDist < 25){
		score++
		blueyX = random(26, windowWidth - 26)
		blueyY = random(26, windowHeight - 26)

		blueyXspeed = blueyXspeed * 1.3

	}

	if(score == 10){
		startGameBool = false 
		winGameBool = true
	}


}

//win screen function
function winGame(){
background(235, 52, 198)

	fill(255)
	textSize(40)
	text('You Win!', 10, 100)

	image(bluey, windowWidth/2, windowHeight/2, 200, 200)

}