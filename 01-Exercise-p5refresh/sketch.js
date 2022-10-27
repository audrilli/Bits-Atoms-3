let x;
let y;
let a;
let data  = [4,10,30,7]
function setup() {
  createCanvas(windowWidth, windowWidth);
}

function draw() {
  background(220);
  //rectangles = rect(x,y,100,100);

  for (let i = 0; i < 5; i++) {
    rect(i *20+50,windowHeight/2,10,(data[i]+a));
  fill(0);
  noStroke();
  console.log(i);
  }
  if(mouseIsPressed){
    a =400;
  }else{
    a = 0;
  }
}

//   x = mouseX;
//   if (x >= windowHeight / 4) {
//     fill(0 + x/2);
//   } else {
//     fill(0);
//   }
//   console.log(x);
// }
