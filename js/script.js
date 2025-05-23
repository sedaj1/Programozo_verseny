function megjelenit(tipus) {
    const container = document.querySelector('.kartyakContainer');
    container.innerHTML = "";

    document.querySelectorAll('.gombok button').forEach(btn => btn.classList.remove('active'));

    const clicked = Array.from(document.querySelectorAll('.gombok i')).find(i => i.innerText.trim().toLowerCase() === tipus.toLowerCase());
    if (clicked) {
        clicked.parentElement.classList.add('active');
    }

    const szurt = tipus === 'mind' 
        ? nyomdaipariReferenciak 
        : nyomdaipariReferenciak.filter(item => 
            item.nev.toLowerCase().includes(tipus.toLowerCase())
        );

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

function egyeb() {
    const container = document.querySelector('.kartyakContainer');
    container.innerHTML = "";

    document.querySelectorAll('.gombok button').forEach(btn => btn.classList.remove('active'));

    const clicked = Array.from(document.querySelectorAll('.gombok i')).find(i => i.innerText.trim().toLowerCase() === "egyéb");
    if (clicked){
        clicked.parentElement.classList.add('active');
    }

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