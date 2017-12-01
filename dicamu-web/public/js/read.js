// functions for loading entries from the database

function loadCatalogues(id) {
    resetTable()
    resetDropdown()
    hideArtworkDetail()
    hideEssayDetail()
    hideMediaPanel()
    hideCatDetail()
    hideCatDD()
    hideMuseumPanel()
    currentMusID = id;
    numOfCatalogues = 0;

    //filling up the museum dropdown for easier navigation...
    database.ref('Museum/' + id).once('value').then(function(snapshot) {
        document.querySelector("#dropdown_title").innerHTML = snapshot.val().Name + " <span class='mui-caret'></span>";
    })
    //...then loading the actual catalogues
    database.ref('Museum/' + id + '/Kataloge').once('value').then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            document.querySelector('#dropdown_cat').innerHTML += "<li><a href='#' onclick=openCatalogue(" + childData.ID + ")>" + childData.Titel + "</a></li>"
            numOfCatalogues++;
            document.querySelector("#tbody").innerHTML += "<tr onclick=openCatalogue(" + childData.ID + ")><td>" + childData.Titel + "</td><td>" + childData.Autor + "</td></tr>"
        });
    })
    document.querySelector("#catalogue_table").classList.remove("hidden")

}

function loadMuseums() {
    numOfMuseums = 0;
    museumRef.once('value').then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            numOfMuseums++;
            document.querySelector('#dropdown_museen').innerHTML += "<li><a href='#' onclick='loadCatalogues(" + childData.ID + ")'>" + childData.Name + " (" + childData.Ort + ")</a></li>"
        });
    })
}

function openCatalogue(id) {
    resetDetailTables();
    hideEssayDetail();
    hideArtworkDetail();
    hideCatTable();
    showCatDetail();
    showCatDD();
    currentCatID = id;
    console.log(currentCatID)
    database.ref('Museum/' + currentMusID + '/Kataloge/' + id).once('value').then(function(snapshot) {
        numOfEssays = 0;
        numOfArtworks = 0;
        console.log(snapshot.val())
        document.querySelector("#dropdown_title_cat").innerHTML = snapshot.val().Titel + " <span class='mui-caret'></span>";
        document.querySelector("#cat_title").innerHTML = snapshot.val().Titel;
        var essays = snapshot.val().Essays
        var artworks = snapshot.val().Kunstwerke
        for (var i in essays) {
            document.querySelector("#tbody_essay").innerHTML += "<tr onclick=openEssay(" + essays[i].ID + ")><td>" + essays[i].Titel + "</td><td>" + essays[i].Autor + "</td></tr>"
            numOfEssays++;
        }
        for (var i in artworks) {
            document.querySelector("#tbody_artwork").innerHTML += "<tr onclick=openArtwork(" + artworks[i].ID + ")><td>" + artworks[i].Titel + "</td></tr>"
            numOfArtworks++;
        }
    })

}

function openEssay(id) {
    currentEssayID = id;
    EssayOrArtwork = 1
    hideCatDetail()
    showEssayDetail()
    resetMediaTable()
    database.ref('Museum/' + currentMusID + '/Kataloge/' + currentCatID + '/Essays/' + id).once('value').then(function(snapshot) {
        numOfMedia = 0;
        document.querySelector("#essay_title").value = snapshot.val().Titel;
        document.querySelector("#essay_author").value = snapshot.val().Autor;
        document.querySelector("#essay_text").value = snapshot.val().Text;
        document.querySelector("#essay_save").setAttribute("onClick", "saveEssay(" + snapshot.val().ID + ")")
        var media = snapshot.val().Medien
        for (var i in media) {
            numOfMedia++;
            // Essays with the ID 0 are proto-elements, that are created to keep the structure of the database, but they don't have content, so they are ignored
            if (i != 0) {
                document.querySelector("#tbody_essay_media").innerHTML += "<tr onclick=openMedia(" + media[i].ID + ",\"Essay\")><td>" + media[i].Titel + "</td><tr>"
            }
        }
    })

}

