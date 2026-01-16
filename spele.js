//no URL iegūst vārdu
let adrese = window.location.hash.substring(1);
adrese = decodeURI(adrese.split(',')[0]|| '').trim();

// mainīgie spēles darbībai
let laiks = 0; //sekundes
let kliski = 0;

//taimers mainīgie (taimeris strādās ar pitmo klikski)
let timerId = null;
let timerstarted = false;

function formaTime(seconds){
    const m = String(Math.floor(seconds / 60))(2, '0');
    const s = String(seconds % 60 ).padStart(2, '0');
    return `${m}:${s}`;
}




const laukumiSaturs = ['🤩','🫨','🎃','🤡','🫨','💩','🥶','🤩','💩','🎃','🤡','🥶'];
let atvertilaukumi = [];
let pedejieDivi = [];

//sajauc emoji nejaušā secībā
let laukumiSajaukti = [...laukumiSaturs].sort(() => Math.random() - 0.5); 