/// <reference path="iRigidBody.ts" />
/// <reference path="pixi.js.d.ts" />


namespace EAPingPong{
    export class Paddle implements iRigidBody{
        
        x:number;        
        y:number;
        width:number
        height:number
        stage: any;

        public internalGraphics : any;

        constructor(x:number, y:number, width:number, height:number, stage:any){
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.stage = stage;
            this.internalGraphics = new PIXI.Graphics;
            this.draw();
        }

        draw() {
            this.internalGraphics.beginFill(0xDFE8B8);
            this.internalGraphics.lineStyle(1, 0xFFFFFF);
            this.internalGraphics.drawRect(this.x,this.y,this.width,this.height,this.stage);
            this.internalGraphics.endFill();
            this.stage.addChild(this.internalGraphics);
            return this;
        }
        
        moveTo( x:number, y:number ):void{
            this.x = x;
            this.y += y;
            this.internalGraphics.position.y += y;
        }
    }
}