"use strict";
const crush1 = {
    name: 'Honey',
    age: 22,
    profession: 'Web Dev Senior',
    address: 'Pakistan'
};
const crush2 = {
    name: 'Pro',
    profession: 'NEXT Lavel Web Dev Senior',
    address: 'BD'
};
const isCrushSingle = false;
// function 
const calculate = (number1, number2, operation) => {
    return operation(number1, number2);
};
calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);
