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
                    console.log(el.name);
                    let divAllCaracters = document.getElementById("allCharacters");
                    divAllCaracters.innerHTML += el.name;
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
a()
