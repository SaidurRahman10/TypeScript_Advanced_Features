"use strict";
// const isAdult = age >= 18 ? 'adult' : 'no u r kid'
var _a, _b;
// console.log(isAdult)
//Nullish Coalesce Operator
// Null & adult
const isAuthenticatedUser = null;
const userName = isAuthenticatedUser !== null && isAuthenticatedUser !== void 0 ? isAuthenticatedUser : 'Guest';
const girl = {
    name: 'Honey',
    address: {
        city: 'Feni'
    },
    profession: 'Web Dev Senior',
};
const home = (_b = (_a = girl === null || girl === void 0 ? void 0 : girl.address) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : 'No home';
console.log(home);
