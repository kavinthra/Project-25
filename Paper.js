class Paper{
    constructor(x,y,r){
        var options = {
            restitution: 0.4,
            friction:0.4,
            density:1.0
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        this.image=loadImage("./ball.png.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill(0,255,0);
        //ellipse(0,0,this.r);
        imageMode(CENTER);
		image(this.image, 0,0,this.r, this.r)
        pop();
    }
}