var Deutschland2021 = 83.2;
var Deutschland2008 = 82;
var Deutschlandges = 1.2;
var Deutschland08bis21 = (Deutschland2021 - Deutschland2008) / Deutschland2008 * 100;
var Frankreich2021 = 65.3;
var Frankreich2008 = 62.14;
var Frankreichges = 3.16;
var Frankreich08bis21 = (Frankreich2021 - Frankreich2008) / Frankreich2008 * 100;
var Italien2021 = 59.58;
var Italien2008 = 59;
var Italienges = 0.58;
var Italien08bis21 = (Italien2021 - Italien2008) / Italien2008 * 100;
var Schweden2021 = 10.61;
var Schweden2008 = 9.26;
var Schwedenges = 1.35;
var Schweden08bis21 = (Schweden2021 - Schweden2008) / Schweden2008 * 100;
var EU21 = 447.01;
var EU08 = 440.66;
function funktionGermany() {
    document.querySelector("h1").innerHTML = "Einwohnerzahl in Deutschland";
    document.querySelector("#gesamtzahl").innerHTML = "83,2 Mio";
    document.querySelector("#gesamtText").innerHTML = "Gesamtanzahl der Einwohner in 2021";
    document.querySelector("#wachstumsrate").innerHTML = "1,46%";
    document.querySelector("#gesamt").innerHTML = "1,2 Mio";
}
function funktionFrance() {
    document.querySelector("h1").innerHTML = "Einwohnerzahl in Frankreich";
    document.querySelector("#gesamtzahl").innerHTML = "65,3 Mio";
    document.querySelector("#gesamtText").innerHTML = "Gesamtanzahl der Einwohner in 2021";
    document.querySelector("#wachstumsrate").innerHTML = "5,36%";
    document.querySelector("#gesamt").innerHTML = "3,16 Mio";
}
;
function funktionItalien() {
    document.querySelector("h1").innerHTML = "Einwohnerzahl in Italien";
    document.querySelector("#gesamtzahl").innerHTML = "59,58 Mio";
    document.querySelector("#gesamtText").innerHTML = "Gesamtzahl der Einwohner in 2021";
    document.querySelector("#wachstumsrate").innerHTML = "0,98%";
    document.querySelector("#gesamt").innerHTML = "0,58 Mio";
}
;
function funktionSchweden() {
    document.querySelector("h1").innerHTML = "Einwohnerzahl in Schweden";
    document.querySelector("#gesamtzahl").innerHTML = "10,16 Mio";
    document.querySelector("#gesamtText").innerHTML = "Gesamtzahl der Einwohner 2021";
    document.querySelector("#wachstumsrate").innerHTML = "14,57%";
    document.querySelector("#gesamt").innerHTML = "1,35 Mio";
}
;
function funktionEU() {
    document.querySelector("h1").innerHTML = "Einwohnerzahl in der EU";
    document.querySelector("#gesamtzahl").innerHTML = "447,01 Mio";
    document.querySelector("#gesamtText").innerHTML = "Gesamtzahl der Einwohner 2021";
    document.querySelector("#wachstumsrate").innerHTML = "1,44%";
    document.querySelector("gesamt").innerHTML = "6,35 Mio";
}
;
window.addEventListener('load', function () {
    document.querySelector(".germany").addEventListener('click', funktionGermany);
});
window.addEventListener('load', function () {
    document.querySelector(".france").addEventListener('click', funktionFrance);
});
window.addEventListener('load', function () {
    document.querySelector(".italy").addEventListener('click', funktionItalien);
});
window.addEventListener('load', function () {
    document.querySelector(".sweden").addEventListener('click', funktionSchweden);
});
window.addEventListener('load', function () {
    document.querySelector(".stars").addEventListener('click', funktionEU);
});
//# sourceMappingURL=script7.js.map