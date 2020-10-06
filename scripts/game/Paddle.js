import { Game } from '../game-engine/game.js';
import { GameObject } from '../game-engine/gameObject.js';

export class Paddle extends GameObject{

    constructor(){
        super();
        this.speed = 5;
        this.width = 100;
        this.height = 20;
        this.bottom = this.game.canvas.bottom - 10;
        this.centerX = this.game.canvas.center.x;
    }

    goLeft(){
        if(this.left > this.game.canvas.left){
            this.x -= this.speed;
        }
    }

    goRight(){
        if(this.right < this.game.canvas.right){
            this.x += this.speed;
        }
    }

    update(){
        if(this.input.onKey(this.input.key.LEFT)){
            this.goLeft();
        }
        if(this.input.onKey(this.input.key.RIGHT)){
            this.goRight();
        }
    }


    draw(){
        this.drawing.drawRect(this.x, this.y, this.width, this.height);
    }

}