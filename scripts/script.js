let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('.song-name');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('.durationTime');
let track_image = document.querySelector('.bg_song');
let artist = document.querySelector('.song-artist');


let timer;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [
    {
        name: "Heathens",
        path: "music/song2.mp3",
        img: "../assets/img/img2.jpg",
        singer: "Aurora"
    },
    {
        name: "First Place",
        path: "music/song3.mp3",
        img: "../assets/img/img3.jpg",
        singer: "Bulow"
    },
    {
        name: "I dont' think I love you anymore",
        path: "music/song1.mp3",
        img: "../assets/img/img1.jpg",
        singer: "Alaine Castillo"
    }
];


// All functions


// function load the track
function load_track(index_no){
    clearInterval(timer);
    reset_slider();

    track.src = All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;
    track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

    timer = setInterval(range_slider ,1000);
}

load_track(index_no);

function justplay(){
    if(Playing_song===false){
        playsong();

    }else{
        pausesong();
    }
}


// reset song slider
function reset_slider(){
    slider.value = 0;
}

// play song
function playsong(){
    track.play();
    Playing_song = true;
    play.src = "../assets/img/pause.png";
}

function pausesong(){
    track.pause();
    Playing_song = false;
    play.src = "../assets/img/play.png";
}


// next song
function next_song(){
    if(index_no < All_song.length - 1){
        index_no += 1;
        load_track(index_no);
        playsong();
    }else{
        index_no = 0;
        load_track(index_no);
        playsong();

    }
}


// previous song
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



function range_slider() {
    let position = 0;

    // update slider position
    if (!isNaN(track.duration)) {
        position = track.currentTime * (100 / track.duration);
        slider.value = position;
    }
}

