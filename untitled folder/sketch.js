var r,g,b;
function setup() {
  createCanvas(500,500);
    r = random(255);
    g = random(255);
    b = random(255);
}

function draw() {
  background("#ADD8E6"); //a light blue background
    stroke("black"); //black border
    strokeWeight(5); //5px border
    fill(r, g, b); //yellow fill
    ellipse(250,250,300,300);
    fill("white"); //white fill
    ellipse(180,215,15,15); //left eye
    ellipse(320,215,15,15); //right eye
    noFill();
    beginShape()
    vertex(150,330)
    bezierVertex(340, 340, 310, 340, 340, 340);
    endShape()
}
function mousePressed(){
    r = random(255);
    g = random(255);
    b = random(255);
    
} //is grows everytime a mouse is pressed