const imagesContainer = document.querySelector(".images-container");


const BASE_URL_API = "https://rickandmortyapi.com/api/character";
const locationURL = "https://rickandmortyapi.com/api/location";

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
    const resp = await fetch(`${BASE_URL_API}/${i}`);
    const results = await resp.json();

    const resp2 = await fetch(`${locationURL}/${i}`);
    const results2 = await resp2.json();

    const nameContainer = document.createElement("div");
    nameContainer.classList.add("nameContainer");
    tooltip.appendChild(nameContainer);

    const nameInfo = document.createElement("p");
    nameInfo.classList.add("name");
    nameContainer.appendChild(nameInfo);
    nameInfo.textContent = results.name;

    const dimentionInfo = document.createElement("p");
    dimentionInfo.classList.add("dimention");
    nameContainer.appendChild(dimentionInfo);
    dimentionInfo.textContent = "- " + results2.dimension;

    const restInformationContainer = document.createElement("div");
    restInformationContainer.classList.add("characterInfo");
    tooltip.appendChild(restInformationContainer);

    const strongTitle = document.createElement("strong");
    strongTitle.textContent = "Species:";
    strongTitle.classList.add("strongStyles");
    restInformationContainer.appendChild(strongTitle);

    const spiciesInformation = document.createElement("p");
    spiciesInformation.classList.add("spicieInfo");
    restInformationContainer.appendChild(spiciesInformation);

    const planetContainer = document.createElement("div");
    tooltip.appendChild(planetContainer);
    planetContainer.classList.add("planet");

    const strongTitle2 = document.createElement("strong");
    strongTitle2.textContent = "Planet:";
    strongTitle2.classList.add("strongStyles");
    planetContainer.appendChild(strongTitle2);

    const planetInfo = document.createElement("p");
    planetInfo.classList.add("planetInfo");
    planetContainer.appendChild(planetInfo);

    const statusContainer = document.createElement("div");
    tooltip.appendChild(statusContainer);
    statusContainer.classList.add("status");

    const strongTitle3 = document.createElement("strong");
    strongTitle3.textContent = "Status:";
    strongTitle3.classList.add("strongStyles");
    statusContainer.appendChild(strongTitle3);

    const statusInfo = document.createElement("p");
    statusInfo.classList.add("statusInfo");
    statusContainer.appendChild(statusInfo);


    spiciesInformation.textContent = results.species;
    planetInfo.textContent = results.origin.name;
    statusInfo.textContent = results.status;
}
rickAndMortyImages();

