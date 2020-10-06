import { GameObject } from '../game-engine/gameObject.js';

export class Brick extends GameObject{
    constructor(x, y, color = 'white'){
        super(x, y, 40, 15);
        this.color = color;
    }

    draw(){
        this.drawing.drawRect(this.x, this.y, this.width, this.height, this.color);
    }
}