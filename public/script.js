"use strict";
let greet;
// greet = 'hello';
greet = () => {
    console.log('hello');
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, '20');
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 7); //This sets the result to the return value as well as the type
