class stone{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':0.9,
            'density':12
        }
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
       
        //World.add(world, this.body);
      }
     // display(){ push();translate(this.body.position.x, this.body.position.y);pop();  }
      
}