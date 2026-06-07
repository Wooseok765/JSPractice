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
// img폴더 내의 ${chosenImage}라는 이름을 가진 jpeg형식의 파일에 접근하는 중
// 그래서 어레이에 정확한 이름을 넣어야 했음

document.body.appendChild(backImage);
// body에 html 추가하는 기능