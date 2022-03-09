const imagesContainer = document.querySelector(".images-container");


const BASE_URL_API = "https://rickandmortyapi.com/api/character";

const createImage = (character) => {
    const containerItemImage = document.createElement("div");
    containerItemImage.classList.add("containerItemImage");

    const characterImage = document.createElement("img");
    characterImage.classList.add("characterImageStyles");
    
    characterImage.src = character.image;

    containerItemImage.appendChild(characterImage);
    return containerItemImage;
}

const rickAndMortyImages = async () => {
    const resp = await fetch(BASE_URL_API);
    const {results} = await resp.json();

    results.forEach((characterImage) => {
        const characterImg = createImage(characterImage);

        imagesContainer.appendChild(characterImg);
    });

    const character = document.querySelectorAll(".characterImageStyles");
    const prueba = document.querySelector(".containerItemImage");
    character.forEach((img) => {
        img.addEventListener("click", () => {
            const tootltipInfo = document.createElement("div");
            tootltipInfo.classList.add("tooltip");
             
            prueba.appendChild(tootltipInfo);
        });
    });
}

// const rickAndMortyInfo = async () => {
// }
rickAndMortyImages();
