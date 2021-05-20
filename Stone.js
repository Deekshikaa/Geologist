class Stone{

    constructor(x,y,width,height){
        var soptions= {
            restitution: 0.8,
            friction: 0.9,
            density: 12,
        }
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;

        this.stone = Bodies.rectangle(this.x, this.y, this.width, this.height, soptions);
        World.add(world, this.stone);
    }

    display(){
        var pos = this.stone.position;		
        push();
        translate(pos.x, pos.y)
        strokeWeight(4);
        stroke("black");
        fill("brown");
        rectMode(CENTER)
        rect(0,0, this.width, this.height);
        pop();
    }

}