function megjelenit(tipus) {
    const container = document.querySelector('.kartyakContainer');
    container.innerHTML = "";

    const szurt = tipus === 'mind' 
        ? nyomdaipariReferenciak 
        : nyomdaipariReferenciak.filter(item => 
            item.nev.toLowerCase().includes(tipus.toLowerCase())
        );

        nyomdaipariReferenciak.forEach(item => {
            const kartya = document.createElement('div');
            kartya.className = 'kartya';
            kartya.innerHTML = `
                <img src="${item.kep}" alt="${item.tema}">
                <div class="overlay">
                    <p><strong>Megrendelő:</strong> ${item.megrendelo}</p>
                    <p><strong>Méret:</strong> ${item.meret}</p>
                    <p><strong>Színek száma:</strong> ${item.szinek}</p>
                    <p><strong>Darabszám:</strong> ${item.darabszam}</p>
                    <p><strong>Papírminőség:</strong> ${item.papirminoseg}</p>
                    <p><strong>Kivitelezés:</strong> ${item.kivitelezes}</p>
                </div>
            `;
            container.appendChild(kartya);

            const temacim = document.createElement('div');
            temacim.className = 'temacim';
            temacim.textContent = `${item.nev} » ${item.tema}`;
            container.appendChild(temacim);
        });
}

function egyeb() {
    const container = document.querySelector('.kartyakContainer');
    container.innerHTML = "";

    const ismertTipusok = ["névjegykártya", "csomagolás", "címke", "szórólap", "katalógus"];

    const egyebek = nyomdaipariReferenciak.filter(item =>
        !ismertTipusok.some(tipus => item.nev.toLowerCase().includes(tipus))
    );

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

megjelenit('mind');