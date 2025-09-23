



function setup(){
		createCanvas(windowWidth, windowHeight)

		for(let i = 0; i<windowWidth; i=i+10){
			line(0, 0, i, windowHeight)
			print(i)

		}

		for(let i = 0; i<windowHeight; i=i+10){
			line(0, i, windowWidth, i)	
		}

		for(let i = 0; i < 500; i++){
			// ellipse(random(windowWidth), random(windowHeight), 50, 50)
		}
}


function draw(){
	for(let i = 0; i<windowWidth; i=i+50){
			line(mouseX, mouseY, i, windowHeight)
			print(i)
		}

	// for(let i = 0; i < 500; i++){
	// 	fill(3, 252, 177)
	// 	ellipse(random(windowWidth), random(windowHeight), 50, 50)
	// 	}


}