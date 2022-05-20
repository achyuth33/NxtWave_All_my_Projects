let messageEl = document.getElementById("message");

function inlineEventListener() {
    messageEl.textContent = "Inline event listener";
}

onEventListenerBtn.onclick = function() {
    messageEl.textContent = "onevent listener";
};

addEventListenerBtn.addEventListener("click", function() {
    messageEl.textContent = "addEventListener";
});
