


 class Rain {
   constructor(x,y,speed) {
      this.x = random(0,windowWidth);
      this.y = y;
      this.speed = random(3,5);
   }
   
   fall() {
    this.y += this.speed;
   }
   show(){
      for(let i=0;i<=100;i++){
      //  this.x = random(0,windowWidth);
      //    this.y = random(0,height);
      push();
      stroke(0,0,255);
      line(this.x,this.y,this.x,this.y+10)
      
      if (this.y > height){
         this.y= random(0,-height);
      }
      pop();
   }
   
 }
}