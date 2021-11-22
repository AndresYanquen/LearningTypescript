"use strict";
/* const landscape = 0;
const portrait = 1;
const square = 2;
const panorama = 3; */
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["landscape"] = 0] = "landscape";
    PhotoOrientation[PhotoOrientation["portrair"] = 1] = "portrair";
    PhotoOrientation[PhotoOrientation["square"] = 2] = "square";
    PhotoOrientation[PhotoOrientation["panorama"] = 3] = "panorama"; // 3
})(PhotoOrientation || (PhotoOrientation = {}));
var landscape = PhotoOrientation.landscape;
console.log("landscape", landscape);
console.log("landscape", PhotoOrientation[landscape]);
var PictureOrientation;
(function (PictureOrientation) {
    PictureOrientation[PictureOrientation["landscape"] = 10] = "landscape";
    PictureOrientation[PictureOrientation["portrair"] = 11] = "portrair";
    PictureOrientation[PictureOrientation["square"] = 12] = "square";
    PictureOrientation[PictureOrientation["panorama"] = 13] = "panorama";
})(PictureOrientation || (PictureOrientation = {}));
console.log(PictureOrientation.panorama);
var Countries;
(function (Countries) {
    Countries["Bolivia"] = "bol";
    Countries["Colombia"] = "col";
    Countries["Ecuador"] = "ecu";
})(Countries || (Countries = {}));
console.log("Country", Countries.Colombia);
