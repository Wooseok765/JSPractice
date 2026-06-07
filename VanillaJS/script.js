const h1 = document.querySelector("div.hello:first-child h1");


function handleTitleClick() {
    const clickedClass = "active";
    console.log(h1.classList.toggle(clickedClass));
    // If the token, that toggle method is parsing, exists already in the element,
    // it return false and remove the token or vise versa
}

h1.addEventListener("click", handleTitleClick);