var addMusicSection = document.getElementById("addMusicSection");
var listMusic = document.getElementById("right");
var filterMusic = document.getElementById("left");
var addMusic = document.getElementById("addMusic");
var viewMusic = document.getElementById("viewMusic");



addMusic.addEventListener("click", function() {
  listMusic.classList.add("hidden");
  filterMusic.classList.add("hidden");

  addMusicSection.classList.add("visible");
  addMusicSection.classList.remove("hidden");

});

viewMusic.addEventListener("click", function(){
  addMusicSection.classList.add("hidden");

  listMusic.classList.add("visible");
  listMusic.classList.remove("hidden");

  filterMusic.classList.add("visible");
  filterMusic.classList.remove("hidden");
});



var addMusicFun = function() {
  var addNewSongs = document.getElementById("newSongs");

  var userSongName = document.getElementById("songName").value;
  console.log("userSongName", userSongName);

  var userArtistName = document.getElementById("artistName").value;
  console.log("userArtistName", userArtistName);

  var userAlbumName = document.getElementById("albumName").value;
  console.log("userAlbumName", userAlbumName);

  addNewSongs.innerHTML += "<li>" + userSongName + "</li>";
  addNewSongs.innerHTML += "<p>" + userArtistName + "  |  " + userAlbumName + "</p>"

};


document.getElementById("button").addEventListener("click", addMusicFun)















