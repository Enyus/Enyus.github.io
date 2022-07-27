divResolucao = document.getElementById("resolucao");
botaoResolucao = document.getElementById("botao-resolver");

let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
listaCompleta = [frutas, laticinios, congelados, doces];
let resposta = "sim";

function resolver() {
    let errou = false;

    divResolucao.innerHTML += "<p>Esta é sua lista de compras:</p><ul id='listaDeCompras'></ul>";
    divResolucao.innerHTML += "<button onclick='adicionarItem()'>Adicionar mais Itens</button>";
    divResolucao.innerHTML += "<button onclick='retirarItem()'>Retirar item da Lista</button>";
    divResolucao.innerHTML += "<button onclick='recomecar()'>Recomeçar</button>";

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
        alert("Não entendi sua resposta, escreva 'sim' ou 'não'.");
        errou = true;
        resolver();
    }
}

function adicionarItem() {
    resposta = 'sim';
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
                alert("Esta categoria não existe");
                break;
        }

        resposta = prompt("Mais algum item? Responda 'sim' ou 'não'.")

        if (resposta != 'sim' && resposta != 'não') {
            while (resposta != 'sim' && resposta != 'não') {
                alert("Esta não é uma resposta válida. Responda 'sim' ou 'não'.");
                resposta = prompt("Mais algum item? Responda 'sim' ou 'não'.");
            }
        }
    }

    mostrarLista();
}

function retirarItem () {
    let itemRetirado = '';
    itemRetirado = prompt("Qual o item que gostaria de retirar?");
    let houveAlteracao = false;

    listaCompleta.forEach( item => {
        if(item.includes(itemRetirado)) {
            item.splice(itemRetirado, 1);
            houveAlteracao = true;
        }
    })

    if(!houveAlteracao) {
        alert("Não encontramos este item em sua lista de compras.")
    }

    mostrarLista();
}

function mostrarLista() {
    let listaDeCompras = document.getElementById("listaDeCompras");
    listaDeCompras.innerHTML = '';

    listaCompleta.forEach(categoria => {
        if (categoria.length > 0) {
            let listaAAdicionar = "";
            categoria.forEach(item => { listaAAdicionar += ` ${item},` });
            switch (listaCompleta.indexOf(categoria)) {
                case 0:
                    listaDeCompras.innerHTML += `<li><strong>Frutas:</strong> ${listaAAdicionar}</li>`;
                    break;
                case 1:
                    listaDeCompras.innerHTML += `<li><strong>Laticínios:</strong> ${listaAAdicionar}</li>`;
                    break;
                case 2:
                    listaDeCompras.innerHTML += `<li><strong>Congelados:</strong> ${listaAAdicionar}</li>`;
                    break;
                case 3:
                    listaDeCompras.innerHTML += `<li><strong>Doces:</strong> ${listaAAdicionar}</li>`;
                    break;
                default:
                    break;
            }
        }
    })
}

function finalizar() {
    if (frutas.length == 0 && laticinios.length == 0 && congelados.length == 0 && doces.length == 0) {
        divResolucao.innerHTML += "<p>Sua lista de compras está vazia.</p>";
    }
}

function recomecar() {
    document.location.reload(true);
}