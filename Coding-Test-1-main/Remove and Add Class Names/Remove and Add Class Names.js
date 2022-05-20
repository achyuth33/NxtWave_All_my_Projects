let headingElement = document.getElementById("heading");
let btnElElement = document.getElementById("btnEl");

btnElElement.onclick = function() {
    headingElement.classList.remove("heading-old-styles");
    headingElement.classList.add("heading-new-styles");
};
