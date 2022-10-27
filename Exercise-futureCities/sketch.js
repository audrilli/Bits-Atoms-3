let table;

function preload() {
  table = loadTable("future_cities_data.csv", "csv", "header");
}
function setup() {
  createCanvas(400, 400);
  // console.log(table);
  print(table.getColumn("selfdissim_current_future"));
}

function draw() {
  background(100);
  for(i= 1;i<30; i++){
    line(10, map(table.get(i,10),0,25,800,0),790,map(table.get(i,10),10,25,800,0));
  }
}
