const container = document.querySelector('.container')
musicImage = container.querySelector('.card img')
musicName = container.querySelector('.card .about_song .song_details .song-about .song-name')
musicArtist = container.querySelector('.card .about_song .song_details .song-about .song-artist')
audioPlayer  = document.querySelector('.card .song_timer')
let musicPaused = true;

let musicIndex = 2;

const audio = new Audio();

window.addEventListener("load", () => {
    loadMusic(musicIndex)
})

function loadMusic(indexNumb) {
    musicName.innerHTML = allSongs[indexNumb - 1].name;
    musicArtist.innerHTML = allSongs[indexNumb - 1].artist;
    musicImage.src = `images/${allSongs[indexNumb - 1].image}.jpg`;
    audio.src = `../assets/audio/${allSongs[indexNumb - 1]}.mp3`;
    console.log(indexNumb)
    audio.currentTime = 0;
}
function playAudio(){
    audio.play();

}