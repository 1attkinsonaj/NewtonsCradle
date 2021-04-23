class Chain{
        constructor(p_body1, p_body2, p_offsetX, p_offsetY){
            // body1 = the Bob
            // body2 = the Roof
            // offsetX = The movement along the roof
            // offsetY = The movement along the roof
        this.offsetX=p_offsetX
        this.offsetY=p_offsetY
        var options = {
            bodyA: p_body1,
            bodyB: p_body2,
            pointB:{x:this.offsetX, y:this.offsetY}
            
        }
        this.rope = Matter.Constraint.create(options);
        World.add(world, this.rope);

    }

    display() {

        var point_A=this.rope.bodyA.position;
        var point_B=this.rope.bodyB.position;
        strokeWeight(2);

        var Anchor1X=point_A.x;
        var Anchor1Y=point_A.y;

        var Anchor2X=point_B.x+this.offsetX;
        var Anchor2Y=point_B.y+this.offsetY;
        

       line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

    }
}





        // image(this.sling1, 200, 20);
        // image(this.sling2, 170, 20);

        // if (this.sling.bodyA) {
        //     var pointA = this.sling.bodyA.position;
        //     var pointB = this.pointB;
        //     stroke(48, 22, 8);
        //     strokeWeight(4);
        //     if (pointA.x > 220) {
        //         line(pointA.x + 20, pointA.y, pointB.x + 30, pointB.y);
        //         line(pointA.x + 20, pointA.y, pointB.x - 10, pointB.y);
        //         image(this.sling3, pointA.x + 25, pointA.y - 10, 15, 30);
        //     } else {

        //         line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y);
        //         line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);
        //         image(this.sling3, pointA.x - 30, pointA.y - 10, 15, 30);





    
