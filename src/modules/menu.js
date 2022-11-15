export let menuStatus = false;

const menuContent = document.getElementById("content");
const menuContainer = document.createElement('div');
menuContainer.classList.add("menuContainer");
menuContent.appendChild(menuContainer);

export function menuPage() {
    menuStatus = true;
        const menu1 = document.createElement('div');
        menu1.classList.add('menu1');
        menuContainer.appendChild(menu1);

        const menu1Name = document.createElement('p');
        menu1Name.classList.add("menu1Name");
        menu1Name.textContent = "Old Fashioned: $8.95";
        menu1.appendChild(menu1Name);

        const menu1Info = document.createElement('p');
        menu1Info.classList.add("menu1Info");
        menu1Info.textContent = "Lettuce, Tomatoes, Cheese, Onions, Pickles, Mustard";
        menu1.appendChild(menu1Info);
}

export function removeMenuPage() {
    menuStatus = false;
    while (menuContainer.firstChild) {
        menuContainer.removeChild(menuContainer.firstChild);
    }
}



