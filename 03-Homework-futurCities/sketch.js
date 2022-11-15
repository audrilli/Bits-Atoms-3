let table;
var mySvg;

function preload() {
  table = loadTable("future_cities_data_truncated_2.csv", "csv", "header");
  mySvg = loadImage("asset1.svg");
}
function setup() {
  createCanvas(800, 800);
  noStroke();

  // print(table.getRowCount() + " total rows in table");
  // print(table.getColumnCount() + " total columns in table");
  // print("All precipitation:", table.getColumn("Annual_Precipitation"));
  // print("future Annual Precipitation", table.getColumn("future_Annual_Precipitation"));

  // const barMargain = 10;
  // const barHeight = 30;

  // for (let i = 0; i < table.getRowCount(); i++) {
  //   // const city = table.get(i, "current_city");
  //   const annualPrecipitation = table.get(i, "Annual_Precipitation");
  //   const futureAnnualPrecipitation = table.get(i, "future_Annual_Precipitation");

  //   fill(0,0,255,50);
  //   rect(40, height/2+i*mouseY,annualPrecipitation/3,40);
  //   fill(0,0,255,20);
  //   rect(20, height/2+i*20,futureAnnualPrecipitation/3,40);

  //   console.log(annualPrecipitation);
  //   console.log(futureAnnualPrecipitation);
  //   console.log(i);
}

console.log(table);

//rect(width/2, height/2,annualPrecipitation,10);

console.log("out of loop");
// rectMode(CENTER);

function draw() {
  
  background(255);
  for (let i = 0; i < table.getRowCount(); i++) {
    const city = table.get(i, "current_city");
    const annualPrecipitation = table.get(i, "Annual_Precipitation");
    const futureAnnualPrecipitation = table.get(
      i,
      "future_Annual_Precipitation"
    );

    fill(100);
    textSize(40);
    text(city, 80, (i + 1) * 144, (i + 1) * 144);
    fill(0, 0, 255, 50);
    rect(80, 40 + (i + 1) * 143, annualPrecipitation / 3, 100);
    fill(0, 0, 255, 20);
    rect(80, 60 + (i + 1) * 143, futureAnnualPrecipitation / 3, 100);

    imageMode(CENTER);
    image(mySvg, 300, (i + 1) * 151, 35, 52);

    // console.log(annualPrecipitation);
    // console.log(futureAnnualPrecipitation);
    // console.log(city);
    // console.log(i);
    console.log("mouseX:", mouseX);
    console.log("mouseY:", mouseY);
  }

  fill(100);
  textSize(20);
  text("Annual Precipitation", 80, 117, 200, 100);
  text("Future Annual Precipitation", 80, 742, 300, 100);

  labels();

  
}

//function for the labels
function labels() {
  for (let i = 0; i < table.getRowCount(); i++) {
    const annualPrecipitation = table.get(i, "Annual_Precipitation");
    const futureAnnualPrecipitation = table.get(
      i,
      "future_Annual_Precipitation");
  //   fill(100);
  //   textSize(20);
  //   text(annualPrecipitation,332,(i+1)*151,200,200);
  //   text(futureAnnualPrecipitation,332,(i+1)*151 +25,200,200);
  // }
if((mouseX>284)&&(mouseX<315)&&(mouseY>128)&&(mouseY<175)){
  fill(0,0,100,100);
    textSize(20);
    text(annualPrecipitation,332,(i+1)*151,200,200);
    text(futureAnnualPrecipitation,332,(i+1)*151 +25,200,200);
  
}else{
  fill(0,0,100,0);
}
}
}