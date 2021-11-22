/* const landscape = 0;
const portrait = 1;
const square = 2;
const panorama = 3; */

enum PhotoOrientation{
    landscape = 0, //0
    portrair =1,  //1
    square =2, //2
    panorama= 3 // 3
}

const landscape: PhotoOrientation = PhotoOrientation.landscape;

console.log("landscape", landscape);
console.log("landscape", PhotoOrientation[landscape]);

enum PictureOrientation{
    landscape = 10, //0
    portrair,  
    square, 
    panorama 
}

console.log(PictureOrientation.panorama)

enum Countries{
    Bolivia = 'bol',
    Colombia = 'col',
    Ecuador = 'ecu'
}

console.log("Country", Countries.Colombia)