let game;

function setup() {
    window.canvas = createCanvas(600, 800);

    game = new Game();
    textSize(50);

    // pipes = new PipePair(true);
    // pipes2 = new PipePair(false, pipes);
    // pipes2.setX(1.5 * canvas.width + pipes2.topPipe.width / 2);
  }

  function draw() {
    background(220);
    game.update();
    game.show();

    //   background(135, 206, 250);
  }

  function keyPressed() {
      if (game.gameOver) {
          switch(key) {
              case 'n':
                game = new Game();
                break;
          }
      } else {
        game.handleKeyPress(key);
      }
  }