function openArtwork(id) {
    hideCatDetail()
    showArtworkDetail()
    resetMediaTable()
    database.ref('Museum/' + currentMusID + '/Kataloge/' + currentCatID + '/Kunstwerke/' + id).once('value').then(function(snapshot) {
        numOfMedia = 0;
        document.querySelector("#artwork_title").value = snapshot.val().Titel;
        document.querySelector("#artwork_text").value = snapshot.val().Text;
        document.querySelector("#artwork_author").value = snapshot.val().Autor;
        document.querySelector("#artwork_literature").value = snapshot.val().Literatur;
        document.querySelector("#artwork_save").setAttribute("onClick", "saveArtwork(" + snapshot.val().ID + ")")
        var media = snapshot.val().Medien
        for (var i in media) {
            numOfMedia++;
            // Artwork with the ID 0 are proto-elements, that are created to keep the structure of the database, but they don't have content, so they are ignored
            if (i != 0) {
                document.querySelector('#tbody_artwork_media').innerHTML += "<tr onclick=openMedia(" + media[i].ID + ",\"Artwork\")><td>" + media[i].Titel + "</td><tr>"
            }
        }
    })
    currentArtworkID = id;
    EssayOrArtwork = 2;
}

function openMedia(id, type) {
    showMediaPanel()
    currentMediaID = id;
    if (type == "Essay") {
        hideEssayDetail()
        database.ref('Museum/' + currentMusID + '/Kataloge/' + currentCatID + '/Essays/' + currentEssayID + '/Medien/' + id).once('value').then(function(snapshot) {
            numOfDetails = 0;
            document.querySelector("#media_title").value = snapshot.val().Titel;
            document.querySelector("#media_link").value = snapshot.val().Medien;
            document.querySelector("#media_save").setAttribute("onClick", "saveMedia(" + snapshot.val().ID + ")")
            var details = snapshot.val().Details

            //for each detail of the media, a editable field is created.
            //they are nested this way for MUI to display the elements correctly.
            for (var i in details) {
                numOfDetails++
                var div_1 = document.createElement("div")
                var div_2 = document.createElement("div")
                var input_1 = document.createElement("input");
                var input_2 = document.createElement("input");
                var tr = document.createElement("tr");
                var td_1 = document.createElement("td");
                var td_2 = document.createElement("td");

                input_1.type = "text"
                input_2.type = "text"

                input_1.value = details[i].Typ
                input_2.value = details[i].Detail
                div_1.classList.add("mui-textfield")
                div_1.appendChild(input_1)
                div_2.classList.add("mui-textfield")
                div_2.appendChild(input_2)
                td_1.appendChild(div_1)
                td_2.appendChild(div_2)
                tr.appendChild(td_1)
                tr.appendChild(td_2)
                document.querySelector("#tbody_media").appendChild(tr)
            }
        })
    } else if (type == "Artwork") {
        hideArtworkDetail()
        database.ref('Museum/' + currentMusID + '/Kataloge/' + currentCatID + '/Kunstwerke/' + currentArtworkID + '/Medien/' + id).once('value').then(function(snapshot) {
            numOfDetails = 0;
            document.querySelector("#media_title").value = snapshot.val().Titel;
            document.querySelector("#media_link").value = snapshot.val().Medien;
            document.querySelector("#media_save").setAttribute("onClick", "saveMedia(" + snapshot.val().ID + ")")

            var details = snapshot.val().Details

            //for each detail of the media, a editable field is created.
            //they are nested this way for MUI to display the elements correctly.
            for (var i in details) {

                numOfDetails++
                var div_1 = document.createElement("div")
                var div_2 = document.createElement("div")
                var input_1 = document.createElement("input");
                var input_2 = document.createElement("input");
                var tr = document.createElement("tr");
                var td_1 = document.createElement("td");
                var td_2 = document.createElement("td");

                input_1.type = "text"
                input_2.type = "text"

                input_1.value = details[i].Typ
                input_2.value = details[i].Detail
                div_1.classList.add("mui-textfield")
                div_1.appendChild(input_1)
                div_2.classList.add("mui-textfield")
                div_2.appendChild(input_2)
                td_1.appendChild(div_1)
                td_2.appendChild(div_2)
                tr.appendChild(td_1)
                tr.appendChild(td_2)
                document.querySelector("#tbody_media").appendChild(tr)
            }
        })
    } else {
        console.log("error opening media. you should not be able to get here.")
    }
}
