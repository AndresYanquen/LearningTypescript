//Void


//Tipo explicito
function showInfo(user:any){
    console.log('User Info', user.id, user.username, user.firstname)
    //return "Hola";
}

showInfo({id:1, username: 'ayanquen', firstname: 'Andres'})

function showFormattedInfo(user:any){
    console.log('User Info', `  
        id:${user.id}
        username: ${user.username}
        firstname: ${user.firstname}    
    `)    

}
showFormattedInfo({id:1, username: 'ayanquen', firstname: 'Andres'})

// tipo void como tipo de tdato
let unusable:void;

// Tipo never

/* function handleError(code: number, message:string){
    throw new Error(`${message}. Code: ${code}`)
}

try{

    handleError(404, "Not found");
}catch(error){

}
 */
function sumNumbers(limit:number):never{
    let sum=0
    while(true){
        sum++;
    }
}

sumNumbers(10); // Ciclo infinito