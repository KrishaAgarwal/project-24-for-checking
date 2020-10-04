class Paper {
    constructor(x,y){
        var options ={
            isStatic: true,
            restition : 0.3,
            friction : 0.5,
            destiny : 1.2
        }

       this.body = Bodies.circle(x,y,10,options);
       this.radius = 10;       
       World.add(world, this.body);
    }    

    display(){
      var pos =this.body.position;
      push();
      ellipseMode(RADIUS);
      fill("red");
      ellipse(pos.x, pos.y, this.radius);
      pop();
    }
}


    
    