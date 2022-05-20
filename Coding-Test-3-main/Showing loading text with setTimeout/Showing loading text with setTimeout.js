let button = document.getElementById("button");

button.onclick = function() {
    let intervalId = setTimeout(function() {
        button.textContent = "Loading...";
    }, 1000);
    button.textContent = "Show Loading for 1 sec";
};
