let inputElement = document.getElementById("inputElement");
let passwordElement = document.getElementById("passwordElement");
let messageTextElement = document.getElementById("messageText");

function signIn() {
    let inputValue = inputElement.value;
    let passwordValue = passwordElement.value;
    if (inputValue === "") {
        messageTextElement.textContent = "Please Enter Username";
    }
    else if (passwordValue === "") {
    messageTextElement.textContent = "Please Enter Password";
    }
    else {
        messageTextElement.textContent = "Welcome";
    }
}
