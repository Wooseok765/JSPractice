const h1 = document.querySelector("div.hello:first-child h1");

/*
function handleTitleClick() {
    const activeClass = "active originName"; // To avoid typo
    if(h1.className === activeClass){
        h1.className = "";
    }else{
        h1.className = activeClass;
    }
    
}    
// set up this element's class name 'active' when it is clicked
// via html, CSS read the class name
// then the element's color will be changed to tomato
// because it is set up the class name 'active' is supposed to be blue in CSS
 */

function handleTitleClick() {
    const activeClass = "active"; // To avoid typo
    if(h1.classList.contains(activeClass)){
        // Check whether h1 has class names out of 'activeClass'
        h1.classList.remove(activeClass);
    }else{
        h1.classList.add(activeClass);
        // After getting the additional class name(active),
        // CSS changes color of the text
    }
    // This code means an element can have number of class names
    
}

h1.addEventListener("click", handleTitleClick);