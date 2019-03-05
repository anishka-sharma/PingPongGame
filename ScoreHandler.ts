

namespace EAPingPong{
    export class ScoreHandler{

        private computerScore!:number;
        private playerScore!:number;
        private boundary!:Boundaries;
        // private stage!:any;
        constructor(boundary:Boundaries){
            this.computerScore = 0;
            this.playerScore = 0;
            this.boundary = boundary;
        }

        score(){
            if(this.boundary.x === 0){
                this.playerScore++;
            }
            else{
                this.computerScore++;
            }
        }

    }
}