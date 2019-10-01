// Generates a code to display all elements of the DB, global usage
class AllCharacters {
    private axios: any;

    constructor (axios: any){
        this.axios = axios;
        this.axios.defaults.baseURL = "https://character-database.becode.xyz";
    }
    
    public async getAllCharacters(){
        try{
            const result = await this.axios.get("/characters");
            return result.data;
        }
        catch(error){
            console.error(error);
            return null;
        }
    }

}

export {AllCharacters}