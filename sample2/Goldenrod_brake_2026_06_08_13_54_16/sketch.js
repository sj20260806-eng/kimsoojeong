function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255, 250, 194);
  
  noStroke();
  
  fill(51, 10, 10);
  ellipse(300, 120, 280, 180);
  
  ellipse(180, 140, 75, 75);
  ellipse(175, 195, 75, 75);
  ellipse(170, 250, 75, 75);
  ellipse(175, 305, 75, 75);
  ellipse(185, 355, 75, 75);

  ellipse(420, 140, 75, 75);
  ellipse(425, 195, 75, 75);
  ellipse(430, 250, 75, 75);
  ellipse(425, 305, 75, 75);
  ellipse(415, 355, 75, 75);

  rect(190, 130, 220, 250);

  fill(250, 222, 206);
  rect(275, 310, 50, 40);

  fill(171, 232, 247);
  rect(150, 340, 300, 80, 50, 50, 0, 0);
  
  fill(255, 222, 206);
  ellipse(185, 215, 30, 40); 
  ellipse(415, 215, 30, 40); 
  fill(229, 243, 246); 
  ellipse(185, 230, 6, 6);   
  ellipse(415, 230, 6, 6);

  fill(255, 222, 206);
  ellipse(300, 205, 230, 230);


  fill(51, 10, 10);
  rect(185, 125, 230, 55); 
  arc(300, 135, 240, 140, PI, TWO_PI);
  stroke(100, 60, 40);
  strokeWeight(2);
  line(245, 195, 275, 195);
  line(325, 195, 355, 195);
  
  noStroke();
  fill(40);
  ellipse(260, 225, 22, 22);
  ellipse(340, 225, 22, 22);

  fill(60);
  ellipse(245, 235, 3, 3);
  
  fill(245, 205, 185);
  ellipse(300, 265, 16, 16);

  fill(255, 182, 193, 150);
  ellipse(235, 275, 35, 18);
  ellipse(365, 275, 35, 18);

  stroke(255, 140, 150);
  strokeWeight(4);
  noFill();
  arc(300, 300, 60, 20, 0.2, 2.9);
}