const axios = require('axios');
import { AllCharacters } from "./allCharacters";

// Creating a new "AllCharacters" and displaying items in html and console
let a = async () => {
    try {
        const result = await new AllCharacters(axios);
        let t = async () => {
            try {
                const all = await result.getAllCharacters();
                console.table(all)
                all.forEach((el: any) => {
                    console.log(el.name);
                    let divAllCharacters = document.getElementById("allCharacters");

                    const divEachChar = document.createElement("div");
                    divEachChar.className = "eachChar";
                    divAllCharacters.appendChild(divEachChar);

                    const img = document.createElement("img");
                    divEachChar.appendChild(img);
                    img.src += `data:image/jpeg;base64,${el.image}`;

                    const h2 = document.createElement("h2");
                    divEachChar.appendChild(h2);
                    h2.innerHTML += el.name;

                    const em = document.createElement("em");
                    divEachChar.appendChild(em);
                    em.innerHTML += el.shortDescription;

                    const divButtons = document.createElement("div");
                    divEachChar.appendChild(divButtons);
                    divButtons.className = "groupButt";

                    const viewButt = document.createElement("button");
                    divButtons.appendChild(viewButt);
                    viewButt.className = "viewButt";
                    viewButt.innerHTML += "view";

                    const editButt = document.createElement("button");
                    divButtons.appendChild(editButt);
                    editButt.className = "editButt";
                    editButt.innerHTML += "Edit";

                    const deletebutt = document.createElement("button");
                    divButtons.appendChild(deletebutt);
                    deletebutt.className = "deletebutt";
                    deletebutt.innerHTML += "Delete";

                })
            }
            catch (err) {
                console.log(err);
            }
        }
        t()
    }
    catch (err) {
        console.log(err);
    }
}
a()
