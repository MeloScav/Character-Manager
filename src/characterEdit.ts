const axios = require('axios');

import {AllCharacters} from "./allCharacters";

// Creating a new "AllCharacters" and displaying items in html and console
let a = async ()=>{
    try{
        const result = await new AllCharacters(axios);
        let t = async ()=>{
            try{
                const all = await result.getAllCharacters();
                all.forEach((el:any)=>{
                    console.log(el);
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


// input
let inputSubmit = document.getElementById("submit");

inputSubmit.addEventListener("click",async (e)=>{
    //input
    let inputName = (<HTMLInputElement>document.getElementById("name")).value;
    let inputShortDescription = (<HTMLInputElement> document.getElementById("shortDescription")).value;
    let inputDescription = (<HTMLInputElement> document.getElementById("description")).value;
 
    //let idHero = e.currentTarget;
    
    const rawResponse = await fetch('https://character-database.becode.xyz/characters/:id', {
        method: 'PUT',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: inputName, 
            shortDescription: inputShortDescription ,
            description: inputDescription,
        })
    });
    const content = await rawResponse.json();

    console.log(content);
 
})