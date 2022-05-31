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
var selector = 0;
var clickcount = 0;
let playbackID;
document.querySelector("#playbutton").addEventListener("click", loop);
function loop() {
    clickcount++;
    selector = 0;
    if (clickcount == 1) {
        document.getElementById("playbutton").classList.remove("fa-play");
        document.getElementById("playbutton").classList.add("fa-stop");
        playbackID = setInterval(function () {
            for (let i = 0; i < sounds.length; i++) {
                setTimeout(function () { playSample(sounds[i]); }, i * 250);
            }
        }, sounds.length * 250);
    }
    if (clickcount == 2) {
        document.getElementById("playbutton").classList.remove("fa-stop");
        document.getElementById("playbutton").classList.add("fa-play");
        clearInterval(playbackID);
        clickcount = 0;
        selector = 0;
    }
}
document.querySelector("#remixbutton").addEventListener("click", remix);
function remix() {
    sounds = [];
    let filledsounds = new sounds(5).fill("Math.random()");
    clickcount++;
    selector = 0;
    if (clickcount == 1) {
        playbackID = setInterval(function () {
            for (let i = 0; i < sounds.length; i++) {
                setTimeout(function (, { playSample }) { }(sounds[i]));
            }
            i * 250;
        });
    }
}
sounds.length * 250;
;
if (clickcount == 2) {
    clearInterval(playbackID);
    clickcount = 0;
    selector = 0;
}
//# sourceMappingURL=scriptdrums.js.map