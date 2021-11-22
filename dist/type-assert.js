"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var username;
username = 'ayanquen';
var message = username.length > 5 ?
    "Welcome " + username :
    'Username is too short';
console.log("message: ", message);
var userNameWithId = 'luixaviles 1';
//
username = userNameWithId.substring(0, 10);
console.log("username only: ", username);
message = username.length > 5 ?
    "Welcome " + username :
    'Username is too short';
var helloUser;
helloUser = "hello paparazi";
username = helloUser.substring(6);
console.log('username: ', username);
