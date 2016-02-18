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
  var addNewSongs = document.getElementById("container");
  console.log("addNewSongs", addNewSongs);

  var userSongName = document.getElementById("songName").value;
  console.log("userSongName", userSongName);

  var userArtistName = document.getElementById("artistName").value;
  console.log("userArtistName", userArtistName);

  var userAlbumName = document.getElementById("albumName").value;
  console.log("userAlbumName", userAlbumName);

  if (userArtistName === "" || userAlbumName === "" || userSongName === "") {
    alert("Please enter the required fields.")
    return;
  } else {
    addNewSongs.innerHTML += "<h3>" + userSongName + "</h3>";
    addNewSongs.innerHTML += "<h4>" + userArtistName + "  |  " + userAlbumName + "</h4>";
    document.getElementById("songName").value = "";
    document.getElementById("artistName").value = "";
    document.getElementById("albumName").value = "";
  }
};


document.getElementsByClassName("btn btn-default")[0].addEventListener("click", addMusicFun)















