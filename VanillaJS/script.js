const title2 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    console.log("Title was clicked");
}

title2.addEventListener("click", handleTitleClick);
// Passing a target action and a function
// The function should not has parenthesis
// because that will be executed when title2 is clicked