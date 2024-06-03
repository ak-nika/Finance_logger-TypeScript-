import { ListTemplate } from "./classes/ListTemplate.js";
import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list query instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// ENUMS: They automatically associate themselves with the number of their index
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["book"] = 0] = "book";
    ResourceType[ResourceType["character"] = 1] = "character";
    ResourceType[ResourceType["director"] = 2] = "director";
    ResourceType[ResourceType["film"] = 3] = "film";
    ResourceType[ResourceType["person"] = 4] = "person";
    ResourceType[ResourceType["author"] = 5] = "author";
})(ResourceType || (ResourceType = {}));
const docTwo = {
    uid: 1,
    resourceType: ResourceType.person,
    data: { name: 'yoshi', age: 40 }
};
const docThree = {
    uid: 2,
    resourceType: ResourceType.book,
    data: { title: "Omniscient Reader's Viewpoint" }
};
const docFour = {
    uid: 3,
    resourceType: ResourceType.character,
    data: { name: "Kim Dokja" }
};
console.log(docTwo, docThree, docFour);
