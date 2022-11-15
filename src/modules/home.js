import burgerIcon from "../images/burger.jpg";
import squidPicture from "../images/squidwardstare.png";
export let homeStatus = false;

const homeContent = document.getElementById("content"); 
const homeDiv = document.createElement('div');
homeContent.appendChild(homeDiv);

export function homePage() {
    homeStatus = true;
    
    const imageTxt = document.createElement('p');
    const imageTxt2 = document.createElement('p');
    imageTxt.classList.add("imageTxt");
    imageTxt2.classList.add("imageTxt");
    imageTxt.textContent = "The Juiciest burgers a man has ever laid his God forbidden eyes on.";
    imageTxt2.textContent = "Just look at Squidward's reaction!";
    homeDiv.appendChild(imageTxt);
    homeDiv.appendChild(imageTxt2);

    const squidPic = new Image();
    squidPic.src = squidPicture;
    squidPic.classList.add("squidPic");
    homeDiv.appendChild(squidPic);

    const burgerPic = new Image();
    burgerPic.src = burgerIcon;
    burgerPic.classList.add("burgerPic");
    homeDiv.appendChild(burgerPic);
}

export function removeHomePage() {
    homeStatus = false;
    while (homeDiv.firstChild) {
        homeDiv.removeChild(homeDiv.firstChild);
    }}



