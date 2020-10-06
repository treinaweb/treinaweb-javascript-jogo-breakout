import {Game} from './scripts/game-engine/game.js';
import {Paddle} from './scripts/game/Paddle.js';

Game.constructor();
Promise.all([
    Game.SoundManager.loadAll([]),
    Game.ImageManager.loadAll([])
])
.then(() => {
    startGame();
});



function startGame(){
    Game.start();

    const paddle = new Paddle();

    Game.addObject(paddle);


}