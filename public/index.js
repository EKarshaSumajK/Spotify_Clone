var showHideButtonText = document.getElementById("showit");
window.oncontextmenu = function () {
  return false;
};

 
function showitHideit() {
  var x = document.getElementsByClassName("hide-it");
  for (var i = 0; i < x.length; i++) {
    if (x[i].style.display === "none") {
      x[i].style.display = "block";
      showHideButtonText.innerText = "Show Less";
    } else {
      x[i].style.display = "none";
      showHideButtonText.innerText = "Show All";
    }
  }
}

const musicContainer = document.getElementById("music-container");
const playButton = document.getElementById("play");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

const songs = [
  "gallantry",
  "voices",
  "head of the table",
  "the game",
  "unscripted violence",
  "broken dreams",
  "kingdom",
  "line in the sand",
  "molotov",
  "phenomenal",
  "metalingus",
  "we are one",
  "no one will survive",
  "bring the fire",
  "after dark",
  "cult of personality",
  "all about tha boom",
  "stone cold theme",
  "the time is now",
  "prepare to fight",
];
let songIndex = 1;

function getSongTitle(song) {
  return song.charAt(0).toUpperCase() + song.slice(1);
}

function loadSong(song) {
  title.innerText = getSongTitle(song);
  audio.src = "./music/" + song + ".mp3";
  cover.src = "./images/" + song + ".jpeg";
}

function playSong() {
  musicContainer.classList.add("play");
  playButton.querySelector("i.fas").classList.remove("fa-play");
  playButton.querySelector("i.fas").classList.add("fa-pause");
  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove("play");
  playButton.querySelector("i.fas").classList.remove("fa-pause");
  playButton.querySelector("i.fas").classList.add("fa-play");
  audio.pause();
}

function prevSong() {
  songIndex--;
  if (songIndex < 0) songIndex = songs.length - 1;
  loadSong(songs[songIndex]);
  playSong();
}

function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) songIndex = 0;
  loadSong(songs[songIndex]);
  playSong();
}

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

// Event Listeners
playButton.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");
  isPlaying ? pauseSong() : playSong();
});

prevButton.addEventListener("click", prevSong);
nextButton.addEventListener("click", nextSong);

audio.addEventListener("timeupdate", updateProgress);
progressContainer.addEventListener("click", setProgress);

audio.addEventListener("ended", nextSong);

// Init
loadSong(songs[songIndex]);
function underDevelopment() {
  alert("This Following Section is Under Development, Thank You");
}

function addMusic(id) {
  pauseSong();
  loadSong(id);
  playSong();
}
