const age = parseInt(prompt("How old are u"));
 // bring up a window able to write something
 // then convert the return value into integer

console.log(typeof age);
console.log(age);

console.log(isNaN(age));

if(isNaN(age) || age < 0){
    console.log("Please write a real positive numner");
}else if(age <= 19){
    console.log("You shall not drink");
}else if(age > 19 && age < 50){
    console.log("You can drink");
}else if(age === 101){ 
    // Operator '==' will convert the second value's type same as the base number
    // but operator '===' does not do that
    // !=, !==
    console.log("Wow!!");
}
else{
    console.log("Stop drinking, if you want to live long");
}

