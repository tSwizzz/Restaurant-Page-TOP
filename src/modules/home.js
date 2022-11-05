import burgerIcon from "../images/burger.jpg";
import squidPicture from "../images/squidwardstare.png";
import { aboutPage } from "./about";
import { menuPage } from "./menu";
export function homePage() {
    console.log("home"); //delete when done
    const content = document.getElementById("content"); 
      
        const imageTxt = document.createElement('p');
        const imageTxt2 = document.createElement('p');
        imageTxt.classList.add("imageTxt");
        imageTxt2.classList.add("imageTxt");
        imageTxt.textContent = "The Juiciest burgers a man has ever laid his God forbidden eyes on.";
        imageTxt2.textContent = "Just look at Squidward's reaction!";
        content.appendChild(imageTxt);
        content.appendChild(imageTxt2);

        const squidPic = new Image();
        squidPic.src = squidPicture;
        squidPic.classList.add("squidPic");
        content.appendChild(squidPic);

        const burgerPic = new Image();
        burgerPic.src = burgerIcon;
        burgerPic.classList.add("burgerPic");
        content.appendChild(burgerPic);
}

export function removeHomePage() {
    console.log("did it work");
}



