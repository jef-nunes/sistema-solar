const astroNome = document.getElementById("astro-name");
const astroDesc = document.getElementById("astro-desc");
const astroImagem = document.getElementById("astro-img");
const astroDistSol = document.getElementById("astro-dist-sun");
const astroDistTerra = document.getElementById("astro-dist-earth");
const astroTemperatura = document.getElementById("astro-temp");
const astroTamanho = document.getElementById("astro-size");
const astroMassa = document.getElementById("astro-mass");

const astros = [
    'sol',
    'mercurio', 
    'venus', 
    'terra', 
    'marte', 
    'jupiter', 
    'saturno', 
    'urano', 
    'netuno'
];

const astrosInfo = {
    "sol": {
        "distSol": "0 km",
        "distTerra": "1,496*10^8 km",
        "temp": "5,5*10^3°C (média)",
        "tamanho": "1,39*10^6 km de diâmetro",
        "massa": "1,99*10^30 kg",
        "desc": "O Sol é a estrela central do Sistema Solar. Sua gravidade mantém todos os \
        planetas do chamado Sistema Solar em órbita, além de outros corpos celestes. \
        É uma esfera de plasma composta principalmente de hidrogênio e hélio, e sua energia é gerada por fusão nuclear em seu núcleo."
    },
    "mercurio": {
        "distSol": "5,79*10^7 km",
        "distTerra": "9,17*10^7 km",
        "temp": "167°C (média)",
        "tamanho": "4.880 km",
        "massa": "3,3*10^23 kg",
        "desc": "Mercúrio é o planeta mais próximo do Sol e possui temperaturas extremas,\
         variando entre muito quente e muito frio devido à falta de uma atmosfera significativa."
    },
    "venus": {
        "distSol": "1,08*10^8 km",
        "distTerra": "4,14*10^7 km",
        "temp": "464°C (média)",
        "tamanho": "12.104 km",
        "massa": "4,87*10^24 kg",
        "desc": "Vênus é o planeta mais semelhante à Terra em termos de tamanho, mas tem uma\
         atmosfera densa composta de dióxido de carbono, causando um efeito estufa extremo."
    },
    "terra": {
        "distSol": "1,50*10^8 km",
        "distTerra": "0 km",
        "temp": "15°C (média)",
        "tamanho": "12.742 km",
        "massa": "5,97*10^24 kg",
        "desc": "A Terra é o único planeta conhecido a abrigar vida, com uma atmosfera rica\
         em oxigênio e água em estado líquido, o que sustenta uma grande diversidade de ecossistemas."
    },
    "marte": {
        "distSol": "2,28*10^8 km",
        "distTerra": "5,46*10^7 km",
        "temp": "-60°C (média)",
        "tamanho": "6.779 km",
        "massa": "6,42*10^23 kg",
        "desc": "Marte, o planeta vermelho, tem uma atmosfera fina e fria, mas no passado possuía\
         água em sua superfície. É o alvo de várias missões de exploração espacial."
    },
    "jupiter": {
        "distSol": "7,78*10^8 km",
        "distTerra": "6,29*10^8 km",
        "temp": "-145°C (média)",
        "tamanho": "139.820 km",
        "massa": "1,90*10^27 kg",
        "desc": "Júpiter é o maior planeta do Sistema Solar, um gigante gasoso com uma atmosfera\
         composta principalmente de hidrogênio e hélio. Ele possui uma grande tempestade, a Grande Mancha Vermelha."
    },
    "saturno": {
        "distSol": "1,43*10^9 km",
        "distTerra": "1,20*10^9 km",
        "temp": "-178°C (média)",
        "tamanho": "116.460 km",
        "massa": "5,68*10^26 kg",
        "desc": "Saturno é famoso por seus anéis impressionantes, compostos de gelo e rocha.\
         É um gigante gasoso com uma composição similar à de Júpiter."
    },
    "urano": {
        "distSol": "2,87*10^9 km",
        "distTerra": "2,60*10^9 km",
        "temp": "-224°C (média)",
        "tamanho": "50.724 km",
        "massa": "8,68*10^25 kg",
        "desc": "Urano é um gigante gasoso que tem uma rotação única, com seu eixo de rotação\
         quase paralelo à sua órbita. Sua cor azul esverdeada é causada pelo metano em sua atmosfera."
    },
    "netuno": {
        "distSol": "4,50*10^9 km",
        "distTerra": "4,30*10^9 km",
        "temp": "-218°C (média)",
        "tamanho": "49.244 km",
        "massa": "1,02*10^26 kg",
        "desc": "Netuno é o planeta mais distante do Sistema Solar. Ele possui uma atmosfera\
         composta principalmente de hidrogênio, hélio e metano, e é conhecido por seus ventos extremamente fortes."
    }
};

function selecionaAstro(nomeAstro){
    let nomeUpper = nomeAstro.charAt(0).toUpperCase() + nomeAstro.slice(1);
    astroNome.textContent = nomeUpper;

    const info = astrosInfo[nomeAstro];

    astroDesc.textContent = info["desc"];
    astroDistSol.textContent = info["distSol"];
    astroDistTerra.textContent = info["distTerra"];
    astroTemperatura.textContent = info["temp"];
    astroTamanho.textContent = info["tamanho"];
    astroMassa.textContent = info["massa"];
    astroImagem.src = `images/${nomeAstro}.png`;
}

for (let i = 0; i < astros.length; i++) {
    let p = astros[i];
    document
    .getElementById(`bt-${p}`)
    .addEventListener("click", () => {
        selecionaAstro(p);
    });
}

selecionaAstro("terra");
