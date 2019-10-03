const axios = require('axios');

let url_string = window.location.href; // url
var url = new URL(url_string);
var id = url.searchParams.get("id"); //recupère id

// input
let inputSubmit = document.getElementById("submit");

inputSubmit.addEventListener("click", async () => {
    //input
    let inputName = (<HTMLInputElement>document.getElementById("name")).value;
    let inputShortDescription = (<HTMLInputElement>document.getElementById("shortDescription")).value;
    let inputDescription = (<HTMLInputElement>document.getElementById("description")).value;

    let inputImage = (<HTMLInputElement>document.getElementById("image")).files;
    let preview: any;
    let reader = new FileReader();
    reader.addEventListener("load", async function () {
        preview = reader.result;
        preview = preview.split(",");
        console.log(preview[1]);

        const rawResponse = await fetch('https://character-database.becode.xyz/characters/:id', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: inputName,
                shortDescription: inputShortDescription,
                description: inputDescription,
                image: preview[1],
            })
        });
        const content = await rawResponse.json();
    
        console.log(content);

    if (inputImage) {
        reader.readAsDataURL(inputImage[0]);
    }
})
})