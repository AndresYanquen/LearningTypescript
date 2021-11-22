"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* let idUser: number | string; */
var idUser;
idUser = 10;
idUser = '10';
// Buscar username segun un id
function getUserNameById(id) {
    //Logica de negocio
    return 'andres';
}
getUserNameById(20);
getUserNameById('20');
/* let smallPicture: SquareSize = '255x255'; */
var smallPicture = '500x500';
var valuesAllowed;
(function (valuesAllowed) {
    valuesAllowed["smallSize"] = "100x100";
    valuesAllowed["mediumSize"] = "250x250";
    valuesAllowed["largeSize"] = "1000x1000";
})(valuesAllowed || (valuesAllowed = {}));
var smallImage = "250x250";
var mediumSize = valuesAllowed.mediumSize;
var largesize = valuesAllowed.largeSize;
