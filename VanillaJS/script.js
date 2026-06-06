/*
const a = 5;
var b = 2; // too old style
let myName = "Wooseok";
console.log(myName)
console.log(a + b);
console.log(a / b);
console.log(a * b);
console.log(1 + 1);
myName = "Hell";
console.log(myName)
b = "wooseok";
console.log(b)
*/

/*
const amIFat = true;
console.log(amIFat);

const nothing = null;
console.log(nothing);

let something; // undefined variable
console.log(something, nothing, amIFat)
*/

const mon = "Monday";
const tue = "Tuesday";
const wed = "Wednesday";
const thu = "Thursday";
const fri = "Friday";
const sat = "Saturday";
const sun = "Sunday";

const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun];

console.log(daysOfWeek);

const nonesense = [1, 2, "hello", true, null, undefined];
console.log(nonesense, daysOfWeek);

console.log(daysOfWeek[4]);
daysOfWeek.push("sun2");
console.log(daysOfWeek);
