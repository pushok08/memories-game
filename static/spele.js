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
function update() {
    const ellaiks = document.querySelector('#laiks');
    const eKliski = document.querySelector('#kliski');
    if (ellaiks) ellaiks.textContent = formaTime(laiks);
    if (eKliski) ellaiks.textContent = kliski;
}
 
function startTimerIfNeeded(){
    if (timerStarted) return;
    timerStarted = true;
    timerId = setInterval(() => {
        laiks++;
        updateHUD();
    },100);
}

function stopTimer(){
    if(timerId) {
        clearInterval (timerId);
        timerId = null;
    }
}



const laukumiSaturs = ['🤩','🫨','🎃','🤡','🫨','💩','🥶','🤩','💩','🎃','🤡','🥶'];
let atvertilaukumi = [];
let pedejieDivi = [];

//sajauc emoji nejaušā secībā
let laukumiSajaukti = [...laukumiSaturs].sort(() => Math.random() - 0.5); 

//generē dinamiski spēles laukumu
document.activeElement("DOMContent", function(){
    //drošībai: ja nav vārda aizsūta uz sākumu
    if (!vards) {
        window.location.href = '/';
        return;
    }

    let SpelesLauks = document.querySelector('.speles_lauk');
    SpelesLauks.innerHTML = '';
    laukumiSajaukti.forEach((emoji, index) => {
        let bloks = document.createElement("div");
        bloks.classList.add("bloks");
        bloks.setAttribute("data-index",index);
        bloks.innerText = "";
        bloks.addEventListener("click",function() {
           veiktGajienu(bloks, emoji);
        });
        SpelesLauks.appendChild(bloks);
    });
        
    const elVards = document.querySelector('#vardsHUD');
    if (elVards) elVards.textContent = vards;

    updateHUD();
});

function veiktGajienu(bloks,emoji){
    //neļauj atvērt jau atvērto, neļauj atvērt vairāk par 2 kartiņām
    if (bloks.classList.contains("atverts")|| pedejieDivi.length === 2) {
        return;
    }

    startTimerIfNeeded();

    //parāda emoji, ja uzklišķina
    bloks.innerText = emoji;
    bloks.classList.add("atverts");
    kliksi++;
    updateHUD();

    //saglabā 2 pēdējās kārtiņas 
    pedejieDivi.push({bloks, emoji});

    //ja atvērtas 2 kartītes, pārbauda sakritību 
    if (pedejieDivi.length === 2) {
        let [pirmais,otrais] = pedejieDivi;
        if (pirmais.emoji === otrais.emoji) {
            atvertilaukumi.push(pirmais, otrais);
            pedejieDivi = [];

            //pārbauda vai spēle pabeigta (visi laukumi atvērti)
            if(atvertilaukumi.length === laukumiSajaukti.length) {
                stopTimer();
                //parāda rezultātu
                setTimeout(() => {
                    alert(`Apsveicu, ${vards}! \nKliski: ${kliski}\nlaiks: ${formaTime(laiks)}`);
                    //padodam rezultātu uz TOP`a lapu(dp vēl neko nesaglabā)
                    document.location = `/tops#${encodeURIComponent(vards)}, ${kliski}`;
                }, 300);
            }
        }else{
            //ja atvērtie 2 laukumi nav vienādi
            setTimeout(() => {
                pirmais.bloks.innerText = "";
                otrais.bloks.innerText = "";
                pirmais.bloks.classList.remove("atverts");
                otrais.bloks.classList.remove("atverts");
                pedejieDivi = {};
            },800);     
        }
    }
}
            