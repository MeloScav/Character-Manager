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
let inputSubmit = document.getElementById("submitCreation");

inputSubmit.addEventListener("click",async ()=>{
    //input
    let inputName = (<HTMLInputElement>document.getElementById("name")).value;
    let inputShortDescription = (<HTMLInputElement> document.getElementById("shortDescription")).value;
    let inputDescription = (<HTMLInputElement> document.getElementById("description")).value;
    let inputImage = (<HTMLInputElement>document.getElementById("image")).files[0];
    let preview:any;
    let reader  = new FileReader();
    reader.addEventListener("load", function () {
        preview = reader.result;
      }, false);

    if (inputImage) {
        reader.readAsDataURL(inputImage);
      }
      console.log(preview);

    const rawResponse = await fetch('https://character-database.becode.xyz/characters', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: inputName, 
            shortDescription: inputShortDescription ,
            description: inputDescription,
            image: inputImage,
        })
    });
    const content = await rawResponse.json();

    console.log(content);
 
})