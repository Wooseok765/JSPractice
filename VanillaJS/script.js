const hellos = document.getElementsByClassName("hello");
console.log(hellos);

const title = document.getElementsByTagName("h1");
console.log(title)

const title2 = document.querySelector("h1.hello");
console.log("sellector", title2)
// Call elements taged h1 from the parent elements that class name is hello
// The parent is not being called
// It is searching a CSS selector like h1
// Able to use without classname or id

const title3 = document.querySelectorAll(".hello h1");
console.log(title3)

title2.innerText = "shut up";
// This isn't applied to .querySelectorAll
// or functions that return more than one element