// Corchetes[]

// Tipo Explicito
let users: string[];
users = ['andres', 'sebastian', 'jhony'];
/* users= [1, true, 'test'] */

let otherUsers= ['andres', 'sebastian', 'jhony'];
/* otherUsers= [1, true, 'test'] */

let pictureTitles:Array<string>;
pictureTitles=['Favorite Sunset', 'Vacation Time', 'LandScape']

//Accediendo a valores de array
console.log('first user', users[0]);
console.log('first Title', pictureTitles[0]);

// propiedades en Array
console.log(`users.lenght ${users.length}`)
users.forEach(x=>console.log(x))

// funciones en Array
users.push('PlatziUser');
users.sort();
console.log("Estado:", users)