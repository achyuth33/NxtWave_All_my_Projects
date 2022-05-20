let inputValueElement = document.getElementById("inputValue");
let nameElement = document.getElementById("name");
let saveBtnElement = document.getElementById("saveBtn");
let resetBtn = document.getElementById("resetBtn");

saveBtnElement.onclick = function() {
    userInputVal = inputValueElement.value;
    nameElement.textContent = userInputValue;
    localStorage.setItem("name", userInputValue);
};

resetBtn.onclick = function() {
    inputValueElement.value = "";
    localStorage.removeItem("name");
    nameElement.textContent = "Varun";
};
