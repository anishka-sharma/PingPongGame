namespace EAPingPong{
    export class Ball implements iRigidBody{
                
        x: number;
        y: number;
        width: number;
        height: number;
        stage: any;
        
        public internalGraphics : any;
        
        constructor( x:number, y:number, width:number, height:number, stage:any){
            this.x = x;
            this.y = y;
            this.width = width;
            this. height = height;
            this.stage = stage;
            this.internalGraphics = new PIXI.Graphics;
            this.draw();
        }
        
        draw(){
            this.internalGraphics.beginFill(0xD7B5E7);
            this.internalGraphics.drawCircle(this.x,this.y,this.height/2,this.stage);
            this.internalGraphics.endFill();
            this.stage.addChild(this.internalGraphics);
            return this;
        }

        moveTo(x:number, y:number){
            this.x = x;
            this.y = y;
            this.internalGraphics.x += this.x;
            this.internalGraphics.y += this.y;   
        }
        
    }
}