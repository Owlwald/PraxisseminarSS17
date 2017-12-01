// Various Functions for reseting tables, dropdowns and forms after using them.

function resetEssayDetail(){
    document.querySelector("#essay_title").value=""
    document.querySelector("#essay_author").value=""
    document.querySelector("#essay_text").value=""
    document.querySelector("#tbody_essay_media").value=""
    document.querySelector("#add_media_essay").removeAttribute("disabled");
    document.querySelector("#remove_media_essay").removeAttribute("disabled");
}

function resetMediaPanel(){
    document.querySelector("#media_title").value =""
    document.querySelector("#media_link").value = ""
    document.querySelector("#tbody_media").innerHTML = ""
}

function resetMediaTable(){
    document.querySelector("#tbody_essay_media").innerHTML=""
    document.querySelector("#tbody_artwork_media").innerHTML=""
}

function resetArtworkDetail(){
    document.querySelector("#artwork_title").value=""
    document.querySelector("#artwork_text").value=""
    document.querySelector("#artwork_literature").value=""
    document.querySelector("#add_media_artwork").removeAttribute("disabled");
    document.querySelector("#remove_media_artwork").removeAttribute("disabled");
}

function resetDropdownMuseum(){
    document.querySelector('#dropdown_museen').innerHTML= "<li><a href='#' onclick='addMuseumDialog()'>Museum hinzufügen</a></li>";
    loadMuseums()
}

function resetTable(){
    document.querySelector('#tbody').innerHTML =""
}
function resetDetailTables(){
    document.querySelector("#tbody_essay").innerHTML =""
    document.querySelector("#tbody_artwork").innerHTML =""
}
function resetDropdown(){
    document.querySelector("#dropdown_cat").innerHTML = "<li><a href='#' onclick='addCatDialog()'>Katalog hinzufügen</a></li>"
}
