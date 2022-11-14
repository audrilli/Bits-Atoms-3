let table;

function preload() {
  table = loadTable("future_cities_data_truncated_2.csv", "csv", "header");
}
function setup() {
  createCanvas(400, 400);
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
    text(city, 40, i*90);
    fill(0, 0, 255, 50);
    rect(40, 40 + i * 72, annualPrecipitation / 3, 40);
    fill(0, 0, 255, 20);
    rect(40, 60 + i * 72, futureAnnualPrecipitation / 3, 40);

    console.log(annualPrecipitation);
    console.log(futureAnnualPrecipitation);
    console.log(city);
    console.log(i);
    console.log(mouseY);
  }
}
