let searchInputEl = document.getElementById("searchInput");
let spinnerEl = document.getElementById("spinner");
let searchresultsEl = document.getElementById("searchResults");
let selectDisplayCountEl = document.getElementById("selectDisplayCount");
let bookcount = selectDisplayCountEl.value;

let formData = {
    count: "10 Books",
};

function createAndAppendSearchResult(result) {
    let {
        title,
        imageLink,
        author
    } = result;
    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("country-card", "col-6", "mr-auto", "ml-auto", "d-flex", "flex-column");
    searchresultsEl.appendChild(resultItemEl);

    let imageEl = document.createElement("img");
    imageEl.classList.add("image", "mt-auto", "mb-auto");
    imageEl.src = imageLink;
    resultItemEl.appendChild(imageEl);

    let authorEl = document.createElement("p");
    authorEl.classList.add("author-name");
    authorEl.textContent = author;
    resultItemEl.appendChild(authorEl);
}

function displaySearchResults(searchResults) {
    if (searchResults.length === 0) {
        let noResultsEl = document.createElement("p");
        noResultsEl.textContent = "No results found"; //If length of the result is 0.
        searchresultsEl.appendChild(noResultsEl);
    } else {
        let headingEl = document.createElement("h1"); //Else append heading and then results.
        headingEl.textContent = "Popular Books";
        searchresultsEl.appendChild(headingEl);
        for (let result of searchResults) {
            createAndAppendSearchResult(result);
        }
    }
}

function searchBook(event) {
    searchresultsEl.textContent = ""
    if (event.key === "Enter") {
        let url = "https://apis.ccbp.in/book-store?title=" + searchInputEl.value + "&maxResults=" + selectDisplayCountEl.value;
        let options = {
            method: "GET"
        };
        spinnerEl.classList.remove("d-none");
        searchresultsEl.classList.add("block");
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                searchresultsEl.classList.remove("d-none");
                spinnerEl.classList.add("d-none");
                console.log(jsonData);
                let {
                    search_results
                } = jsonData;
                //console.log(JSON.stringify(jsonData))
                console.log(jsonData);
                displaySearchResults(jsonData.search_results);
            });
    }
}
selectDisplayCountEl.addEventListener("change", function(event) {
    formData.count = event.target.value;
    console.log(formData.searchBook);
    console.log(displaySearchResults);

});
searchInputEl.addEventListener("keydown", searchBook);
