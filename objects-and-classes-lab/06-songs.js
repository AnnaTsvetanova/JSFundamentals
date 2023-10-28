function solve(array) {
  class Song {
    typeList;
    name;
    time;

    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  let songs = [];
  let songsNumber = Number(array.shift());
  let typePlaylist = array.pop();

  for (let element of array) {
    let tokens = element.split("_");
    let typeList = tokens[0];
    let name = tokens[1];
    let time =tokens[2];

    let song = new Song(typeList, name, time);
    songs.push(song);
  }
  if (typePlaylist == "all") {
    songs.forEach((element) => console.log(element.name));
  } else {
    let filtered = songs.filter((element) => element.typeList === typePlaylist);
    filtered.forEach((element) => console.log(element.name));
  }
}

solve([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
// solve([4,

//     'favourite_DownTown_3:14',
//     'listenLater_Andalouse_3:24',
//     'favourite_In To The Night_3:58',
//     'favourite_Live It Up_3:48',
//     'listenLater']);
// solve([2,
//     'like_Replay_3:15',
//     'ban_Photoshop_3:48',
//     'all']);
