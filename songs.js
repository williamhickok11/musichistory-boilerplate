var songs = [];

songs[songs.length] = "<li>Legs</li>"
songs[songs.length] = "<p>ZZTop  |  Eliminator  |  Classic Rock</p>";



songs[songs.length] = "<li>The Logical Song</li> by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
songs[songs.length] = "I'm a Legacy > by PhonX on the album Guitar Droppings"
songs.unshift("Blod Red > by Feed Me one the album ChickenFingers")


for (var i = 0; i < songs.length; i++) {
  // songs[i] = songs[i].replace("!", "");
  // songs[i] = songs[i].replace("(", "");
  // songs[i] = songs[i].replace("*", "");
  // songs[i] = songs[i].replace("@", "");
  // songs[i] = songs[i].replace(">", "-");
  document.getElementById("newSongs").innerHTML += songs[i];
};

console.log(songs);