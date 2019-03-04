/// <reference path="Ball.ts" />
/// <reference path="Paddle.ts" />
/// <reference path="Boundaries.ts" />

namespace EAPingPong{
    export class CollisionsHandler{
        checkPaddleCollisions(paddle1:Paddle,paddle2:Paddle,ball:Ball):boolean{
            if((paddle1.x === (ball.x - 10)) || (paddle2.x === (ball.x-10))){
                return true;
            }
            return false;
        }

        checkBoundaryTopBottomCollisions(boundryTop:Boundaries, boundaryBottom:Boundaries, ball:Ball):boolean{
            if((boundryTop.y === (ball.y-10)) || (boundaryBottom.y === (ball.y + 10))){
                return true;
            }
            return false;
        }
    }
}