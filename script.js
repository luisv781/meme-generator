const ronSwansonUrl = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
const giphyUrl = "https://api.giphy.com/v1/gifs/random?api_key=jcu4NXTXLGt7WZEjBCDGHMvCQ6WHQosL";

const regenerateButton = document.querySelector("#regenerate-button");

async function getRandomGif() {
    const response = await fetch(giphyUrl);
    const data = await response.json();
    const images = data.data.images;

    let newGif = document.querySelector("img");
    if (images) {
        newGif.src = images.original.url;
    }
}

async function setRandomQuote() {
    const response = await fetch(ronSwansonUrl);
    const data = response.json();
    let h3 = document.querySelector("h3#caption");
    data.then((quote) => {
        h3.innerText = quote[0];
    });
}

regenerateButton.onclick = function() {
    getRandomGif();
    setRandomQuote();
}

getRandomGif();
setRandomQuote();
