class Drop {
    constructor(x, y) {
        var options = {
            friction: 0.1
        }
        this.rain = Bodies.circle(x, y, 4, options)
        this.radius = 4
        World.add(world, this.rain)
    }
    display() {
        if (this.rain.position.y > height) {
            Matter.Body.setPosition(this.rain, { x: random(0, 400), y: random(0, 400) })
        }
        var pos = this.rain.position;
        translate(pos.x, pos.y);
        ellipseMode(CENTER)
        ellipse(0, 0, 10, 10)

    }

    update() {
        if (this.rain.position.y > height) {
            Matter.Body.setPosition(this.rain, { x: random(0, 400), y: random(0, 400) })
        }
    }
}
