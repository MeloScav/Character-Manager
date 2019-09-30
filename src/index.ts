const axios = require('axios');

const instance = axios.create({
    baseURL: "https://character-database.becode.xyz"
  });

let character = async ()=>{
    try{
        const result = await instance.get("/characters");
        console.log(result.data);
    }
    catch(err){
        console.log(err);
    }
}
character();