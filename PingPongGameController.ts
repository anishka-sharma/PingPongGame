/// <reference path="Ball.ts" />
/// <reference path="Paddle.ts" />
/// <reference path="GameController.ts" />



namespace PingPongGame{
    export class PingPongGameController extends GameController {
        public paddle1!: Paddle;
        public paddle2!: Paddle;
        public ball!: Ball;
        public moveVelocityX:number = 2;
        public moveVelocityY:number = 2;
        public boundTop!: Boundaries;
        public boundRight!: Boundaries;
        public boundBottom!: Boundaries;
        public boundLeft!: Boundaries;

        start(){
            this.paddle1 = new Paddle(0,0,10,100,this.app);
            this.paddle2 = new Paddle(790,0,10,100,this.app);
            this.ball = new Ball(400,400,10,this.app);
            this.boundTop = new Boundaries(800,0,800,0,this.app);
            this.boundRight = new Boundaries(800,0,0,-800,this.app);
            this.boundBottom = new Boundaries(800,-800,0,0,this.app);
            this.boundLeft = new Boundaries(0,-800,2,800,this.app);
        }
        update (delta :number) {
                   

                    let _this = this; 
                    //move ball 
                    moveBall();
                    
                    function moveBall(): any {
                    _this.ball.moveTo(_this.moveVelocityX, _this.moveVelocityY);
                    }
                    
                    
                    //move paddle 
                    movePaddle();
                    function movePaddle() {
                    movePaddle1();
                    movePaddle2();
                    
                    function movePaddle1() {
                    _this.paddle1.moveTo(_this.paddle1.x, _this.moveVelocityY);
                    }
                    
                    
                    function movePaddle2() {
                    // let y2 = _this.paddle2.y;
                    let x1 = _this.app.renderer.plugins.interaction.mouse.global.x;
                    let y1 = _this.app.renderer.plugins.interaction.mouse.global.y;
                    if(y1 < 0)
                    y1 = 0 + _this.paddle2.height / 2;
                    if(y1 > _this.app.screen.height)
                    y1 = _this.app.screen.height-_this.paddle2.height/2;
                    
                    _this.paddle2.y = y1;
                    _this.paddle2.graphics.position.y = y1;
                    
                    // _this.paddle2.moveTo(_this.paddle2.x, y1-_this.paddle2.height / 2);
                    
                    }
                    }
            }
    }
}