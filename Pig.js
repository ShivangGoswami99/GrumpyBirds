class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    //visible
    this.Visiblity=255;
  }
  display(){
    //log the speed
    console.log(this.body.speed);
    //if the speed is less than 3
    if(this.body.speed < 3){
      //inherit properties
      super.display();
    }
    else{
      //remove pig outta here
      World.remove(world,this.body);
      //push pop
      push();
      //visibility equals to visibilty -5
      this.Visiblity=this.Visiblity-5;
      //to make it disappear slowly
      tint(255,this.Visiblity);
      //the image properties
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
      }
      
  }
};