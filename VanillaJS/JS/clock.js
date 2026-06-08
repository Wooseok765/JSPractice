const clock = document.querySelector("h2#clock");

function sayHello(){
    console.log("hello");
}

function sayBye(){
    console.log("bye");
}

function getClock(){
    const date = new Date(); // date object
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");
    const milisec = String(date.getMilliseconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${second}`
    
}
getClock()
setInterval(getClock, 1);

