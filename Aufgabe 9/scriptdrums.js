function playSample(file) {
    var sound = new Audio("assets/" + file);
    sound.play();
}
document.querySelector("#hihat").addEventListener("click", function () {
    playSample("hihat.mp3");
});
document.querySelector("#kick").addEventListener("click", function () {
    playSample("kick.mp3");
});
document.querySelector("#snare").addEventListener("click", function () {
    playSample("snare.mp3");
});
document.querySelector("#a").addEventListener("click", function () {
    playSample("a.mp3");
});
document.querySelector("#c").addEventListener("click", function () {
    playSample("c.mp3");
});
document.querySelector("#f").addEventListener("click", function () {
    playSample("f.mp3");
});
document.querySelector("#g").addEventListener("click", function () {
    playSample("g.mp3");
});
document.querySelector("#laugh1").addEventListener("click", function () {
    playSample("laugh-1.mp3");
});
document.querySelector("#laugh2").addEventListener("click", function () {
    playSample("laugh-2.mp3");
});
var sounds = ["kick.mp3", "kick.mp3", "snare.mp3", "kick.mp3", "kick.mp3", "snare.mp3"];
var active = 0;
function playBeat() {
    setInterval(function () {
        var sound = new Audio("assets/" + sounds[active]);
        sound.play();
        active++;
    }, 500);
}
