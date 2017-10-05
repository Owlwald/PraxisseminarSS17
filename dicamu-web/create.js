/*
 * Function for creating elements
 */

function writeNewMuseum() {
    name_input = document.querySelector("#add_mus_input")
    place_input = document.querySelector("#add_mus_input_place")
    var name = name_input.value;
    var place = place_input.value;
    name_input.value = ""
    place_input.value = ""
    var museumID = numOfMuseums + 1;
    database.ref('Museum/' + museumID).set({
        ID: museumID,
        Name: name,
        Ort: place
    });
    resetDropdownMuseum()
    hideMuseumPanel()
}

function writeNewCat() {
    title_input = document.querySelector("#add_cat_title")
    author_input = document.querySelector("#add_cat_author")
    var title = title_input.value;
    var author = author_input.value;
    title_input.value = ""
    author_input.value = ""
    var catID = numOfCatalogues + 1;
    database.ref('Museum/' + currentMusID + '/Kataloge/' + catID).set({
        ID: catID,
        Autor: author,
        Titel: title,
    });
    closeCatPanel()
    resetTable()
    loadCatalogues(currentMusID)
}

function writeNewEssay() {
    var essayID = numOfEssays + 1;
    showEssayDetail();
    hideCatDetail();
    resetMediaTable();
    document.querySelector('#add_media_essay').disabled = true;
    document.querySelector('#remove_media_essay').disabled = true;
    document.querySelector("#essay_save").setAttribute("onClick", "saveEssay(" + essayID + ")")
}

function writeNewArtwork() {
    var artworkID = numOfArtworks + 1;
    showArtworkDetail()
    hideCatDetail()
    resetMediaTable()
    document.querySelector('#add_media_artwork').disabled = true;
    document.querySelector('#remove_media_artwork').disabled = true;
    document.querySelector("#artwork_save").setAttribute("onClick", "saveArtwork(" + artworkID + ")")
}

function writeNewMedia() {
    var mediaID = numOfMedia + 1;
    showMediaPanel()
    hideEssayDetail()
    hideArtworkDetail()
    document.querySelector("#media_save").setAttribute("onClick", "saveMedia(" + mediaID + ")")
}

function writeNewDetail() {
    var div_1 = document.createElement("div")
    var div_2 = document.createElement("div")
    var input_1 = document.createElement("input");
    var input_2 = document.createElement("input");
    var tr = document.createElement("tr");
    var td_1 = document.createElement("td");
    var td_2 = document.createElement("td");

    input_1.type = "text"
    input_2.type = "text"

    div_1.classList.add("mui-textfield")
    div_1.appendChild(input_1)
    div_2.classList.add("mui-textfield")
    div_2.appendChild(input_2)
    td_1.appendChild(div_1)
    td_2.appendChild(div_2)
    tr.appendChild(td_1)
    tr.appendChild(td_2)
    console.log(document.querySelector("#tbody_media"))
    document.querySelector("#tbody_media").appendChild(tr)
}
