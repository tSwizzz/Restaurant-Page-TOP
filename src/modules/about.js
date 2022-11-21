export let aboutStatus = false;

const aboutContent = document.getElementById("content");
const aboutContainer = document.createElement('div');
aboutContainer.classList.add("aboutContainer");


export function aboutPage() {
    aboutContainer.textContent = "i think im almost done with this project lol";
    aboutContent.appendChild(aboutContainer);


}

export function removeAboutPage() {
    aboutStatus = false;
    console.log("wow");
    while (aboutContainer.firstChild) {
        aboutContainer.removeChild(aboutContainer.firstChild);
    }
    
}

