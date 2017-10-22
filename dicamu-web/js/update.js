// Functions for updating data from the database


function saveEssay(id) {
    var title_input = document.querySelector("#essay_title")
    var author_input = document.querySelector("#essay_author")
    var text_input = document.querySelector("#essay_text")
    var title = title_input.value;
    var author = author_input.value;
    var text = text_input.value;
    title_input.value = ""
    author_input.value = ""
    text_input.value = ""

    // Loading the media of the essay first, so if there are entries already, they are not overwritten.
    database.ref('Museum/' + currentMusID + '/Kataloge/' + currentCatID + '/Essays/' + id + '/Medien/').once('value').then(function(snapshot) {
        database.ref('Museum/' + currentMusID + '/Kataloge/' + currentCatID + '/Essays/' + id).set({
            ID: id,
            Autor: author,
            Titel: title,
            Text: text,
            Medien: snapshot.val()
        });
        closeEssay()
    })

}

function saveArtwork(id) {
    var title_input = document.querySelector("#artwork_title")
    var literature_input = document.querySelector("#artwork_literature")
    var text_input = document.querySelector("#artwork_text")
    var author_input = document.querySelector("#artwork_author")
    var title = title_input.value;
    var literature = literature_input.value;
    var text = text_input.value;
    var author = author_input.value;
    title_input.value = ""
    literature_input.value = ""
    text_input.value = ""
    author_input.value = ""
    // Loading the media of the artwork first, so if there are entries already, they are not overwritten.
    database.ref('Museum/' + currentMusID + '/Kataloge/' + currentCatID + '/Kunstwerke/' + id + '/Medien/').once('value').then(function(snapshot) {
        database.ref('Museum/' + currentMusID + '/Kataloge/' + currentCatID + '/Kunstwerke/' + id).set({
            ID: id,
            Literatur: literature,
            Titel: title,
            Text: text,
            Autor: author,
            Medien: snapshot.val()
        });
        closeArtwork()
    })
}

function saveMedia(id) {
    var title_input = document.querySelector("#media_title")
    var link_input = document.querySelector("#media_link")
    var title = title_input.value;
    var link = link_input.value;
    var table = document.querySelector("#tbody_media")
    var children = table.childNodes;

    var detailArray = [];
    // as these elements are procedurally generated, it is hard to find them via id or class.
    // these are so convoluted, because of MUI. in order for the elements to be displayed in a fitting way, they have to have certain divs around them.
    // this is the fastest way to get the value of the table fields
    for (var i = 0; i < children.length; i++) {
        if (children[i].children[0].children[0].children[0].value != "") {
            var type = children[i].children[0].children[0].children[0].value
            var detailtext = children[i].children[1].children[0].children[0].value
            var detail = {
                "Typ": type,
                "Detail": detailtext
            }
            detailArray.push(detail)
        }
    }
    table.innerHTML = "";
    title_input.value = "";
    link_input.value = "";
    hideMediaPanel()
    if (EssayOrArtwork == 1) {
        database.ref('Museum/' + currentMusID + '/Kataloge/' + currentCatID + '/Essays/' + currentEssayID + '/Medien/' + id).set({
            ID: id,
            Titel: title,
            Medien: link,
            Details: detailArray
        })
        showEssayDetail()
        openEssay(currentEssayID)
    } else if (EssayOrArtwork == 2) {
        console.log(detailArray)
        database.ref('Museum/' + currentMusID + '/Kataloge/' + currentCatID + '/Kunstwerke/' + currentArtworkID + '/Medien/' + id).set({
            ID: id,
            Titel: title,
            Medien: link,
            Details: detailArray
        })
        openArtwork(currentArtworkID)
    }


}
