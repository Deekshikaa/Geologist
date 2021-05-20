class Iron{

    constructor(x,y,width,height){
        var roptions= {
            restitution: 0.8,
            friction: 3,
            density: 30,
        }
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;

        this.iron = Bodies.rectangle(this.x, this.y, this.width, this.height, roptions);
        World.add(world, this.iron);
    }

    display(){
        var pos = this.iron.position;
        push();
        translate(pos.x, pos.y)
        rectMode(CENTER);
        strokeWeight(4);
        stroke("red");
        fill("black");
        rect(0, 0, this.width, this.height);
        pop();
    }

}