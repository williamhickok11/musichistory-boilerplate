"use strict";
var SongIIFE = (function() {

  var songArray;

  return {
    loadSongs: function (callbackToInvoke) {
      $.ajax({
        url:'musicList.json'
      }).done(function(data) {
        songArray = data.songList;
        callbackToInvoke(songArray);
      })
    },
    loadSongs2: function (callbackToInvoke) {
      $.ajax({
        url:'musicList2.json'
      }).done(function(data) {
        songArray = data.songList2;
        callbackToInvoke(songArray);
      })
    }
  }
})();