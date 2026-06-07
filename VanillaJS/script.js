const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    h1.style.color = "yellow";
}

function mouseHovering() {
    h1.innerText = "Mouse is here!!";
}

function mouseLeave() {
    h1.innerText = "Mouse goen";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
    // Call document when user resize the window
    // then access body.style.backgroundcolor

    /* Only body, head, title, etc that are important things can be accessed by document. form
       other elements need querySelector() or getElementBy...() */
}

function handleWindowCopy() {
    alert("You copied h1 in my website!!");
}

function handleWindowOffLine() {
    alert("Wifi signal is cut out");
}

function handleWindowOnLine() {
    alert("Internet is back!!");
}


h1.onclick = handleTitleClick;
h1.onmouseenter = mouseHovering;
h1.onmouseleave = mouseLeave;
// Upside of event listener: can use a removeEventListener later

window.addEventListener("resize", handleWindowResize);
// window is an object

// window.addEventListener("copy", handleWindowCopy);
h1.addEventListener("copy", handleWindowCopy);

window.addEventListener("offline", handleWindowOffLine);
window.addEventListener("online", handleWindowOnLine);