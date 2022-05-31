function playSample(file: string): void {
    var sound: HTMLAudioElement = new Audio("assets/" + file);
    sound.play();
}

document.querySelector("#hihat").addEventListener("click", function (): void {
    playSample("hihat.mp3");
});

document.querySelector("#kick").addEventListener("click", function (): void {
    playSample("kick.mp3");
});

document.querySelector("#snare").addEventListener("click", function (): void {
    playSample("snare.mp3");
});

document.querySelector("#a").addEventListener("click", function (): void {
    playSample("a.mp3");
});

document.querySelector("#c").addEventListener("click", function (): void {
    playSample("c.mp3");
});

document.querySelector("#f").addEventListener("click", function (): void {
    playSample("f.mp3");
});

document.querySelector("#g").addEventListener("click", function (): void {
    playSample("g.mp3");
});

document.querySelector("#laugh1").addEventListener("click", function (): void {
    playSample("laugh-1.mp3");
});

document.querySelector("#laugh2").addEventListener("click", function (): void {
    playSample("laugh-2.mp3");
});


var sounds: string[] = ["kick.mp3", "kick.mp3", "snare.mp3", "kick.mp3", "kick.mp3", "snare.mp3"];
var selector: number = 0;
var clickcount: number = 0;

document.querySelector("#playbutton").addEventListener("click", function (): void {
    loop
});

function loop(): void {
    clickcount++;
    selector = 0;
    if (clickcount == 1) {
        document.getElementById("playbutton").classList.remove("fa-play");
        document.getElementById("playbutton").classList.add("fa-stop");
        playbackID = setInterval(function(): void{
            for (let i: number = 0; i < sounds.length; i++) {
                setTimeout(function(): void { playSample(sounds[i]); }, i * 250 );
            }
        },                       sounds.length * 250);
    }
    if (clickcount == 2) {
    document.getElementById("playbutton").classList.remove("fa-stop");
    document.getElementById("playbutton").classList.add("fa-play");
    clearInterval(playbackID);
    clickcount = 0;
    selector = 0;
}
}



