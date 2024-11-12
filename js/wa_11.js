const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = [
    "../img/wa11/pic1.jpeg",
    "../img/wa11/pic2.jpeg",
    "../img/wa11/pic3.jpeg",
    "../img/wa11/pic4.jpeg",
    "../img/wa11/pic5.jpeg"
];
 console.log(imageFilenames[0]);
/* Declaring the alternative text for each image file */
const imageAltText = {
    "../img/wa11/pic1.jpeg": "Authentic mediterranean cuisine in Portugal",
    "../img/wa11/pic2.jpeg": "Inside of unique library in Portugal",
    "../img/wa11/pic3.jpeg": "Trolley car on street in Portugal",
    "../img/wa11/pic4.jpeg": "Cliff view at Cabo de Roca of ocean with lighthouse",
    "../img/wa11/pic5.jpeg": "Pink Street in Lisbon with famous colorful umbrellas",
};

/* Looping through images */
for (let i = 0; i < imageFilenames.length; i++) {
    const newImage = document.createElement('img');
    const filename = imageFilenames[i].replace("{number}", i);

    const srcPath = imageFilenames[i];
    const altText = imageAltText[srcPath];

    newImage.setAttribute('src', srcPath);
    newImage.setAttribute('alt', altText);


    newImage.addEventListener('click', () => {
        displayedImage.src = srcPath;
        displayedImage.alt = altText;
    });
    thumbBar.appendChild(newImage);
};

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    // Check the current class of the button
    const currentClass = btn.getAttribute('class');

    if (currentClass === 'dark') {
        // Change to "light" mode
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)'; // Darken overlay
    } else {
        // Change to "dark" mode
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)'; // Remove overlay darkening
    }
});
