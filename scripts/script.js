let container = document.querySelector(".container")
let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('.song-name');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('.durationTime');
let track_image = document.querySelector('.bg_song');
let artist = document.querySelector('.song-artist');
let slider_position = document.querySelector('.currentTime').innerHTML;

let timer;

let index_no = 0;
let Playing_song = false;

let track = document.createElement('audio');
let trackDurationMin, trackDurationSec;
function load_track(index_no){
    // clearInterval(timer);
    reset_slider();
    // index_no = 0;
    track.src = All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;
    track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    container.style.backgroundImage = `url(${track_image.src})`;
    track.load();

    timer = setInterval(range_slider ,1000);
}

window.addEventListener("load", () => {
    load_track(index_no);
})

function justplay(){
    if(Playing_song===false){
        playsong();

    }else{
        pausesong();
    }

}

function reset_slider(){
    slider.value = 0;
}

// play song
function playsong(){
    track.play();
    Playing_song = true;
    play.src = "../assets/img/pause.png";
    // change_duration()
}

function pausesong(){
    track.pause();
    Playing_song = false;
    play.src = "../assets/img/play.png";
}


// next song
function next_song(){
    if(index_no < All_song.length -1){
        index_no++;
        load_track(index_no);
        playsong();
    }else{
        index_no = 0;
        load_track(index_no);
        playsong();

    }
}

function previous_song(){
    if(index_no > 0){
        index_no -= 1;
        load_track(index_no);
        playsong();

    }else{
        index_no = All_song.length;
        load_track(index_no);
        playsong();
    }
}
function range_slider(){
    let position = 0;
    if(!isNaN(track.duration)){
        position = track.currentTime * (100 / track.duration);
        slider.value =  position;
    }


    if(track.ended){
        play.src = "../assets/img/play.png";
    }
}
track.addEventListener("loadeddata", () => {
    dataChange();
})
function dataChange() {
    let musicCurrentTime = container.querySelector(".currentTime");
    let audioDuration = track.duration;
    let totalMin = Math.floor(audioDuration / 60)
    let totalSec = Math.floor(audioDuration % 60)
    trackDurationMin = totalMin;
    trackDurationSec = totalSec;
    show_duration.innerHTML = totalMin < 10 ? `0${totalMin}:${totalSec}` : `${totalMin}:${totalSec}`
}
function change_duration(){

    const duration = track.duration;
    slider_position = duration * (slider.value / 100);

    track.currentTime = slider_position;
    // let clickedOffsetX = slider_position.offsetX;
    // let progressWithval = slider.clientWidth;
    // track.currentTime = (clickedOffsetX / progressWithval) * duration;
    playsong();
}

track.addEventListener("timeupdate", () => {
    let musicCurrentTime = container.querySelector(".currentTime");
    let audioDuration = track.currentTime;
    let totalMin = Math.floor(audioDuration / 60)
    let totalSec = Math.floor(audioDuration % 60)
    let leftMin = trackDurationMin-totalMin,
        leftSec = trackDurationSec-totalSec;
    musicCurrentTime.innerHTML = totalMin < 10 ? `0${totalMin}:${totalSec}` : `${totalMin}:${totalSec}`
    show_duration.innerHTML = leftMin < 10 ? `0${leftMin}:${leftSec}` : `${leftMin}:${leftSec}`
})
