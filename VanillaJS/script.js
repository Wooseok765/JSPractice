
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const h1 = document.body.querySelector("h1");

const HIDDNE_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDNE_CLASSNAME);
    const userName = loginInput.value;
    // h1.innerText = "Hello, " + userName;
    h1.innerText = `Hello, ${userName}`; // Same function as a line above
    h1.classList.remove(HIDDNE_CLASSNAME);
}
//Changes the name of Form then it will disappear because of CSS

loginForm.addEventListener("submit", onLoginSubmit);
