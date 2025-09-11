let beachBool = false
let snowBool = false
let rainBool = false

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(157, 194, 242);           
  rectMode(CENTER);
  textSize(20);
}


function setup(){
  createCanvas(windowWidth, windowHeight)
  background(255)
  
}


function draw(){
  fill(0)
  textSize(20)
  text("Press b for beach, press s for snow, press r for rain", 100, 100)

  //if beach is true draw day function
  if(beachBool == true){
    
      beachScene()
    
  }

  //if snow is true draw snow function
  if(snowBool == true){
    
      snowScene()
    
  }
  
   //if rain is true draw snow function
  if(rainBool == true){
    
      rainScene()
    }
}


//pretend that these are individual sketches/drawings/scenes and
//you're flipping between them


function beachScene(){
  //add as much as you want to this function!
  background(20, 89, 199)
  fill(227, 195, 89)
  ellipse(windowWidth/2, windowHeight/2, 200, 200)
}

function snowScene(){
  //add as much as you want to this function!
  background(175, 200, 240)
  fill(245, 246, 247)
  ellipse(windowWidth/2, windowHeight/3, 200, 200)

}

function rainScene(){
  //add as much as you want to this function!
  background(76, 85, 99)
  fill(10, 21, 38)
  ellipse(windowWidth/2, windowHeight/3, 200, 200)

}

function keyPressed(){
  //pressing s flips day to true and night to false
  if(key === 'b'){
    beachBool = true
    snowBool = false
    rainBool = false
  
  }
  //pressing b flips night to true and day to false
  if(key === 's'){
    beachBool = false
    snowBool = true
    rainBool = false
    
  }

  //pressing r flips night to true and day to false
  if(key === 'r'){
    beachBool = false
    snowBool = false
    rainBool = true

  }


}


