"use strict";
const myInfo5 = {
    name: "Sabbir",
    age: 100,
    sallery: 100000,
};
const addMeOnYourMind65 = (myInfo) => {
    const crush = "Sakura";
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const result500 = addMeOnYourMind(myInfo);
