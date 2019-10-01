const axios = require('axios');
import {AllCharacters} from "./allCharacters";

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
a()

// const all = new AllCharacters(axios);

// all.getAllCharacters().then(dataElement =>{
//     dataElement.forEach((element: any) => {
//         let divAllCaracters = document.getElementById("allCharacters");
//         if (divAllCaracters){
//             divAllCaracters.innerHTML = element.name;
//         }

//     });
// }).catch(err =>{
//     console.log(err)
// })


// const instance = axios.create({
//     baseURL: "https://character-database.becode.xyz"
//   });

// let character = async ()=>{
//     try{
//         const result = await instance.get("/characters");
//         console.log(result.data);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// character();