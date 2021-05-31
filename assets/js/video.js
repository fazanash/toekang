const playButton = document.getElementById("play-video");
const coverVideo = document.getElementById("cover-video");
const videoYoutube = document.getElementById("youtubeVideo");

playButton.addEventListener("click", hidePlay);
function hidePlay () {
    coverVideo.style.display = "none";
    videoYoutube.setAttribute("autoplay", "1");
}