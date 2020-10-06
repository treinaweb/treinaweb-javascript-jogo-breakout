import { GameObject } from '../game-engine/gameObject.js';

export class Ball extends GameObject{
    constructor(){
        super();
        this.speed = 5;
        this.size = 10;
        this.width = this.height = this.size;
        
        this.resetPosition();
    }

    randomDirection(){
        return Math.random() * 100 > 50 ? 1 : -1;
    }

    resetPosition(){
        const speed = this.speed;
        this.speed = 0;
        this.xDirection = this.randomDirection();
        this.yDirection = -1;
        this.centerX = this.game.canvas.center.x;
        this.centerY = this.game.canvas.bottom - 50;
        setTimeout(() => {
            this.speed = speed;
        }, 500)
    }

    invertX(){
        this.xDirection *= -1;
        //this.game.SoundManager.play('ballHit');
    }

    invertY(){
        this.yDirection *= -1;
        //this.game.SoundManager.play('ballHit');
    }

    goUp(){
        if(this.top > this.game.canvas.top){
            this.y -= this.speed;
        }else{
            this.invertY();
        }
    }

    goDown(){
        if(this.bottom < this.game.canvas.bottom){
            this.y += this.speed;
        }else{
            this.invertY();
            this.onBottomOut();
        }
    }

    goLeft(){
        if(this.left > this.game.canvas.left){
            this.x -= this.speed;
        }else{
            this.invertX();
        }
    }

    goRight(){
        if(this.right < this.game.canvas.right){
            this.x += this.speed;
        }else{
            this.invertX();
        }
    }

    update(){
        if(this.xDirection > 0){
            this.goRight();
        }else{
            this.goLeft();
        }

        if(this.yDirection > 0){
            this.goDown();
        }else{
            this.goUp();
        }

    }

    onCollision(){
        this.invertY();
    }

    draw(){
        this.drawing.drawCircle(this.center.x, this.center.y, this.size);
    }

    onBottomOut(){}
}