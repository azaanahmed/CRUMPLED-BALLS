class paper {
    constructor(x, y) {
      var options = {
        'density':1.2,
        'friction': 0,
        'restitution':0.3,
      };
      this.image=loadImage("paper.png")
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 80;
      this.height = 40;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('black')
      fill('black')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  