/// <reference path="iRigidBody.ts" />
/// <reference path="PingPongGameController.ts" />



namespace EAPingPong{
    export class CollisionsHandler{
        checkCollision(body1:iRigidBody,body2:iRigidBody){
            if(body1.x < body2.x + body2.width/2 &&
                body1.x + body1.width > body2.x - body2.width/2 &&
                   body1.y < body2.y + body2.height/2 &&
                   body1.height + body1.y > body2.y - body2.width/2){
                return true;
            }
        }
    }
}