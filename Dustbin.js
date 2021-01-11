class Dustbin {
    constructor(x,y){
       this.x=x;
       this.y=y;
       this.dustbinWidth=200;
       this.dustbinHeight=100;
       this.thickness=15;
       this.angle=0;
       this.image=loadImage("./dustbin.png.png");
       
       this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
       this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
       
		Matter.Body.setAngle(this.leftWallBody, this.angle);
		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);
    }

    display(){
        var bottomPos = this.bottomBody.position;
        var leftPos =  this.leftWallBody.position;
        var rightPos = this.rightWallBody.position;

        push();
        translate(bottomPos.x,bottomPos.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        imageMode(CENTER);
		image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight);
       // rect(0,0,this.dustbinWidth,this.thickness);
        pop();
        
        push();
        translate(leftPos.x,leftPos.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        rotate(this.angle);
       // rect(0,0,this.thickness, this.dustbinHeight);
        pop();

        push();
        translate(rightPos.x,rightPos.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        rotate(-1*this.angle);
       // rect(0,0,this.thickness, this.dustbinHeight);
        pop();

        
    }

    
}