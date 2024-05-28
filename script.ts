// explicit type: explicitly giving a variable a type
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'luigi';
age = 30;

// isLoggedIn = 25;
isLoggedIn = true;

// arrays
let ninjas: string[] = [];

ninjas.push('yoshi');
ninjas = ['mario', 'luigi'];

// union types
let mixed: (string|number|boolean)[] = [];

mixed.push(5);
mixed.push('hello');
mixed.push(true);
console.log(mixed);

let uid: number|string;

uid = 123;
uid = '123';

//objects
let ninjaOne: object;
ninjaOne = {name: 'yoshi', age: 30}
// ninjaOne = []; This is allowed because an array is a type of object

let ninjaTwo: {
    name: string,
    age: number,
    beltColour: string,
}