let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let resultEl = document.getElementById("result");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let spinnerEl = document.getElementById("spinner");
let quoteInputEl = document.getElementById("quoteInput");

let url = "https://apis.ccbp.in/random-quote";
let options = {
    method: "GET"
};
fetch(url, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        let randomquote = jsonData.content;
        quoteDisplayEl.textContent = randomquote;
    });


let countdown = 0;

let intervalId = setInterval(function() {
    countdown = countdown + 1;
    timerEl.textContent = countdown + " seconds";
}, 1000);




function getQuote() {
    let options = {
        method: "GET"
    };
    let url = "https://apis.ccbp.in/random-quote";
    spinnerEl.classList.remove("d-none");
    quoteDisplayEl.classList.add("d-none");


    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let randomquote = jsonData.content;
            spinnerEl.classList.add("d-none");
            quoteDisplayEl.classList.remove("d-none");
            quoteDisplayEl.textContent = randomquote;
            clearInterval(uniqueId);


        });
}

resetBtnEl.addEventListener("click", getQuote);



function validateQuote() {
    clearInterval(intervalId);
    let textareaInputValue = quoteInputEl.value;
    if (textareaInputValue === jsonData.content) {
        resultEl.textContent = "correct";
    } else {
        resultEl.textContent = "TRY AGAIN";
    }


}


submitBtnEl.addEventListener("click", validateQuote);