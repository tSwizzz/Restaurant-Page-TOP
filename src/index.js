//  the "__Status" variables prevent the page from repeatedly placing the same tab over and over again on top of each other
import './styles.css';
import {homePage, homeStatus, removeHomePage} from "./modules/home";
import {menuPage, menuStatus, removeMenuPage} from "./modules/menu";
import {aboutPage, aboutStatus, removeAboutPage} from "./modules/about";

homePage(); //start site at "home" tab

// **HEADER - creates buttons for each "tab" in the header (Home, Menu, About)
const header = document.getElementById("header");
    const headerTitle = document.createElement('p');
    headerTitle.classList.add("headerTitle");
    headerTitle.textContent = "Ed's BITCH'N Burgers";
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

// will display current tab clicked and remove the other tabs
const homeBtn = document.querySelector(".home");     
    homeBtn.addEventListener('click', () => {
        if(homeStatus)  return;
        else {
            homePage();
            if(menuStatus == true)
                removeMenuPage();
            else
                removeAboutPage();
        }
    });

const menuBtn = document.querySelector(".menu");     
    menuBtn.addEventListener('click', () => {
        if(menuStatus)  return;
        else {
            menuPage();
            if(homeStatus)
                removeHomePage();
            else
                removeAboutPage();
        }
    });
const aboutBtn = document.querySelector(".about");   
    aboutBtn.addEventListener('click', () => {
        if(aboutStatus) return;
        else {
            aboutPage();
            if(homeStatus)
                removeHomePage();
            else 
                removeMenuPage();
        }
    });





