let idUser:any;
idUser=1;
idUser='1';

console.log("idUser", idUser)

let otherId;

otherId= 1;
otherId = '1';
otherId=true;
console.log("otherId", otherId)

let surprise: any= 'hello Typescript';
//surprise.sayHello() -- Error

const res = surprise.substring(6);
console.log('res: ', res)