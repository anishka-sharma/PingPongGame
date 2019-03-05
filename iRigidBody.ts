namespace EAPingPong{
    export interface iRigidBody{
        stage:any;
        x:number;
        y:number;
        width:number;
        height:number;
        
        draw():void;
        moveTo(x:number, y:number):void;
    }
}