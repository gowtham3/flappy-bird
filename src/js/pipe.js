class Pipe {
    constructor(y) {
        this.x = canvas.width;
        this.width = 100;
        this.height = 400;
        this.y = y;
    }

    update() {
        this.x -= 8;
    }

    show() {
        rect(this.x, this.y, this.width, this.height);
    }
}
 