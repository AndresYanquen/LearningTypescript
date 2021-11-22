// function to show picture
export{}
enum PhotoOrientation{
    LandScape,
    Portrait,
    Square,
    Panorama
}

interface Picture {
    title: string;
    date: string,
    orientation: PhotoOrientation
}
/* function showPicture(picture:{title:string, date:string, orientation:PhotoOrientation}){
    console.log(`[title: ${picture.title}, 
                date: ${picture.date}
                orientation: ${picture.orientation}]
                `);
} */

interface PictureConfig{
    title?: string;
    date?: string,
    orientation?: PhotoOrientation
}

function generatePicture(config: PictureConfig){
    const pic = {title: 'Default', date: '2021-04'}
    if(config.title){
        pic.title = config.title;
    }
    if(config.date){
        pic.date = config.date;
    }
    return pic;
}

function showPicture(picture:Picture){
    console.log(`[title: ${picture.title}, 
                date: ${picture.date}
                orientation: ${picture.orientation}]
                `);
}
let myPic= {
    title: "Test Title",
    date: "2021-03",
    orientation: PhotoOrientation.LandScape
}

showPicture(myPic);
showPicture({
    title: "Another Title",
    date: "2021-04",
    orientation: PhotoOrientation.Panorama,
    /* extra: 'test' */
});

let picture = generatePicture({});
console.log('picture: ',picture);

picture = generatePicture({title: 'Travel Picture'})
console.log('picture: ',picture);


// Interface: Usuario

interface User {
    readonly id: number ; // solo lectura
    username: string;
    isPro: boolean;
}

let user: User;
user = {id:10, username: "ayanquen", isPro:true}
console.log('user: ', user);
user.isPro = false;
console.log('user: ', user);