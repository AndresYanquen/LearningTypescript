export{}

enum PhotoOrientation{
    LandScape,
    Portrait,
    Square,
    Panorama
}

class Picture {
    //Propiedades
    id:number;
    title: string;
    orientation: PhotoOrientation;

    constructor(id:number,
                  title:string,
                     orientation: PhotoOrientation){
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }

    // Comportamiento
    toString(){
        return`[id: ${this.id},
            title: ${this.title},
            orientation: ${this.orientation}
        ]`
    }



}

class Album {
    public id:number;
    public title: string;
    public pictures: Picture[]; // = [];

    public constructor(id:number, title: string){
        this.id = id;
        this.title = title;
        this.pictures = []
 
    }

    addPicture(picture: Picture){
        this.pictures.push(picture);
    }


}

const album:Album = new Album(1,'SpiderVerse');
const picture: Picture = new Picture(1, 'PlatziVerse', PhotoOrientation.Square);
album.addPicture(picture);

console.log("Album", album)

//Accediento a los mienbros publicos

picture.id = 100;
picture.title= "Another Title";

album.title= "Personal Activities";

console.log("Album", album)