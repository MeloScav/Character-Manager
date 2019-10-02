const axios = require('axios');
//import {Character} from "./character";

// const instance = axios.create({
//     baseURL: "https://character-database.becode.xyz"
// });

// let add = async ()=>{
//     try{
//         const resultAdd = new Character("Lulu", "Un petit lutin", "Un petit et jeune lutin âgé de 150ans", "image");
//         const response = await instance.post(`/characters,{${JSON.stringify(resultAdd)}}`);
//         console.log(response);
//     }
//     catch(err){
//         console.error(err);
//     }
// }
// add();


import {AllCharacters} from "./allCharacters";

// Creating a new "AllCharacters" and displaying items in html and console
let a = async ()=>{
    try{
        const result = await new AllCharacters(axios);
        let t = async ()=>{
            try{
                const all = await result.getAllCharacters();
                all.forEach((el:any)=>{
                    console.log(el.name);
                })
            }
            catch(err){
                console.log(err);
            }
        }
        t()
    }
    catch(err){
        console.log(err);
    }
}
a();


(async () => {
    const rawResponse = await fetch('https://character-database.becode.xyz/characters', {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: "Monstrueux lulu", 
        shortDescription: "Un petit lutin",
        description: "Un petit et jeune lutin âgé de 150ans"
    })
    });
    const content = await rawResponse.json();

    console.log(content);
})();