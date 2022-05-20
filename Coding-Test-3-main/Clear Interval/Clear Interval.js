let clearCount = document.getElementById("clearCount");
let counter = document.getElementById("counter");
let counterStart = 0;
let intervalId = setInterval(function() {
    counterStart = counterStart + 1;
    counter.textContent = counterStart;
}, 1000);
clearCount.onclick = function() {
    clearInterval(intervalId);
};
