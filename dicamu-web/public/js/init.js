//Initializes Firebase, various variables, and the upload function.
//then starts the app by loading the list of the museums.

var config = {
    apiKey: "AIzaSyDx888a0huvJQCpklJsDdf4Sq2mddAxbhk",
    authDomain: "dicamu-1ed50.firebaseapp.com",
    databaseURL: "https://dicamu-1ed50.firebaseio.com",
    projectId: "dicamu-1ed50",
    storageBucket: "dicamu-1ed50.appspot.com",
    messagingSenderId: "181342973516"
};
firebase.initializeApp(config);

var database = firebase.database();
var museumRef = database.ref('Museum');
var storageRef = firebase.storage().ref();
var numOfCatalogues=0;
var numOfMuseums=0;
var numOfEssays=0;
var numOfArtworks=0;
var numOfMedia=0;
var numOfDetails=0;
var currentMusID=0;
var currentCatID=0;
var currentEssayID=0;
var currentArtworkID=0;
var currentMediaID=0;
var EssayOrArtwork=0;

window.onload = function() {
    document.getElementById('file').addEventListener('change', handleFileSelect, false);
    document.getElementById('file_json').addEventListener('change', handleFileUploadJSON, false);
    initAuth();
    loadMuseums();
};

function handleFileUploadJSON(evt){
    evt.stopPropagation();
    evt.preventDefault();
    var file = evt.target.files[0];
    var metadata = {
      'contentType': file.type
    };
    var fr = new FileReader();

      fr.onload = function(e) {
      console.log(e);
        var result = e.target.result;
        var obj = JSON.parse(result)
            console.log(currentMusID)
            database.ref('Museum/'+currentMusID+'/Kataloge/'+(numOfCatalogues+1)).set(obj)
      }

  fr.readAsText(file);
  hideCatForm();
  showCatTable();
}

function handleFileSelect(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  var file = evt.target.files[0];

  var metadata = {
    'contentType': file.type
  };

  if(EssayOrArtwork==1){
      storageRef.child('Museum_'+currentMusID+'/Katalog_'+currentCatID+'/Aufsätze/'+currentEssayID+'/'+ file.name).put(file, metadata).then(function(snapshot) {
    var url = snapshot.downloadURL;
    document.getElementById('media_link').value =url ;
  }).catch(function(error) {
    console.error('Upload failed:', error);
});}
  else if(EssayOrArtwork==2){
  storageRef.child('Museum_'+currentMusID+'/Katalog_'+currentCatID+'/Kunstwerke/'+currentArtworkID+'/'+ file.name).put(file, metadata).then(function(snapshot) {
    console.log('Uploaded', snapshot.totalBytes, 'bytes.');
    console.log(snapshot.metadata);
    var url = snapshot.downloadURL;
    console.log('File available at', url);
    document.getElementById('media_link').value =url ;
  }).catch(function(error) {
    console.error('Upload failed:', error);
  });
  }
}





// loadMuseums()
