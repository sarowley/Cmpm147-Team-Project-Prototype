// Globals
let myInstance;
let canvasContainer;

let geneA;
let geneB;
let geneC;

//pattern type for person on left
let patternTypeA;
//pattern type for person on right
let patternTypeB;
//bool check for child
let child = false;
let patternTypeC;

// setup() function is called once when the program starts
function setup() {
  canvasContainer = $("#canvas-container");
  let canvas = createCanvas(width * 6, height * 6.5);
  canvas.parent("canvas-container");

  //make button to change shirt to circles
  //left circles
  circleButtonA = createButton("Person 1 Circle");
  circleButtonA.mousePressed(circlePatternA);

  //make button to change shirt to squares
  //left squares
  squareButtonA = createButton("Person 1 Square");
  squareButtonA.mousePressed(squaresPatternA);

  //make button to change shirt to circles
  //right circles
  circleButtonB = createButton("Person 2 Circle");
  circleButtonB.mousePressed(circlePatternB);

  //make button to change shirt to squares
  //right squares
  squareButtonB = createButton("Person 2 Square");
  squareButtonB.mousePressed(squaresPatternB);

  //add button to make kid
  generateButton = createButton("Generate Child");
  generateButton.mousePressed(generateKid);

  //add reset button
  resetButton = createButton("Reset Data");
  resetButton.mousePressed(wipeData);
}

//left circle pattern
function circlePatternA() {
  console.log("circle patternA");
  patternTypeA = 0;
  loop();
}

//left square pattern
function squaresPatternA() {
  console.log("squares patternA");
  patternTypeA = 1;
  loop();
}

//right circle pattern
function circlePatternB() {
  console.log("circle patternB");
  patternTypeB = 0;
  loop();
}

//right square pattern
function squaresPatternB() {
  console.log("squares patternB");
  patternTypeB = 1;
  loop();
}

//generate the child
function generateKid() {
  console.log("generate kid");
  patternTypeC = patternTypeA + patternTypeB;
  child = true;
  loop();
}

