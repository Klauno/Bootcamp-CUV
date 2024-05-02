let playlist = [
    "Smells Like Teen Spirit",
    "Everlong",
    "Come As You Are",
    "The Pretender",
    "Heart-Shaped Box",
    "Learn to Fly",
    "Lithium",
];
let playlistEscuchada = ["The Pretender", "Lithium", "Come As You Are"];

let playlistSinEscuchar = playlist.filter(song => !playlistEscuchada.includes(song));

alert(playlistSinEscuchar);

