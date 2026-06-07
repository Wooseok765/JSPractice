const loginForm = document.getElementById("login-form");

const loginInput = loginForm.querySelector("input");
// It returns the first matching element directly

/*
const loginButton = loginForm.getElementsByTagName("button");
// It returns HTML collection (object) even if there is only one 
// So thin code will look up button elements inside of the loginForm 
// then return a list of buttons
// so does getElementByClassName
// It can't call eventListener
*/
const loginButton = loginForm.querySelector("button");

function handleButtonClick() {
    
    const userName = loginInput.value;
    /*
    if (userName === "") { form 에서 사용 가능한 required를 대체
        alert("Please, enter a name");
    } else if (userName.length > 15) { form에서 사용가능한 maxlength를 대체
        alert("Your name is sucks")
    } else {
        alert("Hello, " + userName);
    }
    */
}

loginButton.addEventListener("click", handleButtonClick);