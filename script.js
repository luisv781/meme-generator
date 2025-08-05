const ronSwansonUrl = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

async function getRandomGif(){
    const url = "https://api.giphy.com/v1/gifs/random?api_key=jcu4NXTXLGt7WZEjBCDGHMvCQ6WHQosL";

    const response = await fetch(url);
    const data = await response.json();

    let newGif = document.createElement("img");
    newGif.src = data.data.images.original.url;

    let body = document.querySelector("body");
    body.appendChild(newGif);
}

async function getRandomQuote() {
    const response = await fetch(ronSwansonUrl);
    const data = await response.json();
    return data[0];
}

let randomQuote = getRandomQuote();

