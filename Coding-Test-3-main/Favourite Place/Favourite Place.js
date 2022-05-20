let submitBtnElement = document.getElementById("submitBtn");
let textParagraphElement = document.getElementById("textParagraph");


submitBtnElement.addEventListener("click", function(e) {
    e.preventDefault();
    textParagraphElement.textContent = "Your favourite place is: " + document.querySelector('input[name="location"]:checked').value;
});
