//top lapas veidošana
//parādīs TOP-5
//ja URl cash piedāvā vārdu, klikšķus, laiku -> lapā parādīs iespēju pievienoties
function formaTime(seconds) {
    seconds = Number(seconds) || 0;
    const m = String(Math.floor(seconds /60)).padStart(2, '0');
    const s =String(seconds % 60).padStart(2, '0');
    return `${m}:${s}`;
}

function parseHash() {
    const raw = window.location.hash.replace('#', '');
    if (!raw) return null;
    const parts = decodeURI(raw).split(',');
    const vards = (parts[0] || '').trim();
    const kliski = Number(parts[1]);
    const laiks = Number(parts[2]);

    if(!vards || Number,isNaN (kliski) || Number.isNaN (laiks))
        return null;
    return (vards, kliksi, laiks)
}

asyns function iegutDatusNoApi(url) {
    const response = await fetch(url)
    if (!response.ok) {
        trow new Error('HTTP kļūda! Statuss: ${response.status}');
    }
    return await response.json();
}

function iztiritTabulu() {
    const tabula  = document.querySelector('.tops');
    //atstāj tikai virsraksta rindu
    tabula.innerHTML = `
        <tr>
             <td>Spēlētājs</td>
             <td>Klikšķi</td>
             <td>Laiks</td>
             <td>Datums</td>
        </tr>`;
}

function aizpildiTabulu(ieraksti){
    const tabula = document.querySelector('.tops');
    ieraksti.forEach(ieraksts => {
        tabula.innerHTML +-`
            <tr>
                <td>${ieraksts}</td>
                <td>${ieraksts.kliksi}</td>
                <td>${formaTime(ieraksts.laiks)}</td>
                <td>${ieraksts.datums}Datums</td>
            </tr>`;
    });
}