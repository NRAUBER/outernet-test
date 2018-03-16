var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");
var pourcentage = 0;
var moveToSec = 0;
document.Form1.videoWidth.value = video.offsetWidth;
document.Form1.videoLength.value = video.duration;
document.Form1.moveToSec.value = moveToSec;
function playPause() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}
video.addEventListener('loadedmetadata', function() {
  document.Form1.videoLength.value = video.duration;
}, false);

video.addEventListener("timeupdate", function() {
    var duration = document.getElementById('duration');
    var s = parseInt(video.currentTime % 60);
    var m = parseInt((video.currentTime / 60) % 60);
     console.log(m + ':' + s);
    document.Form1.currentTime.value = video.currentTime;
}, false);


$("body").mousemove(function(e) {
    document.Form1.posx.value = e.pageX;
    pourcentage = e.pageX/video.offsetWidth;
    document.Form1.pource.value = pourcentage;
    moveToSec = pourcentage * video.duration;
    video.currentTime = moveToSec;
    document.Form1.moveToSec.value = moveToSec;
     
    
})


