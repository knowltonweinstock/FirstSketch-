
let ellipseBrushBool = false 
let sqaureBrushBool = false

function setup (){
	createCanvas (windowWidth, windowHeight)
	background(225)
	rectMode(CENTER)

}

function draw (){
	fill(0)
	textSize(20)
	text("Press e for ellipse brush, press s for square brush", 100, 100)

	if(sqaureBrushBool == true){
		if(mouseIsPressed == true){
			sqaureBrush()
		}
		}

		if(ellipseBrushBool == true){
			if(mouseIsPressed == true){
			ellipseBrush()
		}
		}

		print(ellipseBrushBool)

	}


	function ellipseBrush(){
		fill(random(255), random(255), random(255))
		ellipse (mouseX, mouseY, 50,50)

	}

	function sqaureBrush(){

		rect(mouseX, mouseY, 100, 100)


	}


	function keyPressed(){
		if(key === 'e'){
			ellipseBrushBool = true
			sqaureBrushBool = false
		}

		if(key === 's'){
			ellipseBrushBool = false
			sqaureBrushBool = true
		}
	}
