var SongIIFE = (function() {

  var songArray;

  return {
    loadSongs: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        var songData = JSON.parse(this.responseText);
        songArray = songData.songList;
        console.log(songArray);

        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.
        callbackToInvoke(songArray);
      });

      loader.open("GET", "musicList.json");
      loader.send();
    }
  }


})();








