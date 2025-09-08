function setup() {
  createCanvas(700, 500);
}

function draw() {
  
  if(mouseX > width/2){
    background(235, 64, 52)
    fill(30,190,40)
    }else{
  background(220)
      fill(30,20,190)
      
      if(mouseIsPressed == true){
        fill(30, 190, 40)
      } else{
        fill(30, 20, 190)
      }
      
      if(keyIsPressed == true){
        strokeWeight(10)
      }else{
      strokeWeight(1)
      }
    }
    
  ellipse(mouseX, mouseY, 100, 100)
  //line(pmouseX, pmouseY, mouseX, mouseY)
  //noCursor()
  
  print(mouseX)
}