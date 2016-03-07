"use strict";

$("#addMusic").on('click', function(){
  $('#addMusicSection').removeClass('hidden');
  $('#bottomContainer').addClass('hidden');
  $('#largeContainer').addClass('hidden');
});

$('#viewMusic').on('click', function(){
  $('#addMusicSection').addClass('hidden');
  $('#bottomContainer').removeClass('hidden');
  $('#largeContainer').removeClass('hidden');
});

var addMusicFun = function() {
  var userSongName = $("#userSongName").val();
  var userArtistName = $("#userArtistName").val();
  var userAlbumName = $("#userAlbumName").val();
  var userGenreName = $("#userGenreName").val();

  if (userArtistName === "" || userAlbumName === "" || userSongName === "" || userGenreName === "") {
    alert("Please enter the required fields.")
    return;
  } else {
    var newContentString = "";
    newContentString += "<div class='row musicRow'>";
      newContentString += "<div class='col-md-12 column'>";
        newContentString += "<h3>" + userSongName + "</h3>";
      newContentString += "</div>";
      newContentString += "<div class='col-md-12 column'>";
        newContentString += "<h4>" + userArtistName + " | " + userAlbumName + " | " + userGenreName + "</h4>";
      newContentString += "</div>";
      newContentString += "<div class='col-md-12 deleteBtn'>";
        newContentString += '<button type="button" class="btn btn-link">Delete</button>';
      newContentString += "</div>";
    newContentString += "</div>";
    $("#bottomContainer").append(newContentString);
    $("#userSongName").val("");
    $("#userArtistName").val("");
    $("#userAlbumName").val("");
    $("#userGenreName").val("");
  }
};

$("#postNewSong").on("click", addMusicFun)
$(document).keyup(function(){
  if (event.keyCode === 13) {
    addMusicFun();
  }
});


