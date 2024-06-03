// interfaces
interface isPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: isPerson = {
    name: 'Shaun',
    age: 30,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number{
        console.log('I spent',amount);
        return amount;
    }
};

const greetPerson = ( person: isPerson ) => {
    console.log("Hello ", person.name);
}

greetPerson(me)

let someone: isPerson;

console.log(me)

import { Invoice } from './classes/invoice';

const inOne = new Invoice('mario', 'work on the mario website', 250);
const inTwo = new Invoice('luigi', 'work on the luigi website', 300);

let invoices: Invoice[] = [];
invoices.push(inOne)
invoices.push(inTwo)

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
})

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});