//delete/reset
function wipeData() {
  console.log("dataWiped");
  patternTypeC = NaN;
  patternTypeB = NaN;
  patternTypeA = NaN;
  child = false;
  loop();
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
  noLoop();

  background(220);

  //doing the left person
  imgA = createGraphics(width, height);
  imgA.noFill();
  imgA.translate(100, 100);

  //this is the pattern switcher

  switch (patternTypeA) {
    case 0:
      //this is the circle pattern
      for (var i = 0; i < 1000; i++) {
        //where the circles are placed
        var circleX = random(2, 500);
        var circleY = random(2, 500);
        //size of circles are the second two numbers
        imgA.ellipse(circleX, circleY, 100, 100);
      }
      break;

    case 1:
      //pattern for circle of rectangles
      for (let i = 0; i < 1000; i++) {
        imgA.rotate(random(360));
        //random color
        imgA.fill(random(255), random(255), random(255));
        //first two of these numbers is now big middle hole is
        //second two numbers is size of rect/circle
        imgA.rect(0, 0, 1000, 10);
      }
      break;

    default:
      console.log("it defaulted");
  }

  mkA = createGraphics(width, height);
  mkA.translate(75, 75);
  //begin making the shirt shape
  mkA.beginShape();
  mkA.strokeWeight(10);
  //point for top left shirt
  mkA.vertex(100, 100);
  //points for left sleeve
  mkA.vertex(40, 180);
  mkA.vertex(50, 200);
  mkA.vertex(100, 140);
  //point for bottom left of shirt
  mkA.vertex(100, 300);
  //point for bottom right of shirt
  mkA.vertex(200, 300);
  //points for right sleeve
  mkA.vertex(200, 140);
  mkA.vertex(250, 200);
  mkA.vertex(260, 180);
  //point for top right of shirt
  mkA.vertex(200, 100);
  mkA.endShape();
  imgAClone = imgA.get();
  imgAClone.mask(mkA.get());

  //the two numbers here is what moves the pattern
  console.log(width)
  shirtA = image(imgAClone, width/12, height/13);
  //shirtA = image(imgAClone, 50, 50);

  //doing the right person
  imgB = createGraphics(width, height);
  imgB.noFill();
  imgB.translate(100, 100);

  //this is the pattern switcher

  switch (patternTypeB) {
    case 0:
      //this is the circle pattern
      for (var i = 0; i < 1000; i++) {
        //where the circles are placed
        var circleX = random(2, 500);
        var circleY = random(2, 500);
        //size of circles are the second two numbers
        imgB.ellipse(circleX, circleY, 100, 100);
      }
      break;

    case 1:
      //pattern for circle of rectangles
      for (let i = 0; i < 1000; i++) {
        imgB.rotate(random(360));
        //random color
        imgB.fill(random(255), random(255), random(255));
        //first two of these numbers is now big middle hole is
        //second two numbers is size of rect/circle
        imgB.rect(0, 0, 1000, 10);
      }
      break;

    default:
      console.log("it defaulted");
  }

  mkB = createGraphics(width, height);
  mkB.translate(75, 75);
  //begin making the shirt shape
  mkB.beginShape();
  mkB.strokeWeight(10);
  //point for top left shirt
  mkB.vertex(100, 100);
  //points for left sleeve
  mkB.vertex(40, 180);
  mkB.vertex(50, 200);
  mkB.vertex(100, 140);
  //point for bottom left of shirt
  mkB.vertex(100, 300);
  //point for bottom right of shirt
  mkB.vertex(200, 300);
  //points for right sleeve
  mkB.vertex(200, 140);
  mkB.vertex(250, 200);
  mkB.vertex(260, 180);
  //point for top right of shirt
  mkB.vertex(200, 100);
  mkB.endShape();
  imgBClone = imgB.get();
  imgBClone.mask(mkB.get());

  //the two numbers here is what moves the pattern
  image(imgBClone, 350, 50);

  //making the left head
  fill("white");
  circle(160, 100, 50);

  //making the right head
  fill("white");
  circle(460, 100, 50);

  //making the left pants
  beginShape();
  fill("blue");
  noStroke();
  //point for top left
  vertex(135, 250);
  //point for top right
  vertex(190, 250);
  //point for bottom right
  vertex(190, 360);
  //point for middle
  vertex(162.5, 280);
  //point for bottom left
  vertex(135, 360);
  endShape();

  //making the right pants
  beginShape();
  fill("blue");
  noStroke();
  //point for top left
  vertex(435, 250);
  //point for top right
  vertex(490, 250);
  //point for bottom right
  vertex(490, 360);
  //point for middle
  vertex(462.5, 280);
  //point for bottom left
  vertex(435, 360);
  endShape();

  //draw the child
  if (child) {
    //do the gene math
    //left gene (add things to this just like string concatination)
    geneA = patternTypeA;
    //right gene
    geneB = patternTypeB;
    //child gene
    geneC = patternTypeA + patternTypeB;

    //adding genes to screen
    fill("black");
    text("geneA: " + geneA, 50, 500);
    text("geneB: " + geneB, 50, 515);
    text("geneC: " + geneC, 50, 530);

    //adding the childs head
    fill("white");
    circle(307, 400, 50);
    //adding the child pants
    beginShape();
    fill("blue");
    noStroke();
    //point for top left
    vertex(280, 550);
    //point for top right
    vertex(335, 550);
    //point for bottom right
    vertex(335, 660);
    //point for middle
    vertex(307.5, 580);
    //point for bottom left
    vertex(280, 660);
    endShape();

    //doing the left person
    imgC = createGraphics(width, height);
    imgC.noFill();
    imgC.translate(100, 100);

    //this is the pattern switcher

    switch (patternTypeC) {
      case 0:
        //this is the circle pattern
        console.log("child circle");
        for (var i = 0; i < 1000; i++) {
          //where the circles are placed
          var circleX = random(2, 500);
          var circleY = random(2, 500);
          //size of circles are the second two numbers
          imgC.ellipse(circleX, circleY, 100, 100);
        }
        break;

      case 1:
        //this is the half pattern
        randNum = floor(random(1, 4));
        console.log("child half");
        if (randNum == 1) {
          for (var i = 0; i < 1000; i++) {
            //where the circles are placed
            var circleX = random(2, 500);
            var circleY = random(2, 500);
            //size of circles are the second two numbers
            imgC.ellipse(circleX, circleY, 100, 100);
          }
        }
        if (randNum == 2) {
          for (let i = 0; i < 1000; i++) {
            imgC.rotate(random(360));
            //random color
            imgC.fill(random(255), random(255), random(255));
            //first two of these numbers is now big middle hole is
            //second two numbers is size of rect/circle
            imgC.rect(0, 0, 1000, 10);
          }
        }
        if (randNum == 3) {
          for (var i = 0; i < 5000; i++) {
            //where the circles are placed
            imgC.fill(random(255), random(255), random(255));
            var circleX = random(-100, 600);
            var circleY = random(-100, 600);
            //size of circles are the second two numbers
            imgC.ellipse(circleX, circleY, 30, 30);
          }
        }
        break;

      case 2:
        //pattern for circle of rectangles
        console.log("child square");
        for (let i = 0; i < 1000; i++) {
          imgC.rotate(random(360));
          //random color
          imgC.fill(random(255), random(255), random(255));
          //first two of these numbers is now big middle hole is
          //second two numbers is size of rect/circle
          imgC.rect(0, 0, 1000, 10);
        }
        break;

      default:
        console.log("it defaulted");
    }

    mkC = createGraphics(width, height);
    mkC.translate(75, 75);
    //begin making the shirt shape
    mkC.beginShape();
    mkC.strokeWeight(10);
    //point for top left shirt
    mkC.vertex(100, 100);
    //points for left sleeve
    mkC.vertex(40, 180);
    mkC.vertex(50, 200);
    mkC.vertex(100, 140);
    //point for bottom left of shirt
    mkC.vertex(100, 300);
    //point for bottom right of shirt
    mkC.vertex(200, 300);
    //points for right sleeve
    mkC.vertex(200, 140);
    mkC.vertex(250, 200);
    mkC.vertex(260, 180);
    //point for top right of shirt
    mkC.vertex(200, 100);
    mkC.endShape();
    imgCClone = imgC.get();
    imgCClone.mask(mkC.get());

    //the two numbers here is what moves the pattern
    image(imgCClone, 195, 350);
  }
}
