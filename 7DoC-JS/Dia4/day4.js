divResolucao = document.getElementById("resolucao");
botaoResolucao = document.getElementById("botao-resolver");

function resolver() {
    botaoResolucao.style.display = 'none';

    let numero = Math.floor(Math.random()*10 + 1);

    for (tentativa = 1; tentativa <= 3; tentativa++) {
        let resposta = prompt(`Pensei em um número inteiro de 1 a 10, tente adivinhar qual é. Você tem ${4-tentativa} tentativas.`)
        divResolucao.innerHTML += `<p>Pensei em um número inteiro de 1 a 10, tente adivinhar qual é. Você tem ${4-tentativa} tentativas.</p>`
        if (resposta == numero) {
            alert(`Parabéns, você acertou! O número era ${numero}.`);
            divResolucao.innerHTML += `<p>Parabéns, você acertou! O número era ${numero}.</p>`;
            divResolucao.innerHTML += "<button onclick='recomecar()'>Recomeçar</button>";
            break;
        } else if (tentativa == 3) {
            alert(`Você errou e terminaram suas tentativas, o número era ${numero}.`);
            divResolucao.innerHTML += `<p>Você errou e terminaram suas tentativas, o número era ${numero}.</p>`
            divResolucao.innerHTML += "<button onclick='recomecar()'>Recomeçar</button>";
        } else {
            alert(`Você chutou ${resposta}, mas errou. Tente novamente.`);
            divResolucao.innerHTML += `<p>Você chutou ${resposta}, mas errou. Tente novamente.</p>`;
        }
    }
}

function recomecar() {
    document.location.reload(true);
}