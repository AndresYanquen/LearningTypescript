export {};
// Identificadores de usuario
type IdUser = number|string;
type UserName = string;
/* let idUser: number | string; */
let idUser: IdUser;
idUser = 10;
idUser = '10';

// Buscar username segun un id

function getUserNameById(id:IdUser): UserName{
    //Logica de negocio
    return 'andres'
}

getUserNameById(20);
getUserNameById('20');

// Tipos Iterales Valores permitidos:
//100x100 500x500 1000x1000

type SquareSize ='100x100' | '500x500' | '1000x1000';
/* let smallPicture: SquareSize = '255x255'; */
let smallPicture: SquareSize = '500x500';


// Practica

type pictureSize = '100x100'| '250x250'| '1000x1000'; 

enum valuesAllowed{
    smallSize = '100x100',
    mediumSize = '250x250',
    largeSize = '1000x1000'
}

const smallImage: pictureSize = "250x250";
const mediumSize: pictureSize = valuesAllowed.mediumSize;
const largesize: pictureSize = valuesAllowed.largeSize; 

