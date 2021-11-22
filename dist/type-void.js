"use strict";
//Void
//Tipo explicito
function showInfo(user) {
    console.log('User Info', user.id, user.username, user.firstname);
    //return "Hola";
}
showInfo({ id: 1, username: 'ayanquen', firstname: 'Andres' });
function showFormattedInfo(user) {
    console.log('User Info', "  \n        id:" + user.id + "\n        username: " + user.username + "\n        firstname: " + user.firstname + "    \n    ");
}
showFormattedInfo({ id: 1, username: 'ayanquen', firstname: 'Andres' });
// tipo void como tipo de tdato
var unusable;
// Tipo never
/* function handleError(code: number, message:string){
    throw new Error(`${message}. Code: ${code}`)
}

try{

    handleError(404, "Not found");
}catch(error){

}
 */
function sumNumbers(limit) {
    var sum = 0;
    while (true) {
        sum++;
    }
}
sumNumbers(10); // Ciclo infinito
