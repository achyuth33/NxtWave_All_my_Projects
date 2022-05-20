let myContainerElement = document.getElementById("myContainer");

let headingElement = document.createElement("h1");
headingElement.textContent = "Main heading element appended dynamically";
headingElement.style.color = "#0000ff";
headingElement.classList.add("heading");
myContainer.appendChild(headingElement);
