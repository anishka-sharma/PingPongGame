/// <reference path="PingPongGameController.ts" />

namespace EAPingPong{
    class MainGame{
      public  gc: PingPongGameController;
        constructor(){
            this.gc = new PingPongGameController();
        }
    }
    var obj = new MainGame();
}
