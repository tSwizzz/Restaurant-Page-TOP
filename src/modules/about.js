export let aboutStatus = false;

const aboutContent = document.getElementById("content");
const aboutContainer = document.createElement('div');
aboutContainer.classList.add("aboutContainer");


export function aboutPage() {
    aboutStatus = true;
    aboutContainer.textContent = "wow";
    aboutContent.appendChild(aboutContainer);

}

export function removeAboutPage() {
    aboutStatus = false;
    while (aboutContainer.firstChild) {
        aboutContainer.removeChild(aboutContainer.firstChild);
    }
}

