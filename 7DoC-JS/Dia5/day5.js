divResolucao = document.getElementById("resolucao");
botaoResolucao = document.getElementById("botao-resolver");

let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let resposta = "sim";

function resolver() {
    let errou = false;

    if (!errou) {
        botaoResolucao.style.display = 'none';
        divResolucao.innerHTML += "Tem algum item que você gostaria de adicionar a sua lista de compras?"
    }

    resposta = prompt("Tem algum item que você gostaria de adicionar a sua lista de compras? Responda 'sim' ou 'não'.");

    if (resposta == "sim") {
        errou = false;
        adicionarItem();
    } else if (resposta == "não") {
        errou = false;
        finalizar();
    } else {
        alert ("Não entendi sua resposta, escreva 'sim' ou 'não'.");
        errou = true;
        resolver();
    }
}

function adicionarItem () {
    let itemAdicionado = '';
    let categoriaAdicionada = '';

    while (resposta == 'sim') {
        itemAdicionado = prompt("Qual o item gostaria de adicionar?");
        categoriaAdicionada = prompt("Este item se encaixaria em qual categoria? Escolha entre 'frutas', 'laticinios', 'congelados' ou 'doces'.")

        switch (categoriaAdicionada) {
            case 'frutas':
                frutas.push(itemAdicionado);
                break;
            case 'laticinios':
                laticinios.push(itemAdicionado);
                break;
            case 'congelados':
                congelados.push(itemAdicionado);
                break;
            case 'doces':
                doces.push(itemAdicionado);
                break;
            default:
                alert ("Esta categoria não existe");
                break;
        }

        resposta = prompt("Mais algum item? Responda 'sim' ou 'não'.")

        if (resposta != 'sim' && resposta != 'não') {
            alert("Esta não é uma resposta válida. Responda 'sim' ou 'não'.");
            adicionarItem();
        }
    }

    finalizar();
}

function finalizar() {
    if(frutas.length == 0 && laticinios.length == 0 && congelados.length == 0 && doces.length == 0) {
        divResolucao.innerHTML += "<p>Sua lista de compras está vazia.</p>";
    } else {
        divResolucao.innerHTML += "<p>Esta é sua lista de compras:</p><ul>";

        if (frutas.length > 0) {
            let listaFrutas = "";
            frutas.forEach( fruta => {listaFrutas += ` ${fruta},`});
            divResolucao.innerHTML += `<li><strong>Frutas:</strong> ${listaFrutas}</li>`;
        }

        if (laticinios.length > 0) {
            let listaLaticinios = "";
            laticinios.forEach( laticinio => {listaLaticinios += ` ${laticinio},`});
            divResolucao.innerHTML += `<li><strong>Laticínios:</strong> ${listaLaticinios}</li>`;
        }

        if (congelados.length > 0) {
            let listaCongelados = "";
            congelados.forEach( congelado => {listaCongelados += ` ${congelado},`});
            divResolucao.innerHTML += `<li><strong>Congelados:</strong> ${listaCongelados}</li>`;
        }

        if (doces.length > 0) {
            let listaDoces = "";
            doces.forEach( doce => {listaDoces += ` ${doce},`});
            divResolucao.innerHTML += `<li><strong>Doces:</strong> ${listaDoces}</li>`;
        }

        divResolucao.innerHTML += "</ul>"
    }

    divResolucao.innerHTML += "<button onclick='recomecar()'>Recomeçar</button>";
}

function recomecar() {
    document.location.reload(true);
}