declare namespace PingPongGame{
    export interface iRigidBody{
        x: number;
        y:number;
        width:number;
        height:number;
        stage : any;
        moveTo(x:number, y:number) : void;
    }
}