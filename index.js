const buttonPlayPause = document.getElementById('play-pause');
const nextButton = document.getElementById('next');
const buttonReturn = document.getElementById('previous'); 
const chapterName = document.getElementById('chapter');
const audioChapter = document.getElementById('chapter-audio');

const numberChapters = 10;
let isPlaying = 0; // 1 - playing , 0 - paused
let currentChapter = 1; 

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

function changeTrackName() {
    chapterName.innerText = `Chapter ${currentChapter}`; 
}

function nextTrack() {
    if (currentChapter === numberChapters) {
        currentChapter = 1; 

    } else {
        currentChapter += 1;
    }

    audioChapter.src = `./books/dom-casmurro/${currentChapter}.mp3`;
    playTrack();
    isPlaying = 1;
    changeTrackName();
}

function returnTrack() {
    if (currentChapter === 1) {
        currentChapter = numberChapters; 

    } else {
        currentChapter -= 1;
    }

    audioChapter.src = `./books/dom-casmurro/${currentChapter}.mp3`;
    playTrack();
    isPlaying = 1;
    changeTrackName();
}

buttonPlayPause.addEventListener("click", playOrPause);
//buttonPlayPause.onclick(playTrack)

nextButton.addEventListener('click', nextTrack); 
buttonReturn.addEventListener('click', returnTrack);