const images = ["01.jpg","02.jpg","03.jpg"];
const Randomimage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.id = 'background';

bgImage.src=`img/${Randomimage}`;

document.body.appendChild(bgImage);