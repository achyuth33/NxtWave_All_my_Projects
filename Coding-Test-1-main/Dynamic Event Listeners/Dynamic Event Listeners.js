let myContainerElement = document.getElementById("myContainer");
let createBtnElement = document.getElementById("createBtn");
let headingElement = document.createElement("h1");
headingElement.classList.add("heading");
myContainer.appendChild(headingElement);

createBtnElement.onclick = function() {
    headingElement.textContent = "Main Heading element";
    headingElement.style.color = "#0000ff";
};
