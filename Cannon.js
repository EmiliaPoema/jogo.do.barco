class Cannon{
    constructor(x,y,width,height,angle){
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.angle=angle;
    }

 
    display(){
     if (keyIsDown(RIGHT_ARROW)&& this.angle< 0.5) {
    this.angle+=0.2;
        }
     if (keyIsDown(LEFT_ARROW)&& this.angle> -0.5) {
     this.angle-=0.2;
       }        
    fill("#676e6a");
     push();
    translate(this.x,this.y);
    rotate(this.angle);
    rect(-10,+15,this.width,this.height);
    pop();
    arc(this.x-25,this.y+90,80,70,PI,TWO_PI);
    noFill();
    }
    }