/// <reference path="../../typings/tsd.d.ts"/>
//Nashia Amourdon
//last modified:05.02/2016
//revision version: 1.3
var objects;
(function (objects) {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    var Control = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Control(rotationSpeedY, rotationSpeedX, rotationSpeedZ, human) {
            this.rotationSpeedY = rotationSpeedY;
            this.rotationSpeedX = rotationSpeedX;
            this.rotationSpeedZ = rotationSpeedZ;
        }
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
        Control.prototype.generateColor = function () {
            head.material.setValues({ color: (Math.random() * 0xFFFFFF << 0) });
            body.material.setValues({ color: (Math.random() * 0xFFFFFF << 0) });
            rightArm.material.setValues({ color: (Math.random() * 0xFFFFFF << 0) });
            leftArm.material.setValues({ color: (Math.random() * 0xFFFFFF << 0) });
            rightleg.material.setValues({ color: (Math.random() * 0xFFFFFF << 0) });
            leftLeg.material.setValues({ color: (Math.random() * 0xFFFFFF << 0) });
        };
        return Control;
    })();
    objects.Control = Control;
})(objects || (objects = {}));
//# sourceMappingURL=control.js.map