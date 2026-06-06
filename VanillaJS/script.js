/*
function sayHello(a){
    console.log("Hello! ", a);
}

sayHello("Wooseok");
sayHello("Nicco");

function plus(a=0, b=0){
    console.log(a + b);
}

plus(18, 79);
plus();

function divide(a=0, b=1){
    console.log(a / b);
}
divide(9, 5)
*/

const player={
    name: "Wooseok",
    sayHello: function(a){
        console.log("hello!", a);
    },
};
console.log(player.name);
player.sayHello(player.name);
const hi = ["hello", "greeting"];
console.log(hi);
console.log(hi[1]);
hi[1] = "What's up";
console.log(hi);
hi[2] = "how are you?";
console.log(hi);
hi[8] = "What's the story?"
console.log(hi);