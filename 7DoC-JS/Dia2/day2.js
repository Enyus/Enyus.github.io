let divResolucao = document.getElementById("resolucao");
let botaoResolver = document.getElementById("botao-resolver");

let nome
let idade
let linguagem

function resolver() {
    botaoResolver.style.display = "none";

    nome = prompt("Qual o seu nome?");
    console.log(nome);
    idade = prompt("Quantos anos você tem?");
    console.log(idade);
    linguagem = prompt("Qual linguagem de programação você está estudando?");
    console.log(linguagem);

    divResolucao.innerHTML += `<p><em>Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!</em></p>`;
    divResolucao.innerHTML += "<button onclick='resolver2()' id='botao-resolver-2'>Continuar</button>"
    console.log(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);
}

function resolver2 () {
    document.getElementById("botao-resolver-2").style.display = 'none';

    let resposta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`)
    console.log(resposta);

    if(resposta == '1') {
        console.log("Muito bom! Continue estudando e você terá muito sucesso.");
        divResolucao.innerHTML += "Muito bom! Continue estudando e você terá muito sucesso.";
        divResolucao.innerHTML += "<button onclick='recomecar()'>Recomeçar</button>"
    } else if (resposta == '2') {
        console.log("Ahh que pena... Já tentou aprender outras linguagens?");
        divResolucao.innerHTML += "Ahh que pena... Já tentou aprender outras linguagens?";
        divResolucao.innerHTML += "<button onclick='recomecar()'>Recomeçar</button>"
    } else {
        alert("Não entendi sua resposta, tente de novo respondendo 1 ou 2");
        resolver2();
    }
}

function recomecar() {
    document.location.reload(true);
}