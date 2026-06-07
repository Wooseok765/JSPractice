
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");




function onLoginSubmit(event) {
    event.preventDefault();
    // It is blocking an automatic submit
    // then the website is not going to refresh after submiting
    const userName = loginInput.value;
    console.log(event);

}

loginForm.addEventListener("submit", onLoginSubmit);
// addEventListener send arguements to the target