const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();

let hr = date.getHours()%12;
let min = date.getMinutes();
let sec = date.getSeconds();

let scPosition = (sec*360)/60;
let mnPosition = (min*360)/60 + scPosition/60;
let hrPosition = (hr*360)/12 + mnPosition/12;

function clocking() {
   
    scPosition = scPosition + 6; // Segundo adicional para evitar o problema do 0 para voltar o ponteiro.
    mnPosition = mnPosition + (6/60); // Graus adicionais para evitar o problema do 0.
    hrPosition = hrPosition + (30/3600); // Graus adicionais para evitar o problema do 0;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + mnPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + scPosition + "deg)";
}

setInterval(clocking, 1000);