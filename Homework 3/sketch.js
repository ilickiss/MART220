function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  
  //--------------------BACKGROUND ELEMENTS
  //SKY
  //x, y, size
   fill (204, 255, 255)
  square(0, 0, 800);
  
  //FUJI
  //quadrilateral
  // x1, y1, x2, y2, x3, y3, x4, y4
  fill (153, 204, 255)
  quad(0, 450, 350, 200, 450, 200, 800, 450);
  
  //FUJI SNOW
  fill (255,255,255)
  quad(210, 300, 350, 200, 450, 200, 590, 300);
  
  //MID MOUNTAINS
  // x, y, width, height
  fill (0, 102, 102)
  ellipse(-200, 540, 1500, 250);
  ellipse(900, 540, 1500, 300);
  // x1, y1, x2, y2, x3, y3
  fill (0, 102,51)
  ellipse(800, 540, 900, 250);
  
  //LAKE
  // x, y, width, height
  fill (204, 229, 255)
  rect(0, 530, 800, 800);
  
  //--------------------BUILDINGS AND GREENERY
  
  //BACKGROUND BUILDINGS
  //x, y, size
  fill (224, 224, 224)
  square(330, 485, 40);
  square(400, 475, 70);
  square(500, 480, 50);
  square(570, 485, 40);
  square(630, 480, 50);
  square(730, 480, 80);
  
  //LAND
   // x, y, width, height\
  fill (0,153,76)
  ellipse(700, 530, 1300, 60);
  
  //FARTHEST TREES
  // x, y, width, height
  fill (51,102,0)
  ellipse(160, 520, 60, 25);
  fill (76,102,51)
  ellipse(140, 522, 70, 15);
  ellipse(250, 510, 60, 20);
  fill (0, 51,0)
  ellipse(215, 515, 80, 20);
  fill (76,102,51)
  ellipse(240, 525, 60, 20);
  ellipse(335, 505, 90, 25);
  fill (0, 51,0)
  ellipse(800, 515, 200, 40);
  fill (51,102,0)
  ellipse(400, 515, 200, 40);
  
  //Buildings are numbered from L to R
  
   //Building 4
    fill (192, 192, 192)
    rect(450, 490, 80, 40);
  //greenery
  fill (76,102,51)
  ellipse(600, 515, 200, 50);
  fill (51,102,0)
  ellipse(700, 520, 300, 40);
    
  
  //Building 6
    fill (192, 192, 192)
    rect(660, 490, 100, 50);
    //greenery
    fill (0, 51, 0)
    ellipse(540, 515, 200, 35);
    ellipse(650, 525, 130, 25);
    fill (76,102,51)
    ellipse(650, 535, 60, 25);
  
  //Building 5
  fill (224, 224, 224)
   rect(550, 510, 70, 30);
  //greenery
  fill (102, 204, 0)
  ellipse(540, 535, 40, 25);
  
  
  //Building 2
  fill (192, 192, 192)
  rect (260, 490, 50, 30);
  //greenery
  fill (76, 153, 0)
  ellipse(240, 525, 60, 25);
  fill (0,51,25)
  ellipse(325, 525, 90, 25);
  fill (76, 153, 0)
  ellipse(430, 525, 110, 30);
  triangle(330, 530, 340, 500, 350, 530);
  fill (102, 104, 0)
  triangle(300, 540, 310, 515, 320, 540);
  
  //foreground building 3
  fill (224, 224, 224)
  rect(350, 490, 70, 50);
  //greenery
  fill (76, 153, 0)
  ellipse(800, 540, 60, 25);
  fill (0, 51, 0)
  ellipse(430, 540, 60, 25);
  fill (76, 153, 0)
  ellipse(340, 535, 50, 30);
  ellipse(700, 540, 50, 25);
  
  //foreground building 1
  fill (224, 224, 224)
  rect(170, 500, 30, 30);
  //greenery
  fill (0, 51, 0)
  ellipse(165, 528, 40, 15);
  triangle(610, 545, 617, 525, 625, 545);
  fill (0,102,51)
  triangle(620, 547, 625, 535, 630, 547);

}
  
