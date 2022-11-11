export let menuStatus = false;

let menuContent = document.getElementById("content"); 
let menuDiv = document.createElement('div');
menuContent.appendChild(menuDiv);

let word = document.createElement('p');
export function menuPage() {
    menuStatus = true;
    word.textContent = "test";
    word.classList.add("word");
    menuDiv.appendChild(word);
}

export function removeMenuPage() {
    console.log('remove menu'); //delete when done
    menuStatus = false;
    while (menuDiv.firstChild) {
        menuDiv.removeChild(menuDiv.firstChild);
    }
}



