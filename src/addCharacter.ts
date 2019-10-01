// // Generates a code to display all elements of the DB, global usage
// class AddCharacter {
//     private axios: any;

//     constructor (axios: any){
//         this.axios = axios;
//         this.axios.defaults.baseURL = "https://character-database.becode.xyz";
//     }
    
//     public async postAddCharacters(){
//         try{
//             const result = await this.axios.post(`/characters/, {${resultAdd}}`);
//             return result.data;
//         }
//         catch(error){
//             console.error(error);
//             return null;
//         }
//     }

// }

// export {AddCharacter};