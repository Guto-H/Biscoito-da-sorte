const clcooked = document.querySelector("#closedCookie"), novoBiscoito = document.querySelector("#novoBiscoito");
const frasesBiscoito = [
    "A vida trará coisas boas se tiver paciência.",
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "A juventude não é uma época da vida, é um estado de espírito.",
    "Siga os bons e aprenda com eles.",
    "Não importa o tamanho da montanha, ela não pode tapar o sol.",
    "O bom-senso vale mais do que muito conhecimento.",
    "Uma bela flor é incompleta sem as suas folhas.",
    "Sem o fogo do entusiasmo, não há o calor da vitória.",
    "A adversidade é um espelho que reflete o verdadeiro eu.",
    "O riso é a menor distância entre duas pessoas.",
    "Os defeitos são mais fortes quando o amor é fraco.",
    "Amizade e Amor são coisas que se unem num piscar de olhos.",
    "Surpreender e ser surpreendido é o segredo do amor.",
    "Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.",
];

let screenOne = document.querySelector(".screen1"), screenTwo = document.querySelector(".screen2"), fraseSurpresa = document.querySelector("#frasesBiscoito");


clcooked.addEventListener('click', interacaoUsuario);
novoBiscoito.addEventListener('click', interacaoUsuario);

function interacaoUsuario(){
    screenOne.classList.toggle("hide");
    screenTwo.classList.toggle("hide");

    fraseSurpresa.innerText = frasesBiscoito[Math.round(Math.random() * 15)];
}

