class Paddle {
  constructor(x, y, w, h) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.width = w;
    this.height = h;
  }
  
  render() {
    image(DuckTable, this.pos.x - 6, this.pos.y, DuckTable.width*0.28, DuckTable.height*0.3);
    //push();
    //strokeWeight(3);
    //stroke("cadetblue");
    //fill("greenyellow");
    //rectMode(CENTER);
    //rect(this.pos.x, this.pos.y, this.width, this.height);
    //pop();
  }
  
  update() {
    this.pos.add(this.vel);
    
    if (this.pos.x > width + this.width / 2)  {
      this.pos.x = -this.width / 2;
    } else if (this.pos.x < -this.width / 2) {
      this.pos.x = width + this.width / 2;
    }
  }
  
  setDir(dir) {
    this.vel.set(dir * map(dist(0,mouseX, 0, width/2), 0, width/2, 1, 9), 0);  
  }
  
  reset() {
    this.pos.x = width / 2;
  }
  
 }