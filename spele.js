//no URL iegūst vārdu
let adrese = window.location.hash.substring(1);
adrese = decodeURI(adrese.split(',')[0]|| '').trim();

// mainīgie spēles darbībai
let laiks = 0; //sekundes
let kliski = 0;

//taimers mainīgie (taimeris strādās ar pitmo klikski)
let timerId = null;
let timerstarted = false;






const laukumiSaturs = ['🤩','🫨','🎃','🤡','🫨','💩','🥶','🤩','💩','🎃','🤡','🥶'];
let atvertilaukumi = [];
let pedejieDivi = [];

//sajauc emoji nejaušā secībā
let laukumiSajaukti = [...laukumiSaturs].sort(() => Math.random()) 