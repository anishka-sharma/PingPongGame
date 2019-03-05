namespace EAPingPong{
    export class Boundaries implements iRigidBody{
        
        stage: any;
        x: number;
        y: number;
        width: number;
        height: number;
        public internalGraphics : any;

        constructor(x:number, y:number, width:number, height:number, stage:any){
            this.x =x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.stage = stage;
            this.internalGraphics = new PIXI.Graphics;
            this.draw();
        }

        draw(): void {
            this.internalGraphics.beginFill(0x76BDB7);
            this.internalGraphics.drawRect(this.x,this.y,this.width,this.height,this.stage);            
            this.internalGraphics.endFill();
            this.stage.addChild(this.internalGraphics);
        }

        moveTo(x: number, y: number): void {

        }
    }
}