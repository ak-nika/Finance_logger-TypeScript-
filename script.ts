// "any" type
let age: any = 25;

age = true;
console.log(age);
age = 'hello';
console.log(age);
age = {name: 'luigi'};
console.log(age);

let mixed: any[] = [];
mixed.push(5);
mixed.push("mario");
mixed.push(false);
console.log(mixed);

let ninja: { name: any, age: any };