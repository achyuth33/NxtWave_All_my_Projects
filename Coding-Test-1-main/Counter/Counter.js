let count = 0;
const counter = document.getElementById("counterValue");

function isEven(num) {
    return num % 2 ? false : true;
}

function onDecrement() {
    if (isEven(count)) {
        count = count - 2;
    } else {
        count = count - 1;
    }
    counter.textContent = count;
}

function onReset() {
    count = 0;
    counter.textContent = count;
}

function onIncrement() {
    if (isEven(count)) {
        count = count + 5;
    } else {
        count = count + 10;
    }
    counter.textContent = count;
}
