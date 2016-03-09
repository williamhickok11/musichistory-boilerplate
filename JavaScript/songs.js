"use strict";


// var SongIIFE = (function() {

//   var songArray;

//   return {
//     loadSongs: function (callbackToInvoke) {
//       $.ajax({
//         url:'musicList.json'
//       }).done(function(data) {
//         songArray = data.songList;
//         callbackToInvoke(songArray);
//       })
//     },
//     loadSongs2: function (callbackToInvoke) {
//       $.ajax({
//         url:'musicList2.json'
//       }).done(function(data) {
//         songArray = data.songList2;
//         callbackToInvoke(songArray);
//       })
//     }
//   }
// })();

function getSongs () {
  $.ajax({
    url: "https://blinding-inferno-201.firebaseio.com/songList/.json",
    method: "GET"
  }).done(function(songList) {
    let songEl = $("#bottomContainer");
    console.log("songList", songList);
    // Object.keys(songList).forEach((key) => {
    //   songList[key]
    // })
    // or
    var songContentArray = [];
    var contentString = "";
    for (let song in songList) {
      // songList[song].Objid = song;
      songContentArray.push(songList[song]);
      var currentSong = songList[song];
      contentString += "<div class='row musicRow' id='" + song + "'>";
        contentString += "<div class='col-md-12 column'>";
          contentString += "<h3>" + currentSong.title + "</h3>";
        contentString += "</div>";
        contentString += "<div class='col-md-12 column'>";
          contentString += "<h4>" + currentSong.artist + " | " + currentSong.album + " | " + currentSong.genre + "</h4>";
        contentString += "</div>";
        contentString += "<div class='col-md-12'>";
          contentString += '<button type="button" class="btn btn-link deleteBtn">Delete</button>';
        contentString += "</div>";
      contentString += "</div>";
    }
    songEl.append(contentString);
    console.log("songContentArray", songContentArray);
  })
}

getSongs();

$(document).on('click', '.deleteBtn', ()=>{
  //Get access to the current id.
  var id = $(event.target).parents(".row")[0].id;
  console.log("id", id);

  function removeSong () {
    $.ajax({
      url: "https://blinding-inferno-201.firebaseio.com/songList/"+id+"/.json",
      method: "DELETE"
    })
  }
  removeSong();
  $(event.target).parents(".row").remove();
})


















