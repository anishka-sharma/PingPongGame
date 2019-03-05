/// <reference path="Ball.ts" />
/// <reference path="Paddle.ts" />
/// <reference path="GameController.ts" />
/// <reference path="CollisionsHandler.ts"/>



namespace EAPingPong{
    export class PingPongGameController extends GameController {

        private paddle1!: Paddle;
        private paddle2!: Paddle;
        private ball!: Ball;
        private boundTop!: Boundaries;
        private boundRight!: Boundaries;
        private boundBottom!: Boundaries;
        private boundLeft!: Boundaries;
        private ballVelocityX!:number;
        private ballVelocityY!:number;
        public collider!:CollisionsHandler;
        private scoreComputer!:ScoreHandler;  

        
        start(){
            this.paddle1 = new Paddle(20,350,10,100,this.app.stage);
            this.paddle2 = new Paddle(770,10,10,100,this.app.stage);
            this.ball = new Ball(400,400,20,20,this.app.stage);
            this.boundTop = new Boundaries(0,0,800,10,this.app.stage);
            this.boundRight = new Boundaries(790,0,10,800,this.app.stage);
            this.boundBottom = new Boundaries(0,790,800,10,this.app.stage);
            this.boundLeft = new Boundaries(0,0,10,800,this.app.stage);
            this.ballVelocityX = 2;
            this.ballVelocityY = 2;
            this.collider = new CollisionsHandler();
        }

        update (delta :number) {
                   

            let _this = this; 
            //move ball             
            moveBall();
            
            function moveBall(): any {
                _this.ball.moveTo(_this.ballVelocityX, _this.ballVelocityY);
            }
                        
            //move paddle 
            movePaddle();
            _this.paddleCollider(_this.paddle1,_this.ball);
            _this.paddleCollider(_this.paddle2,_this.ball);
            _this.boundCollider(_this.boundTop,_this.ball);
            _this.boundCollider(_this.boundBottom,_this.ball);
            _this.boundSideCollider(_this.boundLeft,_this.ball);
            _this.boundSideCollider(_this.boundRight, _this.ball);

            function movePaddle() {
                movePaddle1();
                movePaddle2();
            
                function movePaddle1() {
                    _this.paddle1.moveTo(_this.paddle1.x, _this.ballVelocityY);
                }
                        
                function movePaddle2() {
                    let x1 = _this.app.renderer.plugins.interaction.mouse.global.x;
                    let y1 = _this.app.renderer.plugins.interaction.mouse.global.y;
                    if(y1 < 0){
                        y1 = 0;
                    }
                    if(y1+120 > _this.app.screen.height){
                        y1 = _this.app.screen.height - _this.paddle2.height - 20;
                    }
                    _this.paddle2.y = y1;
                    _this.paddle2.internalGraphics.position.y = y1;
                }
            
            }

            //collider
            
        }
        paddleCollider(paddle:Paddle,ball:Ball){
            if(this.collider.checkCollision(paddle,ball)){
                this.ballVelocityX *= -1;
            }   
        }

        boundCollider(boundary:Boundaries, ball:Ball){
            if(this.collider.checkCollision(boundary,ball)){
                this.ballVelocityY *= -1;
            }
        }
        boundSideCollider(boundLeft:Boundaries,ball:Ball){
            if(!this.collider.checkCollision(boundLeft,ball)){
                this.score++;
            }
        }
    }

}