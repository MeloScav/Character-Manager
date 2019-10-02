const axios = require('axios');
import { AllCharacters } from "./allCharacters";

// Creating a new "AllCharacters" and displaying items in html and console

/* const img = document.createElement("img"); */

let a = async () => {
    try {
        const result = await new AllCharacters(axios);
        let t = async () => {
            try {
                const all = await result.getAllCharacters();
                console.table(all)
                all.forEach((el: any) => {

                    let divAllCharacters = document.getElementById("allCharacters");

                    const divEachChar = document.createElement("div");
                    divEachChar.className = "eachChar";
                    divEachChar.setAttribute("name", `${el.id}`)
                    divAllCharacters.appendChild(divEachChar);

                    const img = document.createElement("img");
                    divEachChar.appendChild(img);
                    img.className = "imgHero"
                    img.src += `data: image / jpeg; base64, ${el.image} `;

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
                    viewButt.className = "viewButton";
                    viewButt.innerHTML += "View";
                    divButtons.appendChild(viewButt);
                    viewButt.addEventListener('click', () => { viewChar(el) });

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

function viewChar(el: any) {
    const viewDial = document.getElementById("viewDialog");
    viewDial.style.display = "block";
    const close = document.getElementById("close");
    close.onclick = function () {
        viewDial.style.display = "none";
    }

    let vDHero = document.getElementById("vDHero");
    vDHero.innerHTML = "";

    const imgD = document.createElement("img");
    vDHero.appendChild(imgD);
    imgD.className = "imgDHero";
    imgD.src += `data: image / jpeg; base64, ${el.image} `;

    const h2D = document.createElement("h2");
    vDHero.appendChild(h2D);
    h2D.className = "h2DHero";
    h2D.innerHTML += el.name;

    const emD = document.createElement("em");
    vDHero.appendChild(emD);
    emD.className = "emDHero";
    emD.innerHTML += el.shortDescription;

    const pD = document.createElement("p");
    vDHero.appendChild(pD);
    pD.className = "pDHero";
    pD.innerHTML += el.description;
}


