const API_KEY = "c6064b3702902d25eba9a914a8f68891";
const locationArea = document.querySelector("div#weather span:first-child");// span:nth-child(숫자) 는 div#weather 안에서 00번째이면서 span 타입인 요소를 찾으라는 뜻임
const weatherArea = document.querySelector("div#weather span:last-child"); 
const tempertureArea = document.querySelector("div#weather span:nth-of-type(2)"); // span들 중에서 2번째를 찾는것(부모는 똑같음)


function geoOk(position) {
    const lat = position.coords.latitude; // position 내부에 저장되어있는 위치정보를 해당 태그로 가져오는것(위도)
    const lng = position.coords.longitude; // 경도
    alert(`You are at ${lat} / ${lng}`);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => { 
        // fetch(url) ; get request를 url주소로 보냄. fetch()는 promise를 return함 그래서 딜레이 되어도 오류 안남
        // .then(response => response.json()) : JSON형식으로 온 response의 body를 JS object로 바꿈
        // .then(data => {}) : converted object is gonna be called 'data', then can be used inside of the {}

        // console.log(data.name, data.weather[0].main, data.main["temp"]) 내부에서 어떻게 찾아야 하는지 확인용
        
        const location = data.name;
        const weather = data.weather[0].main;
        const temperature = data.main["temp"];
        locationArea.innerText = location;
        tempertureArea.innerText = temperature;
        weatherArea.innerText = weather;
    });
}

function geoNotOk() {
    alert("Impossible to spot your location")
}

navigator.geolocation.getCurrentPosition(geoOk, geoNotOk);