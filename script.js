// explicit type: explicitly giving a variable a type
var character;
var age;
var isLoggedIn;
// age = 'luigi';
age = 30;
// isLoggedIn = 25;
isLoggedIn = true;
// arrays
var ninjas = [];
ninjas.push('yoshi');
ninjas = ['mario', 'luigi'];
// union types
var mixed = [];
mixed.push(5);
mixed.push('hello');
mixed.push(true);
console.log(mixed);
var uid;
uid = 123;
uid = '123';
//objects
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
// ninjaOne = []; This is allowed because an array is a type of object
var ninjaTwo;
