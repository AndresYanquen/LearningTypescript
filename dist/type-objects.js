"use strict";
var user;
user = {};
user = {
    id: 1,
    username: "Andres",
    firstname: "Felipe",
    isPro: true
};
console.log('user', user);
// Object vs object (Clase Js vs Tpo Ts)
/* console.log('user.name', user.username) */
var myObj = {
    id: 1,
    username: "Andres",
    firstname: "Felipe",
    isPro: true
};
var isInstance = myObj instanceof Object;
console.log("LA instancia es : ", isInstance);
console.log('myObj.name', myObj.username);
