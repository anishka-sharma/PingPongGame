/// <reference path="Paddle.ts" />
/// <reference path="Ball.ts" />
/// <reference path="PingPongGameController.ts" />

namespace EAPingPong{
    export class Dispose{

        paddle1!:Paddle;
        paddle2!:Paddle;
        ball!:Ball;
        stage:any;

        constructor(paddle1:Paddle, paddle2:Paddle, ball:Ball, stage:any){
            this.paddle1 = paddle1;
            this.paddle2 = paddle2;
            this.ball = ball;
            this.stage = stage;
        }

        remove(){
            this.stage.removeChild(this.paddle1.internalGraphics);
            this.stage.removeChild(this.paddle2.internalGraphics);
            this.stage.removeChild(this.ball.internalGraphics);
        }
    }
}