const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(750, 570, 30, 30)
    stone = new Stone(400, 570, 50, 20);
    iron = new Iron(600, 550, 70, 60)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    console.log(stone.y)

    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();
    
 
}