class Sling {
    constructor(bodyA,pointB) {
      var options = {
         bodyA:bodyA,
         pointB:pointB,
         stiffness:1.2,
         length:250


          
      }
      this.pointB=pointB;
      this.sling=

      
      World.add(world, this.body);
    }
    display(){
      var angle =this.body.angle;
      push();
      translate(this.body.position.x,this.body.position.y)
      rotate(angle);

      ellipse(0, 0, this.width, this.height);
      pop()
    }
  };
