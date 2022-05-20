let bookmarks = [{
    bookmarkId: "bookmark1",
    name: "Learning Portal",
    url: "https://learning.ccbp.in/",
}, ];


let bookmarkFormEle = document.getElementById("bookmarkForm");

let siteNameInputEle = document.getElementById("siteNameInput");
let siteUrlInputEle = document.getElementById("siteUrlInput");


let siteNameErrMsgEle = document.getElementById("siteNameErrMsg");
let siteUrlErrMsgEle = document.getElementById("siteUrlErrMsg");

let submitBtnEle = document.getElementById("submitBtn");
let bookmarksListEle = document.getElementById("bookmarksList");


function createAndAppendItem(item) {
    let listEle = document.createElement("li");
    bookmarksListEle.appendChild(listEle);

    let listHeadingContainerEle = document.createElement("div");
    listHeadingContainerEle.classList.add("list-heading-container", "d-flex", "flex-row", "mb-3");
    listEle.appendChild(listHeadingContainerEle);

    let listHeadingEle = document.createElement("h1");
    listHeadingEle.classList.add("list-heading");
    listHeadingEle.textContent = item.name;
    listHeadingContainerEle.appendChild(listHeadingEle);

    let smallButtonContainerEle = document.createElement("div");
    smallButtonContainerEle.classList.add("small-button-alignment");
    listHeadingContainerEle.appendChild(smallButtonContainerEle);


    let smallButtonEle = document.createElement("button");
    smallButtonEle.classList.add("btn", "btn-primary");
    smallButtonContainerEle.appendChild(smallButtonEle);

    let anchEle = document.createElement("a");
    anchEle.setAttribute("href", item.url);
    anchEle.textContent = "Visit";
    anchEle.classList.add("anch-color");
    smallButtonEle.appendChild(anchEle);
}

for (let item of bookmarks) {
    createAndAppendItem(item);
}

function onAddListItem() {
    let bookmarksCount = bookmarks.length;
    bookmarksCount = bookmarksCount + 1;

    let siteNameInputValue = siteNameInputEle.value;
    let siteUrlInputValue = siteUrlInputEle.value;

    let newItem = {
        bookmarkId: bookmarksCount,
        name: siteNameInputValue,
        url: siteUrlInputValue
    };
    createAndAppendItem(newItem);
    siteNameInputEle.value = "";
    siteUrlInputEle.value = "";
}


siteNameInputEle.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsgEle.textContent = "*Required";
    } else {
        siteNameErrMsgEle.textContent = "";
    }
});

siteUrlInputEle.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsgEle.textContent = "*Required";
    } else {
        siteUrlErrMsgEle.textContent = "";
    }
});


submitBtnEle.onclick = function() {
    if ((siteNameInputEle.value === "") && (siteUrlInputEle.value === "")) {
        siteNameErrMsgEle.textContent = "*Required";
        siteUrlErrMsgEle.textContent = "*Required";
    } else if ((siteNameInputEle.value === "") && (siteUrlInputEle.value !== "")) {
        siteNameErrMsgEle.textContent = "*Required";
    } else if ((siteNameInputEle.value !== "") && (siteUrlInputEle.value === "")) {
        siteUrlErrMsgEle.textContent = "*Required";
    } else {
        siteNameErrMsgEle.textContent = "";
        siteUrlErrMsgEle.textContent = "";
        onAddListItem();
    }
};


bookmarkFormEle.addEventListener("submit", function(event) {
    event.preventDefault();
});