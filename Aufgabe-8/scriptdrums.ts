function playSample(file: string): void {
    
    var sound: HTMLAudioElement = new Audio("assets" + file);
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
var active: number = 0;

function playBeat(): void {
    setInterval(function (): void {
        var sound: HTMLAudioElement = new Audio("assets" + sounds[active]);
        sound.play();
        active++;
    },          500);
}

