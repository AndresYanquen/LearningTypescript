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
    PhotoOrientation[PhotoOrientation["panorama"] = 3] = "panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var landscape = PhotoOrientation.landscape;
console.log("landscape", landscape);
