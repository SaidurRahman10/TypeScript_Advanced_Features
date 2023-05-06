"use strict";
// Arrow Function 
const createArray = (param) => {
    return [param];
};
const createArray2 = (param) => {
    return [param];
};
const result = createArray2("Bangladesh");
const result2 = createArray2(true);
const result9 = createArray2({ name: 'Naruto Uzumaki', roll: 40 });
const result5 = createArray2({ name: 'Naruto Uzumaki', roll: 40 });
// Generic Tuple | we can add to type of dataType
const createArrayTuple = (param1, param2) => {
    return [param1, param2];
};
const TupleResult = createArrayTuple('bangladesh', true);
// Spread Operator
const myInfo = {
    name: "Sabbir",
    age: 100,
    sallery: 100000,
};
const addMeOnYourMind = (myInfo) => {
    const crush = "Sakura";
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const result55 = addMeOnYourMind(myInfo);
console.log(result55);
