const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var thunderboltImage;
var manWalkingImage;

var drops = [];

var maxDrops = 100;

function preload() {

    //thunderboltImage = loadAnimation("images/thunderbolt/1.png","images/thunderbolt/2.png", "images/thunderbolt/3.png", "images/thunderbolt/4.png");
    manWalkingImage = loadAnimation("walking_1.png", "walking_2.png", "walking_3.png", "walking_4.png", "walking_5.png", "walking_6.png", "walking_7.png", "walking_8.png",);

}

function setup() {
    createCanvas(400, 800);

    var manWalking = createSprite(200, 500, 20, 300);
    manWalking.addAnimation("animation", manWalkingImage);
    engine = Engine.create();
    world = engine.world;

    for (var i = 0; i < maxDrops; i++) {
        drops.push(new Drop(random(0, 400), random(0, 400)));
    }

    umbrella = new Umbrella(200, 500);
}

function draw() {
    background("gray");
    Engine.update(engine);

    for (var i = 0; i < maxDrops; i++) {
        drops[i].update();
        drops[i].display();
    }

    umbrella.display();

    drawSprites();
}