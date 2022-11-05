import './styles.css';
import {homePage} from "./modules/home";
import {menuPage} from "./modules/menu";
import {aboutPage} from "./modules/about";
import {removeHomePage} from "./modules/home";
homePage();

const header = document.getElementById("header");
    const headerTitle = document.createElement('p');
    headerTitle.classList.add("headerTitle");
    headerTitle.textContent = "Ed's BITCHIN' Burgers";
    header.appendChild(headerTitle);

    const home = document.createElement('button');
    home.classList.add("home");
    home.textContent = "Home"
    header.appendChild(home);

    const menu = document.createElement('button');
    menu.classList.add("menu");
    menu.textContent = "Menu"
    header.appendChild(menu);

    const about = document.createElement('button');
    about.classList.add("about");
    about.textContent = "About"
    header.appendChild(about);

const homeBtn = document.querySelector(".home");     homeBtn.addEventListener('click', homePage);
const menuBtn = document.querySelector(".menu");     menuBtn.addEventListener('click', menuPage);
const aboutBtn = document.querySelector(".about");   aboutBtn.addEventListener('click', aboutPage);





