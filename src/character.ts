// Character class, character creation, global use
class Character {
    name: string;
    shortDescription: string;
    description: string;
    image: any;
    
    constructor (name: string, shortDescription: string, description: string, image:any){
        this.name = name;
        this.shortDescription = shortDescription;
        this.description = description;
        this.image = image;
    }
}

export {Character};
