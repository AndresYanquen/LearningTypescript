"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["LandScape"] = 0] = "LandScape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var Picture = /** @class */ (function () {
    function Picture(id, title, orientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    // Comportamiento
    Picture.prototype.toString = function () {
        return "[id: " + this.id + ",\n            title: " + this.title + ",\n            orientation: " + this.orientation + "\n        ]";
    };
    return Picture;
}());
var Album = /** @class */ (function () {
    function Album(id, title) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }
    Album.prototype.addPicture = function (picture) {
        this.pictures.push(picture);
    };
    return Album;
}());
var album = new Album(1, 'SpiderVerse');
var picture = new Picture(1, 'PlatziVerse', PhotoOrientation.Square);
album.addPicture(picture);
console.log("Album", album);
//Accediento a los mienbros publicos
/* picture.id = 100;
picture.title= "Another Title"; */
album.title = "Personal Activities";
console.log("Album", album);
