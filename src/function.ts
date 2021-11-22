/* function createPicture(title, date, size){
   
} */

type SquareSize = '100x100'| '500x500' | '1000x1000'
// Usamos typescript y definimos tipos para parametros

/* function createPicture(title:string, date:string, size:SquareSize){
    console.log('create Picture using: ', title, date, size)
} */


function createPicture(title:string, date?:string, size?:SquareSize){
    console.log('create Picture using: ', title, date, size)
}

createPicture('My Birthday', '2021-02-13', '500x500');
createPicture('My Birthday', '2021-02-13');
// Parametros Opcionales

//Flat Array Function
let createPic = (title:string, date: string, size: SquareSize): object =>{
    return {
        title:title,
        date:date,
        size:size
    };
};

const picture = createPic('Platzi session', '2021-03-14', '100x100');
console.log('picture',picture);

// Tipo de retorno con Typescript
function handleError(code:number, message:string):never | string{
    // Procesamiento
    if(message=='error'){
        throw new Error(`${message}. Code error: ${code}`);
    }else{
        return 'An error has ocurred'
    }
    
}

try{
    let result = handleError(200, 'Ok'); // String
    console.log(result);
    result = handleError(404,'error') // never
    console.log(result);

}catch(error){

}