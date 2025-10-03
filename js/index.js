import { createListElement } from "./createListElement.js";
import emptyList from "./emptyList.js";
import checkboxEffect from "./checkbox.js";

const form = document.getElementById("shopping-form");
const input = document.getElementById("input-item");
const list = document.getElementById("shopping-list");

let shoppingItems = JSON.parse(localStorage.getItem("shoppingItems")) || [];

shoppingItems.forEach(item => createListElement(item.name, item.date, item.checked));
emptyList();

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value.trim();
    if (!value) return; 

    const newItem = {
        name: value,
        date: new Date(),
        checked: false
    };

    shoppingItems.push(newItem);
    localStorage.setItem("shoppingItems", JSON.stringify(shoppingItems));

    createListElement(newItem.name, newItem.date, newItem.checked);
    emptyList();
    input.value = "";
});


list.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;

    
    if (e.target.classList.contains("item-checkbox")) {
        checkboxEffect(e.target);
        const index = Array.from(list.children).indexOf(li);
        shoppingItems[index].checked = e.target.checked;
        localStorage.setItem("shoppingItems", JSON.stringify(shoppingItems));
    }

    
    if (e.target.classList.contains("shopping-list__remove")) {
        const index = Array.from(list.children).indexOf(li);
        shoppingItems.splice(index, 1);
        localStorage.setItem("shoppingItems", JSON.stringify(shoppingItems));
        li.remove();
        emptyList();
    }
});
