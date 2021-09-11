class Umbrella {
    contructor(x, y) {
        var options = {
            isStatic: true
        }
        this.image = loadImage("walking_1.png")
        this.body = Bodies.circle(x, y, 50, options)
        this.radius = 50
        World.add(world, this.body)
    }

    diaplay() {
        var pos = this.body.position
        image(this.image, pos.x, pos.y, 100, 100)
    }
}