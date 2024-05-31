import { Invoice } from './classes/invoice';
const inOne = new Invoice('mario', 'work on the mario website', 250);
const inTwo = new Invoice('luigi', 'work on the luigi website', 300);
let invoices = [];
invoices.push(inOne);
invoices.push(inTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
