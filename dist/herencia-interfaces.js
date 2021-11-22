"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["LandScape"] = 0] = "LandScape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var album = {
    id: 1,
    title: "Meetups",
    description: "Community events arount the world"
};
var picture = {
    id: 1,
    title: 'Family',
    orientation: PhotoOrientation.Panorama
};
var newPicture = {};
newPicture.id = 2;
newPicture.title = "Moonshooting";
console.log('album', album);
console.log('picture', picture);
console.log('newPicture', newPicture);
