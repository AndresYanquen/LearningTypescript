"use strict";
/* function createPicture(title, date, size){
   
} */
// Usamos typescript y definimos tipos para parametros
/* function createPicture(title:string, date:string, size:SquareSize){
    console.log('create Picture using: ', title, date, size)
} */
function createPicture(title, date, size) {
    console.log('create Picture using: ', title, date, size);
}
createPicture('My Birthday', '2021-02-13', '500x500');
createPicture('My Birthday', '2021-02-13');
// Parametros Opcionales
//Flat Array Function
var createPic = function (title, date, size) {
    return {
        title: title,
        date: date,
        size: size
    };
};
var picture = createPic('Platzi session', '2021-03-14', '100x100');
console.log('picture', picture);
// Tipo de retorno con Typescript
function handleError(code, message) {
    // Procesamiento
    if (message == 'error') {
        throw new Error(message + ". Code error: " + code);
    }
    else {
        return 'An error has ocurred';
    }
}
try {
    var result = handleError(200, 'Ok'); // String
    console.log(result);
    result = handleError(404, 'error'); // never
    console.log(result);
}
catch (error) {
}
