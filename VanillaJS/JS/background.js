const images = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpeg",
    "10.jpeg"
]

const chosenImage = images[Math.floor(Math.random()*quotes.length)];
// Math.ceil or Math.round possibly couse an error

const backImage = document.createElement("img");
backImage.src = `img/${chosenImage}`;
// img element의 src를(그림을 가져올 주소) 설정하는것

document.body.appendChild(backImage);
// body에 html 추가하는 기능