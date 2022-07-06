let pause = true;

// Variáveis da Bolinha:
let bolinha = {
    x: 177.5,
    y: 140,
    velx: 3,
    vely: 3
};
let iconeBolinha = document.getElementById("bolinha");

// Variáveis dos Botões:
let divBotaoJogar = document.getElementById("botaojogar");
let divBotaoPausar = document.getElementById("botaopausar");

// Variáveis das Raquetes:
let iconeRaqueteJogador = document.getElementById("raqueteJogador");
let iconeRaqueteIA = document.getElementById("raqueteIA");
let raqueteJogador = {
    y: 97.5,
    vely: 20
};
let raqueteIA = {
    y: 27.5,
    chanceErrar: 0
};

// Variáveis dos Pontos:
let pontosJogador = 0;
let pontosIA = 0;
let marcadorPontosJogador = document.getElementById("pontosJogador");
let marcadorPontosIA = document.getElementById("pontosIA");
let mensagemFim = document.getElementById("mensagem");
let divResultado = document.getElementById("resultado");

// Variáveis do Controle:
let inputRange = document.getElementById("range");

/* Correlações das variáveis Y entre bolinha e raquetes:
    - Quando a posição é relativa, ela é relativa ao height/width do 'objeto' (no caso da div)
    - Assim, a bolinha é o sprite principal (pois aparece primeiro no html), então suas coordenadas podem ser consideradas as 'absolutas'
    - Mas, deve-se levar em consideração que o centro dos objetos
    - Desta forma, as coordenadas da Raquete do Jogador:
        -- raqueteJogador.y = 15px (height da bolinha) + bolinha.y = bolinha.y + 15
    - E as coordenadas da Raquete da IA:
        -- Além da bolinha, tem que se levar em consideração a Raquete do Jogador, além da bolinha
        -- raqueteIA.y =  15px (height da bolinha) + 70px (height da Raquete do Jogador) + bolinha.y = bolinha.y + 85
*/

function moverBolinha() {
    if(!pause) {
        if (bolinha.x >= 351.5 || bolinha.x <= 0 ||
            (bolinha.x >= 330.5 && bolinha.y >= raqueteIA.y + 72.5 && bolinha.y <= raqueteIA.y + 152.5 ) ||
            (bolinha.x <= 24.5 && bolinha.y >= raqueteJogador.y - 2.5 && bolinha.y <= raqueteJogador.y + 82.5 ) ) {
            bolinha.velx *= -1;
            if (bolinha.x >= 351.5) {
                pontosJogador += 1;
            };
            if (bolinha.x <= 0) {
                pontosIA += 1;
            }
        };
        if (bolinha.y >= 290 || bolinha.y <= 0 ||
            (bolinha.x > 330.5 && ( (bolinha.y < raqueteIA.y + 72.5 && bolinha.y >= raqueteIA.y + 52.5 && bolinha.vely > 0) || (bolinha.y > raqueteIA.y + 152.5 && bolinha.y <= raqueteIA.y + 172.5 && bolinha.vely < 0 ) ) ) ||
            (bolinha.x < 24.5 && ( (bolinha.y < raqueteJogador.y - 2.5 && bolinha.y >= raqueteJogador.y - 22.5 && bolinha.vely > 0 ) || (bolinha.y >= raqueteJogador.y + 87.5 && bolinha.y <= raqueteJogador.y + 107.5 && bolinha.vely < 0 ) ) ) ) {
            bolinha.vely *= -1;
        };
        atualizar();
    };
};

let count = 0;

function atualizar() {
    bolinha.x += bolinha.velx;
    bolinha.y += bolinha.vely;
    iconeBolinha.style.left = `${bolinha.x}px`;
    iconeBolinha.style.top = `${bolinha.y}px`;
    raqueteIA.y = bolinha.y - 100 + raqueteIA.chanceErrar;
    if (count == 200) {
        raqueteIA.chanceErrar = parseInt(Math.random()*(35 + 60) - 60);
        count = 0;
    }
    iconeRaqueteIA.style.top = `${raqueteIA.y}px`;
    marcadorPontosJogador.innerHTML = pontosJogador;
    marcadorPontosIA.innerHTML = pontosIA;
    count += 1;
    checarVencedor();
    // código para esperar 10 milisegundos antes do próximo loop
    window.setTimeout(moverBolinha, 10);
};

function jogar() {
    toggleFullScreen();
    divBotaoJogar.style.display = "none";
    divBotaoPausar.style.display = "flex";
    pause = false;
    pontosJogador = 0;
    pontosIA = 0;
    marcadorPontosJogador.innerHTML = pontosJogador;
    marcadorPontosIA.innerHTML = pontosIA;
    mensagemFim.innerHTML = "";
    divResultado.style.display = "none";
    moverBolinha();
};

function pausar() {
    divBotaoJogar.style.display = "flex";
    divBotaoPausar.style.display = "none";
    pause = true;
    bolinha.x = 177.5;
    bolinha.y = 147.5;
    iconeBolinha.style.left = `${bolinha.x}px`;
    iconeBolinha.style.top = `${bolinha.y}px`;
    raqueteJogador.y = 97.5;
    iconeRaqueteJogador.style.top = `${raqueteJogador.y}px`;
    raqueteIA.y = 27.5;
    iconeRaqueteIA.style.top = `${raqueteIA.y}px`;
    toggleFullScreen();
};

function checarVencedor () {
    if (pontosIA >= 10) {
        pausar();
        mensagemFim.innerHTML = "Você Perdeu";
        divResultado.style.display = "block";
    };
    if (pontosJogador >=10) {
        pausar();
        mensagemFim.innerHTML = "Você Ganhou!";
        divResultado.style.display = "block";
    }
}

function reset () {
    pontosJogador = 0;
    pontosIA = 0;
    marcadorPontosJogador.innerHTML = pontosJogador;
    marcadorPontosIA.innerHTML = pontosIA;
    mensagemFim.innerHTML = "";
    divResultado.style.display = "none";
}

window.onkeydown = (e) => {
    if (e.key == "ArrowUp" && raqueteJogador.y >= -20) {
        raqueteJogador.y -= raqueteJogador.vely;
        inputRange.value = `${raqueteJogador.y}`;
    }
    if (e.key == "ArrowDown" && raqueteJogador.y <= 227.5) {
        raqueteJogador.y += raqueteJogador.vely;
        inputRange.value = `${raqueteJogador.y}`;
    }
    iconeRaqueteJogador.style.top = `${raqueteJogador.y}px`;
};

inputRange.oninput = (e) => {
    // console.log(inputRange.value);
    raqueteJogador.y = inputRange.value;
    iconeRaqueteJogador.style.top = `${raqueteJogador.y}px`;
}

// Função para deixar em FullScreen:
function toggleFullScreen() {
    if (!document.fullscreenElement &&    // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  };