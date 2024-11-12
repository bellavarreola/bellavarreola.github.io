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

/* Declaring the alternative text for each image file */
const imageAltText = {
    "../img/wa11/pic1.jpg": "Authentic mediterranean cuisine in Portugal",
    "../img/wa11/pic2.jpg": "Inside of unique library in Portugal",
    "../img/wa11/pic3.jpg": "Trolley car on street in Portugal",
    "../img/wa11/pic4.jpg": "Cliff view at Cabo de Roca of ocean with lighthouse",
    "../img/wa11/pic5.jpg": "Pink Street in Lisbon with famous colorful umbrellas",
};

/* Looping through images */
for (let i = 0; i < filenames.length; i++) {
    const newImage = document.createElement('img');
    const filename = filenames[0].replace("{number}", i);

    const srcPath = `images/${filename}`;
    const altText = imageAltText[filename];

    newImage.setAttribute('src', srcPath);
    newImage.setAttribute('alt', altText);
    thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */