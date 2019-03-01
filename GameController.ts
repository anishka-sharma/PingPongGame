/// <reference path="Paddle.ts" />


namespace PingPongGame{
    export class GameController{
        public app: PIXI.Application;
        graphics = new PIXI.Graphics();
        constructor(){
        this.app= new PIXI.Application(800,800);
        document.body.appendChild(this.app.view);
        this.start();
        this.app.ticker.add(this.update.bind(this));
        }
        

        start(): void{}

        update(delta :number): any{}
    }
}