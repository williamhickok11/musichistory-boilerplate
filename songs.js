var songs = [];

songs[songs.length] = "<li>Legs</li>"
songs[songs.length] = "<p>ZZTop  |  Eliminator  |  Classic Rock</p>";



songs[songs.length] = "<li>The Logical Song</li>";
songs[songs.length] = "<p>Supertramp  |  Breakfast in America  |  Classic Rock</p>";


for (var i = 0; i < songs.length; i++) {
  // songs[i] = songs[i].replace("!", "");
  // songs[i] = songs[i].replace("(", "");
  // songs[i] = songs[i].replace("*", "");
  // songs[i] = songs[i].replace("@", "");
  // songs[i] = songs[i].replace(">", "-");
  document.getElementById("newSongs").innerHTML += songs[i];
};












