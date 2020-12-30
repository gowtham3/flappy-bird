class Game {
    constructor() {
        this.player = new Player();
        this.curPipePair = new PipePair(true);
        this.pastPipePair = null;
        this.gameOver = false;
        this.score = 0;
    }

    collided() {
        return ((this.player.x + this.player.size/2 >= this.curPipePair.x) 
            && (this.player.x - this.player.size/2 <= this.curPipePair.x + this.curPipePair.width))
            && (this.player.y - this.player.size/2 <= this.curPipePair.topY + this.curPipePair.height || this.player.y + this.player.size/2 >= this.curPipePair.bottomY);
    }

    hitGround() {
        return this.player.y + this.player.size >= canvas.height;
    }

    curPipePairPassedPlayer() {
        if (this.player.x > this.curPipePair.x + this.curPipePair.width) {
            return true;
        }
        return false;
    }

    update() {

        if (!this.gameOver) {
            this.player.update();
            this.curPipePair.update();
    
            if (this.pastPipePair !== null) {
                this.pastPipePair.update();
            }
    
            if (this.curPipePairPassedPlayer()) {
                this.pastPipePair = this.curPipePair;
                this.curPipePair = new PipePair();
                this.score += 1;
            }
    
            if (this.hitGround()) {
                this.gameOver = true;
                this.velY = 0;
            }
    
            if (this.collided()) {
                this.gameOver = true;
            }
        }
    }

    show() {
        this.player.show();
        fill(0, 255, 0);
        this.curPipePair.show();
        fill(0, 0, 0);
        text(`${this.score}`, canvas.width/2, canvas.height/3);

        fill(0, 255, 0);
        if (this.pastPipePair !== null) {
            this.pastPipePair.show();
        }
    }

    handleKeyPress(key) {
        switch(key) {
            case ' ':
                if (!this.gameOver) {
                    this.player.flap();
                } else {
                    
                }
                break;
        }
    }
}
