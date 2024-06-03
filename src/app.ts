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

// ENUMS: They automatically associate themselves with the number of their index
enum ResourceType { book, character, director, film, person, author }

interface Resource<T> {
    uid: number,
    resourceType: number,
    data: T
}

const docTwo: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.person,
    data: {name: 'yoshi', age: 40}
}

const docThree: Resource<object> = {
    uid: 2,
    resourceType: ResourceType.book,
    data: { title: "Omniscient Reader's Viewpoint" }
}

const docFour: Resource<object> = {
    uid: 3,
    resourceType: ResourceType.character,
    data: { name: "Kim Dokja" }
}

console.log(docTwo, docThree, docFour)