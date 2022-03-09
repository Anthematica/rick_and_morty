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
        
        characterImg.addEventListener("mouseenter", () => {
            const tootltipInfo = document.createElement("div");
            tootltipInfo.classList.add("tooltip");
            characterImg.appendChild(tootltipInfo);
            rickAndMortyInfo(tootltipInfo, characterImage.id);
        });

        characterImg.addEventListener("mouseleave", (e) => {
            e.target.querySelector(".tooltip").remove();

        });
    });
}


const rickAndMortyInfo = async (tooltip, i) => { 
    const resp = await fetch(`${BASE_URL_API}/${i}`)
    console.log(resp);
    const results = await resp.json();

    const nameContainer = document.createElement("div");
    nameContainer.classList.add("nameContainer");
    tooltip.appendChild(nameContainer);
    nameContainer.textContent = results.name;

}
rickAndMortyImages();

