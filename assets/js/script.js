// Puzzle Box
const rows = 3;
const columns = 3;

let currentTile;
let otherTile;

let turns = 0;
let imgOrder = ["1","2", "3", "4", "5", "6", "7", "8","9"];

window.onload = function() {
    for (let r=0; r < rows; r++ ) {
        for (let c=0; c < columns; c++) {
            let  tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = "assets/images/" + imgOrder.shift() + ".jpg";

            document.getElementById("game-box").append(tile);
        }
    }
}

// Background Music
document.getElementById('play-music').addEventListener('click', function() {
    let icon = document.getElementById('icon');
    let audio = document.getElementById('theme-song');

    if (icon.classList.contains('fa-music')) {
        // Music is currently paused, start playing
        icon.classList.remove('fa-music');
        icon.classList.add('fa-pause');
        audio.play();  // Start playing the audio
    } else {
        // Music is currently playing, pause it
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-music');
        audio.pause();  // Pause the audio
    }
});


