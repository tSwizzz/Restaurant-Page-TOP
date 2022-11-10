import burgerIcon from "../images/burger.jpg";
import squidPicture from "../images/squidwardstare.png";
export let homeStatus = false;

let content = document.getElementById("content"); 
let imageTxt = document.createElement('p');
let imageTxt2 = document.createElement('p');
let squidPic;
let burgerPic;
export function homePage() {
    homeStatus = true;
        imageTxt = document.createElement('p');
        imageTxt2 = document.createElement('p');
        imageTxt.classList.add("imageTxt");
        imageTxt2.classList.add("imageTxt");
        imageTxt.textContent = "The Juiciest burgers a man has ever laid his God forbidden eyes on.";
        imageTxt2.textContent = "Just look at Squidward's reaction!";
        content.appendChild(imageTxt);
        content.appendChild(imageTxt2);

        squidPic = new Image();
        squidPic.src = squidPicture;
        squidPic.classList.add("squidPic");
        content.appendChild(squidPic);

        burgerPic = new Image();
        burgerPic.src = burgerIcon;
        burgerPic.classList.add("burgerPic");
        content.appendChild(burgerPic);
}

export function removeHomePage() {
    console.log("remove home"); // delete when done
    homeStatus = false;
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}



