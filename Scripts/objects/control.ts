/// <reference path="../../typings/tsd.d.ts"/>
//Nashia Amourdon
//last modified:05.02/2016
//revision version: 1.3
module objects {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    export class Control { 
        //PUBLIC INSTANCE VARIABLES +++++++++++++++++++++++++++
        public rotationSpeedY:number;
        public rotationSpeedX:number;
        public rotationSpeedZ:number;
        
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(rotationSpeedY:number,rotationSpeedX:number,rotationSpeedZ:number,human:number) {
           this.rotationSpeedY = rotationSpeedY;
           this.rotationSpeedX= rotationSpeedX;
           this.rotationSpeedZ= rotationSpeedZ;
           
        }
        
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
       public generateColor():void{
           head.material.setValues({color:(Math.random()*0xFFFFFF <<0)});
           body.material.setValues({color:(Math.random()*0xFFFFFF <<0)});
           rightArm.material.setValues({color:(Math.random()*0xFFFFFF <<0)});
           leftArm.material.setValues({color:(Math.random()*0xFFFFFF <<0)});
           rightleg.material.setValues({color:(Math.random()*0xFFFFFF <<0)});
           leftLeg.material.setValues({color:(Math.random()*0xFFFFFF <<0)});
       }
    }
}
