import phoneIcon from "../images/phoneguy.jpg";
export let aboutStatus = false;

const aboutContent = document.getElementById("content");
const aboutContainer = document.createElement('div');
aboutContainer.classList.add("aboutContainer");

export function aboutPage() {
    aboutStatus = true;
    aboutContent.appendChild(aboutContainer);

    const aboutDiv1 = document.createElement('div');
    const aboutDiv2 = document.createElement('div');
    aboutDiv1.classList.add("aboutDiv");
    aboutDiv2.classList.add("aboutDiv");


    const aboutInfo1 = document.createElement('p');
    const aboutInfo2 = document.createElement('p');
    aboutInfo1.classList.add("aboutInfo");
    aboutInfo2.classList.add("aboutInfo");
    aboutInfo1.textContent = "Reach us at 123-456-7890";
    aboutInfo2.textContent = "Email: edsburgers@fakeemail.com";

    aboutDiv1.appendChild(aboutInfo1);
    aboutDiv2.appendChild(aboutInfo2);

    aboutContainer.append(aboutDiv1, aboutDiv2);

    const phonePic = new Image();
    phonePic.src = phoneIcon;
    phonePic.classList.add("phonePic");
}

export function removeAboutPage() {
    aboutStatus = false;
    while (aboutContainer.firstChild) {
        aboutContainer.removeChild(aboutContainer.firstChild);
    }
    aboutContent.removeChild(aboutContainer);
}

