const title2 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    // console.log("Title was clicked");
    title2.style.color = "yellow";
}

title2.addEventListener("click", handleTitleClick);
// Passing a target action and a function
// The function should not has parenthesis
// because that will be executed when title2 is clicked

function mouseHovering(){
    // console.log("Mouse is here!!");
    title2.innerText = "Mouse is here!!";
}

title2.addEventListener("mouseenter", mouseHovering)

function mouseLeave(){
    // console.log("Mouse is gone");
    title2.innerText = "Mouse goen";
}

title2.addEventListener("mouseleave", mouseLeave);
// console.dir(title2); -> you can see every properties even available events