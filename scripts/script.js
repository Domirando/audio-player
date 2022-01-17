const audio = document.querySelector('audio');
function playAudio() {
    audio.currentTime = 0;
    audio.play();
}
function pauseAudio() {
    audio.pause();
}