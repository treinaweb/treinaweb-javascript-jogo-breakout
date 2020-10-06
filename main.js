import {Game} from './scripts/game-engine/game.js';
import {Paddle} from './scripts/game/Paddle.js';
import {Ball} from './scripts/game/Ball.js';
import {Brick} from './scripts/game/Brick.js';
import {Score} from './scripts/game/Score.js';

Game.constructor();
Promise.all([
    Game.SoundManager.loadAll([
        {name: 'ballHit', src: './scripts/game/snd/ball-hit.mp3'}
    ]),
    Game.ImageManager.loadAll([])
])
.then(() => {
    startGame();
});



function startGame(){
    Game.start();
    let totalBricks = 0;
    const paddle = new Paddle();
    const ball = new Ball();
    const score = new Score();
   
    const brickColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    for(let y = 0; y < 7; y++){
        for(let x = 0; x < 7; x++){
            const brick = new Brick((x * 50) + 30, (y * 30) + 60, brickColors[y]);

            Game.addObject(brick);
            brick.onCollision = onBrickCollision;
            totalBricks++;
        }
    }

    Game.addObject(paddle);
    Game.addObject(ball);
    Game.addObject(score);

    ball.onBottomOut = function(){
        this.resetPosition();
        score.lifes--;
        if(score.lifes <= 0){
            score.onGameOver();
        }
    }



    function onBrickCollision(){
        this.game.removeObject(this);
        score.score += 20;
        totalBricks--;
        if(totalBricks <= 0){
            score.onGameOver();
        }
    }

    score.onGameOver = function(){
        this.isGameOver = true;
        this.game.stop();
    }


}