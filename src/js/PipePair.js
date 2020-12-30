class PipePair {
    constructor(isFirst=false) {
        const {topY, bottomY} = this.getRandomYs();
        this.pipe1 = new Pipe(isFirst ? 0: topY);
        this.pipe2 = new Pipe(isFirst ? 600: bottomY);
        this.width = this.pipe1.width;
        this.height = this.pipe1.height;
        this.topY = this.pipe1.y;
        this.bottomY = this.pipe2.y;
    }

    update() {
        this.pipe1.update();
        this.pipe2.update();
        this.x = this.pipe1.x;
    }

    show() {
        this.pipe1.show();
        this.pipe2.show();
    }

    getRandomYs() {
        const randomY = this.getRandomInteger(3) * 100;

        return {
            topY: -randomY,
            bottomY: 600 - randomY
        }
    }

    getRandomInteger(max) {
        return Math.floor(Math.random() * (max) );
    }
}
