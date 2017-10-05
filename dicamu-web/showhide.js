/*
 * Functions for showing/hiding the HTML-Elements for each step of the way
 */


function showMuseumPanel() {
    document.querySelector("#add_mus").classList.remove("hidden");
}

function hideMuseumPanel() {
    document.querySelector("#add_mus").classList.add("hidden");
}

function showCatTable() {
    document.querySelector("#catalogue_table").classList.remove("hidden");
}

function hideCatTable() {
    document.querySelector("#catalogue_table").classList.add("hidden")
}

function showCatDD() {
    document.querySelector('#dropdown_cat_div').classList.remove("hidden")
}

function hideCatDD() {
    document.querySelector('#dropdown_cat_div').classList.add("hidden")
}

function showCatForm() {
    document.querySelector("#add_cat").classList.remove("hidden");
}

function hideCatForm() {
    document.querySelector("#add_cat").classList.add("hidden");
}

function showCatDetail() {
    document.querySelector("#catalogue_detail").classList.remove("hidden")
}

function hideCatDetail() {
    document.querySelector("#catalogue_detail").classList.add("hidden")
}

function showEssayDetail() {
    document.querySelector("#essay_detail").classList.remove("hidden")
}

function hideEssayDetail() {
    document.querySelector("#essay_detail").classList.add("hidden")
}

function showArtworkDetail() {
    document.querySelector("#artwork_detail").classList.remove("hidden")
}

function hideArtworkDetail() {
    document.querySelector("#artwork_detail").classList.add("hidden")
}

function showMediaPanel() {
    document.querySelector("#media_detail").classList.remove("hidden")
}

function hideMediaPanel() {
    document.querySelector("#media_detail").classList.add("hidden")
}
