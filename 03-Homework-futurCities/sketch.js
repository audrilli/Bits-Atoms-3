let table;
// let xPosAxis1;
const xPosAxis2 = 400;
const xPosAxis1 = 20;

function preload() {
  table = loadTable("future_cities_data_truncated.csv", "csv", "header");
}
function setup() {
  createCanvas(400, 400);
  background(100);

  print(table.getRowCount() + " total rows in table");
  print(table.getColumnCount() + " total columns in table");
  print("All precipitation:", table.getColumn("Annual_Precipitation"));

  const barMargain = 10;
  const barHeight = 30;

  for (i = 1; i < table.getRowCount(); i++) {
    const city = table.get(i, "current_city");
    const annualPrecipitation = table.get(i, "Annual_Precipitation");
    const futureAnnualPrecipitation = table.get(i, "future_Annual_Precipitation");

    const yPosition = convertPrecipitationtoPosition(annualPrecipitation);
    const xPosition = xPosAxis1;

    const futureYPosition = convertPrecipitationtoPosition(futureAnnualPrecipitation);
    const futureXPosition = xPosAxis2;

    drawLines(yPosition, annualPrecipitation);
    console.log(xPosAxis1);

    // line(10,map(table.get(i, 10), 0, 25, 800, 0),790,
    //   map(table.get(i, 10), 10, 25, 400, 400));
  }
}

function convertPrecipitationtoPosition(annualPrecipitation) {
  const position = map(annualPrecipitation, 416, 994, 400, 0);
  console.log("annualperciptation: ", annualPrecipitation, " position: ", position);
  return position;
}

function drawLines(y1, y2) {
  line(xPosAxis1, y1, xPosAxis2, y2);
}

// console.log(table);
// print(table.getColummn("selfdissim_current_future"));

// function draw() {
//   // background(100);
//   for (i = 1; i < 30; i++) {
//     line(
//       10,
//       map(table.get(i, 10), 0, 25, 800, 0),
//       790,
//       map(table.get(i, 10), 10, 25, 400, 400)
//     );
//   }
// }
