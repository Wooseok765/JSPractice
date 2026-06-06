
const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    time: function (a, b) {
        return a * b;
    },
    minus: function (a, b) {
        return a - b;
    },
    divide: function (a, b) {
        return a / b;
    },
    power: function (base, power) {
        return base ** power;
    },
};

const result = calculator.power(6, 8);
console.log(result);
const age = 96;
function calculatorKrAge(ageOfForigner) {
    return ageOfForigner + 2;
}

const krAge = calculatorKrAge(age);
console.log(krAge);
