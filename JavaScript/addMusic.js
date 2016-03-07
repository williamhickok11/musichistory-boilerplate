"use strict";
function populatePage (inventory) {
  console.log("Inventory:", inventory);
  var containerEl = document.getElementById("bottomContainer");
  
  //--- Loop through the JSON and build up the DOM --//
  for (var i = 0; i < inventory.length; i++) {
  var contentString = "";
    contentString += "<div class='row musicRow'>";
      contentString += "<div class='col-md-12 column" + i + "'>";
        contentString += "<h3>" + inventory[i].title + "</h3>";
      contentString += "</div>";
      contentString += "<div class='col-md-12 column" + i + "'>";
        contentString += "<h4>" + inventory[i].artist + " | " + inventory[i].album + " | " + inventory[i].genre + "</h4>";
      contentString += "</div>";
      contentString += "<div class='col-md-12 deleteBtn'>";
        contentString += '<button type="button" class="btn btn-link deleteBtn">Delete</button>';
      contentString += "</div>";
    contentString += "</div>";
    containerEl.innerHTML += contentString;
  };
}


SongIIFE.loadSongs(populatePage);
$("#addMore").click(function(){
  SongIIFE.loadSongs2(populatePage);
  
});


// Part One

// Read from local JSON file with an XHR.
// Loop over results and inject into Music History list view.
// Add delete button DOM to each row and, when it is clicked, delete the entire row in the DOM.
// Part Two

// Take your music and split it into two JSON file instead of them all living on one file.
// Add a button at the bottom of your music list and label it "More >".
// Load the songs from the first list and inject the DOM into the document as you've already done.
// When the user clicks that button, load the songs from the second JSON file and append them to the bottom of the existing music, but before the More button.