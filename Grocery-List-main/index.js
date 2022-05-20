let bgContainer = document.createElement("div");
bgContainer.classList.add("bg-container");
document.body.appendChild(bgContainer);

let headingElement = document.createElement("h1");
headingElement.classList.add("heading");
headingElement.textContent = "Grocery List";
bgContainer.appendChild(headingElement);

let listContainer = document.createElement("ul");
listContainer.classList.add("list-container");
bgContainer.appendChild(listContainer);

let groceryItems = ["Milk", "Peanut Butter", "Choco Chips", "Tomato Sauce", "Cup Cakes", "Noodles"];

for (let groceryItem of groceryItems) {
    let listElement = document.createElement("li");
    listElement.textContent = groceryItem;
    listElement.style.color = "black";
    listContainer.appendChild(listElement);
}

let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = "deliveryMode";
bgContainer.appendChild(inputElement);

let labelElement = document.createElement("label");
labelElement.setAttribute("for", "deliveryMode");
labelElement.classList.add("delivery-text");
labelElement.textContent = "Need Home Delivery";
bgContainer.appendChild(labelElement);

let breakEl = document.createElement("br");
bgContainer.appendChild(breakEl);

let buttonElement = document.createElement("button");
buttonElement.classList.add("btn", "btn-primary");
buttonElement.textContent = "Proceed to Pay";
bgContainer.appendChild(buttonElement);