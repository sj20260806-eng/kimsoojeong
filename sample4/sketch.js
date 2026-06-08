function setup() {
  createCanvas(600,400);
  saveGif('20260806_김수정_애니메이션_과제4',10);
}

function draw() {
  background(193,243,255);
  
  noStroke();
  
  let sunSize=120+sin(frameCount*0.05)*10;
  fill(255,230,100);
  ellipse(500,80,sunSize,sunSize);
  fill(255,204,0);
  ellipse(500,80,80,80);
 
  fill(255);
  let cloud1=frameCount%660;
  ellipse(cloud1,80,60,40);
  ellipse(cloud1+30,70,70,50);
  ellipse(cloud1+60,80,60,40);
  
  let cloud2=(frameCount+200)%680;
  ellipse(cloud2,100,60,40);
  ellipse(cloud2+30,90,70,50);
  ellipse(cloud2+60,100,60,40);
  
  let grassColor=(sin(frameCount*0.02)+1)/2;
  let brightGrass=color(100,200,100);
  let darkGrass=color(80,150,80);
  fill(lerpColor(brightGrass,darkGrass,grassColor));
  rect(0,300,600,100);
  
  fill(200,180,140);
  rect(290,300,30,100);
  
  fill(255,253,209);
  rect(200,200,200,100);

  fill(251,78,35);
  triangle(200,200,300,140,400,200);

  fill(117,78,10);
  rect(280,240,40,60);
  
  fill(120,70,40);
  rect(120,230,20,70);

  fill(110,85,60);
  rect(120,235,18,65);

  fill(80, 140, 90);
  ellipse(129,205,55,55);
  ellipse(110,222,42,42);
  ellipse(148,222,42,42);
  
  fill(110,85,60);
  rect(450,235,18,65);
  
  fill(80,140,90);
  ellipse(459,205,55,55);
  ellipse(440,222,42,42);
  ellipse(478,222,42,42);
  
}
