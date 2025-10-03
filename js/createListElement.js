import createDate from "./createDate.js";

export function createListElement(name, date, checked = false) {
    const list = document.getElementById("shopping-list");

    const li = document.createElement("li");

    const itemContainer = document.createElement("div");
    itemContainer.className = "shopping-list__item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "item-checkbox";
    checkbox.checked = checked;

    const text = document.createElement("p");
    text.innerText = name;
    if (checked) text.classList.add("checked-text");

    const dateElement = createDate(date);

    const removeBtn = document.createElement("button");
    removeBtn.className = "shopping-list__remove";
    removeBtn.innerText = "✕";

    itemContainer.appendChild(checkbox);
    itemContainer.appendChild(text);
    itemContainer.appendChild(removeBtn);

    li.appendChild(itemContainer);
    li.appendChild(dateElement);

    list.appendChild(li);
}
