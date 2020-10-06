import {Game} from './scripts/game-engine/game.js';
import {Paddle} from './scripts/game/Paddle.js';
import {Ball} from './scripts/game/Ball.js';

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

    const paddle = new Paddle();
    const ball = new Ball();

    Game.addObject(paddle);
    Game.addObject(ball);

    ball.onBottomOut = function(){
        this.resetPosition();
    }


}