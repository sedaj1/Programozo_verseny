function megjelenit(tipus) {
    const container = document.querySelector('.kartyakContainer');
    container.innerHTML = "";

    const szurt = tipus === 'mind' 
        ? nyomdaipariReferenciak 
        : nyomdaipariReferenciak.filter(item => item.nev.toLowerCase().includes(tipus.toLowerCase()));

    szurt.forEach(item => {
        const kartya = document.createElement("div");
        kartya.className = "kartya";
        kartya.innerHTML = `
            <img src="${item.kep}" alt="${item.tema}" class="kep"/>
            <div class="leiras">
                <h3>${item.nev}</h3>
                <p><strong>Megrendelő:</strong> ${item.megrendelo}</p>
                <p><strong>Méret:</strong> ${item.meret}</p>
                <p><strong>Színek:</strong> ${item.szinek}</p>
                <p><strong>Darabszám:</strong> ${item.darabszam}</p>
                <p><strong>Papírminőség:</strong> ${item.papirminoseg}</p>
                <p><strong>Kivitelezés:</strong> ${item.kivitelezes}</p>
                <p><strong>Téma:</strong> ${item.tema}</p>
            </div>
        `;
        container.appendChild(kartya);
    });
}

function nevjegykartya() { megjelenit("névjegykártya"); }
function csomagolas() { megjelenit("csomagolás"); }
function cimke() { megjelenit("címke"); }
function prospektus() { megjelenit("katalógus"); }
function flyer() { megjelenit("szórólap"); }
function egyeb() {

    
    const ismertTipusok = ["névjegykártya", "csomagolás", "címke", "szórólap", "katalógus"];
    const egyebek = nyomdaipariReferenciak.filter(item =>
        !ismertTipusok.some(tipus => item.nev.toLowerCase().includes(tipus))
    );
    const container = document.getElementById('kartyakContainer');
    container.innerHTML = "";
    egyebek.forEach(item => {
        const kartya = document.createElement("div");
        kartya.className = "kartya";
        kartya.innerHTML = `
            <img src="${item.kep}" alt="${item.tema}" class="kep"/>
            <div class="leiras">
                <h3>${item.nev}</h3>
                <p><strong>Megrendelő:</strong> ${item.megrendelo}</p>
                <p><strong>Téma:</strong> ${item.tema}</p>
            </div>
        `;
        container.appendChild(kartya);
    });
}