const planetaImagem = document.getElementById("planet-img");
planetaImagem.src = "images/terra.png";

const planetas = [
    'mercurio', 
    'venus', 
    'terra', 
    'marte', 
    'jupiter', 
    'saturno', 
    'urano', 
    'netuno'
];

function selecionaPlaneta(nomePlaneta){
planetaImagem.src=`images/${nomePlaneta}.png`;
}

for(let i=0; i<planetas.length; i++){
    let p = planetas[i];
    document
    .getElementById(`bt-${p}`)
    .addEventListener("click", ()=>{
        selecionaPlaneta(p);
});
}