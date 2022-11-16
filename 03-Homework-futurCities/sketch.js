let table;
var mySvg;
let drops = [];



function preload() {
  table = loadTable("future_cities_data_truncated_2.csv", "csv", "header");
  mySvg = loadImage("asset1.svg");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  for (let i = 0; i < 50; i++) {
    drops.push(new Rain(width/2, -1000, 3));
  }

  
 
}

function draw() {
  background(235,235,254);

  for (let i = 0; i < drops.length; i++) {
    let drop = drops[i];
    drop.show();
    drop.fall();
  }

  for (let i = 0; i < table.getRowCount(); i++) {
    const city = table.get(i, "current_city");
    const annualPrecipitation = table.get(i, "Annual_Precipitation");
    const futureAnnualPrecipitation = table.get(i, "future_Annual_Precipitation");

    const xPos = 80;
    const startingYPos = 40;
    const stepY = 143;
    const rectWidth = annualPrecipitation / 3;
    const rectWidth2 = futureAnnualPrecipitation / 3;
    const rectHeight = 100;

    fill(0,0,255,50);
    rect(xPos, startingYPos + (i + 1) * stepY, rectWidth, rectHeight); 
    rect(xPos, startingYPos + (i + 1) * stepY +10, rectWidth2, rectHeight); 
    push();
    fill(0,0,255);
    textSize(30);
    text(city,xPos+10,(i+1)* stepY+100);
    pop();
    // console.log(mouseY);

    imageMode(CENTER);
    image(mySvg, 300, (i + 1) * 151, 35, 52);

  

    const mouseOverBoundries = {
     
      minX: xPos,
      maxX: xPos + rectWidth, // startX + width
      minY: startingYPos + (i + 1) * stepY,
      maxY: startingYPos + (i + 1) * stepY + rectHeight, 

      
    };

    const mouseOver = isMouseOverRectangel(mouseOverBoundries);
    
    if (mouseOver) {
      // passing the two texts into the drawing function
      const labelXPos = 332;
      const labelYPos = (i + 1) * 151;

      //function to draw the label
      drawLabel(
        annualPrecipitation,
        futureAnnualPrecipitation,
        labelXPos,
        labelYPos
      );
    }
    
  }
  

  fill(0,0,255);
  textSize(20);
  text("Annual Precipitation", 80, 147, 200, 100);
  text("Future Annual Precipitation", 80, 742, 300, 100);
}

function isMouseOverRectangel(boundries){
  if(mouseX >= boundries.minX &&
    mouseX <= boundries.maxX &&
    mouseY >= boundries.minY && 
    mouseY <= boundries.maxY
    ){
      return true;
    }else{
      return false;
    }
}

function drawLabel(precipitation,futurePrecipitation,x,y){
  const textBoxSize =200;
  let textcolor = fill(0,0,255);
  textcolor;
  text(precipitation,x,y,textBoxSize,textBoxSize);
  text(precipitation,x,y+25,textBoxSize,textBoxSize);
}
console.log("code end");
    