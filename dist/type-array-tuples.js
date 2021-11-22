"use strict";
// Corchetes[]
// Tipo Explicito
var users;
users = ['andres', 'sebastian', 'jhony'];
/* users= [1, true, 'test'] */
var otherUsers = ['andres', 'sebastian', 'jhony'];
/* otherUsers= [1, true, 'test'] */
var pictureTitles;
pictureTitles = ['Favorite Sunset', 'Vacation Time', 'LandScape'];
//Accediendo a valores de array
console.log('first user', users[0]);
console.log('first Title', pictureTitles[0]);
// propiedades en Array
console.log("users.lenght " + users.length);
users.forEach(function (x) { return console.log(x); });
// funciones en Array
users.push('PlatziUser');
users.sort();
console.log("Estado:", users);
