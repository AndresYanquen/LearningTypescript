// <> // Angle bracket syntax
export {};
let username: any;
username = 'ayanquen';

let message: string = (<string>username).length > 5 ?
                                        `Welcome ${username}`:
                                        'Username is too short';

console.log("message: ",message);

let userNameWithId: any = 'luixaviles 1';
//
username = (<String>userNameWithId).substring(0,10);

console.log("username only: ", username);

message = (username as string).length > 5 ?
                                        `Welcome ${username}`:
                                        'Username is too short';

let helloUser: any ;
helloUser = "hello paparazi";
username = (helloUser as string).substring(6);
console.log('username: ', username);
