export let menuStatus = false;

const menuContent = document.getElementById("content");
const menuContainer = document.createElement('div');
menuContainer.classList.add("menuContainer");
menuContent.appendChild(menuContainer);


const cardInfo = (title, description) => {
    return {title, description};
};

const cards = [
    cardInfo("Old Fashioned: $8.95", "Lettuce, Tomatoes, Cheese, Onions, Pickles, Mustard"),
    cardInfo("Sloppy Joe's: $7.95", "Tomatoes, Onions, Pickles, Mustard, Cheese, Chili"),
    cardInfo("The Supreme: $10.95", "SourDough Bread, Lettuce, Tomatoes, Double Meat, Double Cheese, Onions, Pickles, Mustard" )
]

function generateMenu(mContainer) {

    cards.forEach ((card) => {
        const menu1 = document.createElement('div');
        const menu1Name = document.createElement('p');
        const menu1Info = document.createElement('p');

        menu1.classList.add('menu1');
        menu1Name.classList.add("menu1Name");
        menu1Info.classList.add("menu1Info");

        menu1Name.innerText = card.title;
        menu1Info.innerText = card.description;

        menu1.append(menu1Name, menu1Info);
        mContainer.appendChild(menu1);
    });
}


export function menuPage() {
    menuStatus = true;
    generateMenu(menuContainer);

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



