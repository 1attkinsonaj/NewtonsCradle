class Bob {
   
    constructor(p_x,p_y, p_radius) {
      var options = {
        'restitution':1.3,
        'friction':0,
        'density':6
      }
      
      this.body = Bodies.circle(p_x,p_y, p_radius/2,options);
      this.rad2 = p_radius;
      this.x=p_x;
      this.y=p_y;
      
      World.add(world, this.body);
     
    }
    display(){
      //var pos =this.body.position;
      //var rad2 = this.body.p_radius;

   
      fill(160,22,84);
     circle(this.body.position.x , this.body.position.y,this.rad2);
     //rectMode(CENTER);
      
     //ellipse(pos.x, pos.y,this.rad2, this.rad2);
     
  
    }
  };