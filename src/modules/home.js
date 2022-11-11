import burgerIcon from "../images/burger.jpg";
import squidPicture from "../images/squidwardstare.png";
export let homeStatus = false;

let homeContent = document.getElementById("content"); 
let homeDiv = document.createElement('div');
homeContent.appendChild(homeDiv);
let imageTxt = document.createElement('p');
let imageTxt2 = document.createElement('p');
let squidPic;
let burgerPic;
homePage();
export function homePage() {
    homeStatus = true;
        imageTxt.classList.add("imageTxt");
        imageTxt2.classList.add("imageTxt");
        imageTxt.textContent = "The Juiciest burgers a man has ever laid his God forbidden eyes on.";
        imageTxt2.textContent = "Just look at Squidward's reaction!";
        homeDiv.appendChild(imageTxt);
        homeDiv.appendChild(imageTxt2);

        squidPic = new Image();
        squidPic.src = squidPicture;
        squidPic.classList.add("squidPic");
        homeDiv.appendChild(squidPic);

        burgerPic = new Image();
        burgerPic.src = burgerIcon;
        burgerPic.classList.add("burgerPic");
        homeDiv.appendChild(burgerPic);
}

export function removeHomePage() {
    console.log("remove home"); // delete when done
    homeStatus = false;
    while (homeDiv.firstChild) {
        homeDiv.removeChild(homeDiv.firstChild);
    }}



