class Boat{
constructor(x,y,width,heigth,boatPos){
 var options={
    restution:0.8,
    fiction:1,
    density:1
 }
 this.width=width;
 this.heigth=heigth;
 this.boatPosition=boatPos;
 this.body=Bodies.rectangle(x,y.width,heigth,boatPos,options);
 this.image=loadImage("assets/boat.png");
 World.add(world,this.body);
 

 
    }
display(){
var angle=this.body.angle;
var pos=this.body.position;
push();
translate(pos.x,pos.y);
rotate(angle);
imageMode(CENTER);
image(this.image,0,this.boatPosition,this.width,this.heigth)
noTint()
pop();

}
}