class Player {
    constructor() {
        this.x = canvas.width/2;
        this.y = canvas.height/2;
        this.velX = 8;
        this.velY = 0;
        this.size = 40;
        this.gravity = 1;
        this.flapDistance = 15;
    }

    show() {
        fill(255, 255, 0);
        ellipse(this.x, this.y, this.size, this.size);
        // rect(this.x, this.y, this.size, this.size);
    }

    update() {
        this.velY += this.gravity;
        this.y += this.velY;
    }

    flap() {
        this.velY = -this.flapDistance;
    }
}

