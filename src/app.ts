import { ListTemplate } from "./classes/ListTemplate.js";
import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { HasFormatter } from "./interfaces/hasFormatter.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list query instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul)

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let doc: HasFormatter;

  if (type.value === 'invoice') {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, 'end')
});

// GENERICS
const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name: 'yoshi', age: 40})

console.log(docOne);

// with interfaces
interface Resource<T> {
    uid: number,
    resourceType: string,
    data: T
}

const docTwo: Resource<object> = {
    uid: 1,
    resourceType: 'invoice',
    data: {name: 'yoshi', age: 40}
}

const docThree: Resource<string> = {
    uid: 2,
    resourceType: 'invoice',
    data: 'yoshi'
}

const docFour: Resource<string[]> = {
    uid: 3,
    resourceType: 'invoice',
    data: ['yoshi', 'luigi']
}