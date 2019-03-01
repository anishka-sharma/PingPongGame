namespace PingPongGame{
    export class Boundaries implements iRigidBody{
        public x: number;
        public y:number;
        public width:number;
        public height:number;
        private graphics:any;
        stage : any;

        constructor(x:number, y:number, width:number, height:number, stage:any){
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.stage = stage;
            this.graphics = new PIXI.Graphics;
            this.drawPaddle();
        }

        drawPaddle(){
            
        this.graphics.beginFill(0xFFFF00);
        this.graphics.lineStyle(5, 0xFF0000);
        this.graphics.drawRect(this.x,this.y,this.width,this.height,this.stage);
        this.graphics.endFill();
        this.stage.stage.addChild(this.graphics);
        }

        moveTo(x:number,y:number):void{
            
            }
    }

 }