/// <reference path="PingPongGameController.ts" />

namespace PingPongGame{
    export class MGame{
      public  gc: PingPongGameController;
        constructor(){
            this.gc = new PingPongGameController();
        }
    }
    var obj = new MGame();
}