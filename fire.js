class Fire {
  constructor(){
  this.x = random(0,500);
    this.y = random(0,500);
    this.z = random(1, 5);
    
  }

display(){
  
     if(frameCount%5 == 0 ) {
   push();
  noStroke();
  fill(255, 255, 255,255);
  ellipse(this.x,this.y,this.z);
  pop();
  }   
}
}

  