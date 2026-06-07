
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const h1 = document.body.querySelector("h1");

const HIDDNE_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
    // event.preventDefault();
    loginForm.classList.add(HIDDNE_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    // saving user name in the browser
    // required a key word and value

    paintGreeting(userName);
    // 새로 입력하는 이름정보로 function 실행
    // 아래 if statement에서 onLoginSubmit()이 호출되면서 유저가 input에 입력한
    // 이름정보가 들어옴
}

function paintGreeting(username) {
    h1.innerText = `Hello, ${username}`;
    h1.classList.remove(HIDDNE_CLASSNAME);
}

const storedUserName = localStorage.getItem(USERNAME_KEY); // 모든 기능의 시작점

if (storedUserName === null) {
    loginForm.classList.remove(HIDDNE_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting(storedUserName);
    // local storage에서 넘어오는 이름정보로 function 실행
}


