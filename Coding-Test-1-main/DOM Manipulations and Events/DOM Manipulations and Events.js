let heading1Element = document.getElementById("heading1");
let heading2Element = document.getElementById("heading2");

function changeText() {
    heading1Element.textContent = "Static";
    heading1Element.style.color = "#eb34c0";
    heading2Element.textContent = "Responsive";
    heading2Element.style.backgroundColor = "#197030";
}
