// Functions for deleting entries from the database

function deleteCat() {
    console.log("deleting", currentMusID, currentCatID);
    database.ref('Museum/' + currentMusID + '/Kataloge/' + currentCatID).remove()
    hideCatDetail()
    hideCatDD()
    showCatTable()
    resetTable()
    loadCatalogues(currentMusID)
}

function deleteEssay() {
    console.log("deleting", currentMusID, currentCatID, currentEssayID);
    database.ref('Museum/' + currentMusID + '/Kataloge/' + currentCatID + '/Essays/' + currentEssayID).remove()
    closeEssay()
}

function deleteArtwork() {
    database.ref('Museum/' + currentMusID + '/Kataloge/' + currentCatID + '/Kunstwerke/' + currentArtworkID).remove()
    closeArtwork()
}

function deleteMedia() {
    if (EssayOrArtwork == 1) {
        database.ref('Museum/' + currentMusID + '/Kataloge/' + currentCatID + '/Essays/' + currentEssayID + '/Medien/' + currentMediaID).remove()
        console.log("deleting", currentMusID, currentCatID, currentEssayID, currentMediaID)
    } else {
        database.ref('Museum/' + currentMusID + '/Kataloge/' + currentCatID + '/Kunstwerke/' + currentArtworkID + '/Medien/' + currentMediaID).remove()
        console.log("deleting", currentMusID, currentCatID, currentArtworkID, currentMediaID)
    }
    closeMedia()
}
