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
    // padStart(a, "b") String 타입에만 적용되며 해당 글자수가 a만큼이 아닐 시 앞자리를 b로 채움
    // padEnd(a, "b") 뒷자리에 채우는것
    clock.innerText = `${hours}:${minutes}:${second}`
    
}
getClock()
setInterval(getClock, 1);

/*
setInterval(sayHello, 5000);
// Run the function in every 5 sec

setTimeout(sayBye, 3000);
// Run the function 3 sec after starting the website
*/

