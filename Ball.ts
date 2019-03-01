namespace PingPongGame{
    export class Ball implements iRigidBody{
        public x: number;
        public y:number;
        public width:number;
        public height:number;
        public  graphics:any;
        stage : any;

        constructor(x:number, y:number, radius:number, stage:any){
            this.x = x;
            this.y = y;
            this.width = 2*radius;
            this.height = 2*radius;
            this.stage = stage;
            this.graphics = new PIXI.Graphics;
            this.drawBall();
        }

        drawBall(){
            
        this.graphics.beginFill(0xFFFF00);
        this.graphics.lineStyle(5, 0xFF0000);
        this.graphics.drawCircle(this.x,this.y,this.height/2,this.stage);
        this.graphics.endFill();
        this.stage.stage.addChild(this.graphics);
        return this;
        }

        moveTo(x:number,y:number):void{
            this.x=x;
            this.y=y;
            this.graphics.position.x += x;
            this.graphics.position.y += y;
            
            }
    }

 }