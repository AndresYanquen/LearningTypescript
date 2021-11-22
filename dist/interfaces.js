"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["LandScape"] = 0] = "LandScape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
function generatePicture(config) {
    var pic = { title: 'Default', date: '2021-04' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
function showPicture(picture) {
    console.log("[title: " + picture.title + ", \n                date: " + picture.date + "\n                orientation: " + picture.orientation + "]\n                ");
}
var myPic = {
    title: "Test Title",
    date: "2021-03",
    orientation: PhotoOrientation.LandScape
};
showPicture(myPic);
showPicture({
    title: "Another Title",
    date: "2021-04",
    orientation: PhotoOrientation.Panorama,
    /* extra: 'test' */
});
var picture = generatePicture({});
console.log('picture: ', picture);
picture = generatePicture({ title: 'Travel Picture' });
console.log('picture: ', picture);
var user;
user = { id: 10, username: "ayanquen", isPro: true };
console.log('user: ', user);
user.isPro = false;
console.log('user: ', user);
