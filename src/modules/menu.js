export let menuStatus = false;

export function menuPage() {
    menuStatus = true;
    const content = document.getElementById("content"); 

    const menuContainer = document.createElement('div');
    menuContainer.classList.add("menuContainer");
    content.appendChild(menuContainer);

    for(let k = 0; k < 5; k++) {
        const item1 = document.createElement('p');
        item1.classList.add("item1");
        item1.textContent = "wow";
        menuContainer.appendChild(item1);
    }
}

export function removeMenuPage() {
    console.log('remove menu'); //delete when done
    menuStatus = false;

}



