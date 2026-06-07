
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.body.querySelector("#greeting");

const HIDDNE_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
    loginForm.classList.add(HIDDNE_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreeting(userName);
}

function paintGreeting(username) {
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDNE_CLASSNAME);
}

const storedUserName = localStorage.getItem(USERNAME_KEY); // 모든 기능의 시작점

if (storedUserName === null) {
    loginForm.classList.remove(HIDDNE_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting(storedUserName);
}


