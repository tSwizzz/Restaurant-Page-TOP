export let menuStatus = false;

const menuContent = document.getElementById("content");
const menuContainer = document.createElement('div');
menuContainer.classList.add("menuContainer");


const cardInfo = (title, description) => {
    return {title, description};
};
const cards = [
    cardInfo("Old Fashioned: $8.95", "Lettuce, Tomatoes, Cheese, Onions, Pickles, Mustard"),
    cardInfo("Sloppy Joe's: $7.95", "Tomatoes, Onions, Pickles, Mustard, Cheese, Chili"),
    cardInfo("The Supreme: $10.95", "SourDough Bread, Lettuce, Tomatoes, Double Meat, Double Cheese, Onions, Pickles, Mustard"),
    cardInfo("The Bitch'n Ed: $12.95", "Triple Meat, Triple Cheese, Lettuce, Tomatoes, Cheese, Onions, Pickles, Mushrooms, BBQ Sauce, Mustard"),
    cardInfo("The Kid Burger: $5.95", "Jr. Patty, Lettuce, Tomatoes, Cheese, Onions"),
    cardInfo("Mozzarella Sticks: $3.95", "4 Piece Mozzarella Sticks with Marinara Dipping Sauce")
];

function generateMenu(mContainer) {

    cards.forEach ((card) => {
        const menuDiv = document.createElement('div');
        const menuName = document.createElement('p');
        const menuInfo = document.createElement('p');

        menuDiv.classList.add('menuDiv');
        menuName.classList.add("menuName");
        menuInfo.classList.add("menuInfo");

        menuName.innerText = card.title;
        menuInfo.innerText = card.description;

        menuDiv.append(menuName, menuInfo);
        mContainer.appendChild(menuDiv);
    });
}


export function menuPage() {
    menuStatus = true;
    menuContent.appendChild(menuContainer);
    generateMenu(menuContainer);
}

export function removeMenuPage() {
    menuStatus = false;
    while (menuContainer.firstChild) {
        menuContainer.removeChild(menuContainer.firstChild);
    }
}



