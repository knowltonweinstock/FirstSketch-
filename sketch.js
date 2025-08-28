//set up runs one time

let bluey 

function preload(){
    cartoon=loadImage('cartoon.jpeg')

}

function setup() {
  createCanvas(1000, 500);
}

//draw runs in a loop
function draw() {
  background(138, 25, 134);
  
   //ellipse style 
  ellipse (400, 250, 450, 500)
  fill (50, 66, 240)
  
  //ellipse style 
  ellipse (500, 200, 90, 60)
  ellipse (300, 200, 90, 60)
  fill (237, 238, 245)
  
  ellipse (500, 200, 50, 60)
  ellipse (300, 200, 50, 60)
  fill (240, 184, 180)
    
  //triangle style
  translate (350, 220)
  triangle (30, 75, 58, 20, 86, 75)
  
  //sqaure style
  square(140, -35, 20)
  square(-60, -35, 20)
  
  //arc style
  arc (-60, -90, 80, 30, 550, 0)
  arc (170, -90, 80, 30, 550, 0)
  
  //line style
  line(100, 150, 13, 150)
  
 //circle style
  circle(-40, 150, 10)
  
  //rect style
  rect(270, 20, 50, 80)
  rect(-220, 20, 50, 80)

  //bezier curve style
  bezier(100, 60, 100, 15, 10, 15, -40, -1000)
  bezier(50, 60, 30, 5, 95, -15, -40, -1000)
  
  //curve style 
   curve(1173, -1000, 193, 170, -105, 165, -105, -165)

   image(cartoon, 100, 100)

  
 

}
 