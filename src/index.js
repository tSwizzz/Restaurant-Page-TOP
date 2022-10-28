import './styles.css';
import burgerIcon from "./images/burger.png";
import {homePage} from "./modules/home";
import {menuPage} from "./modules/menu";
import {aboutPage} from "./modules/about";

const header = document.getElementById("header");
    const headerTitle = document.createElement('h1');
    headerTitle.textContent = "Ed's BITCHIN' Burgers";
    headerTitle.classList.add("headerTitle");
    header.appendChild(headerTitle);
    
const burgerPic = new Image();
burgerPic.src = burgerIcon;
burgerPic.classList.add("burgerPic");
content.appendChild(burgerPic);

homePage();
aboutPage();
menuPage();






