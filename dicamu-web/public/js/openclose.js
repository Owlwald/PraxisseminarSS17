// Various function for opening or closing panels

function addMuseumDialog(){
    showMuseumPanel()
    hideCatDD()
    hideCatDetail()
    hideCatTable()
}

function addCatDialog(){
    hideCatTable();
    hideCatDetail();
    showCatForm();
}

function closeEssay(){
    hideEssayDetail()
    showCatDetail()
    resetEssayDetail()
    openCatalogue(currentCatID)
}

function closeArtwork(){
    hideArtworkDetail()
    showCatDetail()
    resetArtworkDetail()
    openCatalogue(currentCatID)
}

function closeMedia(){
    hideMediaPanel();
    resetMediaPanel();
    if(EssayOrArtwork==1){
        openEssay(currentEssayID)
    }
    else if(EssayOrArtwork==2){
        openArtwork(currentArtworkID)
    }
}

function closeCatPanel(){
    showCatTable()
    hideCatForm()
}
