const axios = require('axios');
import {Character} from "./character";

const instance = axios.create({
    baseURL: "https://character-database.becode.xyz"
});

let add = async ()=>{
    try{
        const resultAdd = new Character("Lulu", "Un petit lutin", "Un petit et jeune lutin âgé de 150ans", "image");
        const response = await instance.post(`/characters/{${JSON.stringify(resultAdd)}}`);
        console.log(response);
    }
    catch(err){
        console.error(err);
    }
}
add();