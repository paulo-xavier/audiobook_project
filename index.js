const buttonPlayPause = document.getElementById('play-pause');
const audioChapter = document.getElementById('chapter-audio');

const numberChapters = 10;
let isPlaying = 0; // 1 - playing , 0 - paused

function playTrack() {
    audioChapter.play();
    buttonPlayPause.classList.remove('bi-play-circle-fill')
    buttonPlayPause.classList.add('bi-pause-circle-fill')
}

function pauseTrack() {
    audioChapter.pause();
    buttonPlayPause.classList.remove('bi-pause-circle-fill');
    buttonPlayPause.classList.add('bi-play-circle-fill');
}

function playOrPause() {
    if(isPlaying === 0){
        playTrack();
        isPlaying = 1;
    
    } else {
        pauseTrack();
        isPlaying = 0;
    }
}

buttonPlayPause.addEventListener("click", playOrPause);
//buttonPlayPause.onclick(playTrack)
