"use strict";
let emni;
emni = 'Next Level web development';
emni.length;
emni.length;
function kgToGram(param) {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return `The Converted result is: ${value} gram`;
    }
    if (typeof param === "number") {
        const value = param * 1000;
        return value;
    }
}
const resultToBeNumber = kgToGram(1000);
const resultToBeString = kgToGram("1000");
console.log(resultToBeString);
