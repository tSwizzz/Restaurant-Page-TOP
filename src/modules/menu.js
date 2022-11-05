import { homePage } from "./home";
import { aboutPage } from "./about";
export function menuPage() {
    console.log("menu"); //delete when done 

    const content = document.getElementById("content"); 

    const menuContainer = document.createElement('div');
    menuContainer.classList.add("menuContainer");
    content.appendChild(menuContainer);


    const item1 = document.createElement('p');
    item1.classList.add("item1");
    item1.textContent = "wow";
    menuContainer.appendChild(item1);
}



