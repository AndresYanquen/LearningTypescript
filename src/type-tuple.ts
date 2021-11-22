export {};
//[1, "nameUser"]
let user:[number, string];
user= [1, 'ayanquen'];

console.log(user);
console.log('username: ', user[1])
console.log('id: ', user[0])

// Tuplas con varios valores
// id, username, isPro

let userInfo: [number, string, boolean];
userInfo = [2, 'paparazi', true];

// Arreglo de tuplas 

let array: [number, string][] = [];
array.push([1, 'ayanquen']);
array.push([2, 'sebastian']);
array.push([3, 'jhony']);

array[2][1]= array[2][1].concat('001');
console.log('array ', array);