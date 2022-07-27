let divResolucao = document.getElementById("resolucao");
let botaoResolucao = document.getElementById("botao-resolver");

let botao0;
let botao1;
let botao2;
let botao3;
let botao4;
let botao5;
let botao6;
let botao7;
let botao8;
let botao9;
let botaoMais;
let botaoMenos;
let botaoMultiplica;
let botaoDivide;
let botaoIgual;
let botaoClear;
let botaoCancelEntry;
let botoesCalc;
let botaoPonto;
let display;
let memory;
let entries = [];
let operator = null;
let solved = false;

function resolver() {
    botaoResolucao.style.display = 'none';
    divResolucao.innerHTML += '<div class="calc"><div class="calc-row"><div class="calc-display" id="display"></div><p class="calc-memory" id="memory"></p></div><div class="calc-row"><button id="buttonClear">C</button><button id="buttonCancelEntry">CE</button><button id="buttonDivide">/</button></div><div class="calc-row"><button id="button7">7</button><button id="button8">8</button><button id="button9">9</button><button id="buttonMultiplica">x</button></div><div class="calc-row"><button id="button4">4</button><button id="button5">5</button><button id="button6">6</button><button id="buttonMenos">-</button></div><div class="calc-row"><button id="button1">1</button><button id="button2">2</button><button id="button3">3</button><button id="buttonMais">+</button></div><div class="calc-row"><button id="button0">0</button><button id="buttonPonto">.</button><button id="buttonIgual">=</button></div></div>';
    divResolucao.innerHTML += "<button onclick='recomecar()'>Recomeçar</button>";
    ativarCalculadora();
}

function recomecar() {
    document.location.reload(true);
}

function ativarCalculadora() {
    botao0 = document.getElementById("button0");
    botao1 = document.getElementById("button1");
    botao2 = document.getElementById("button2");
    botao3 = document.getElementById("button3");
    botao4 = document.getElementById("button4");
    botao5 = document.getElementById("button5");
    botao6 = document.getElementById("button6");
    botao7 = document.getElementById("button7");
    botao8 = document.getElementById("button8");
    botao9 = document.getElementById("button9");
    botaoMais = document.getElementById("buttonMais");
    botaoMenos = document.getElementById("buttonMenos");
    botaoMultiplica = document.getElementById("buttonMultiplica");
    botaoDivide = document.getElementById("buttonDivide");
    botaoIgual = document.getElementById("buttonIgual");
    botaoClear = document.getElementById("buttonClear");
    botaoCancelEntry = document.getElementById("buttonCancelEntry");
    botaoPonto = document.getElementById("buttonPonto");

    botoesCalc = [botao0, botao1, botao2, botao3, botao4, botao5, botao6, botao7, botao8, botao9, botaoMais, botaoMenos, botaoMultiplica, botaoDivide, botaoIgual, botaoClear, botaoCancelEntry, botaoPonto];

    display = document.getElementById("display");
    memory = document.getElementById("memory");

    botoesCalc.forEach(botao => {
        botao.onclick = (e) => {
            switch (botao.innerHTML) {
                case '+':
                    checkSolved();
                    if (display.innerHTML != '') {
                        entries.push(parseFloat(display.innerHTML));
                        updateMemory(display.innerHTML)
                        if (entries.length > 1) {
                            solve();
                        }
                        operator = '+';
                        updateMemory(" " + operator + " ");
                    }
                    break;
                case '-':
                    checkSolved();
                    if (display.innerHTML != '') {
                        entries.push(parseFloat(display.innerHTML));
                        updateMemory(display.innerHTML)
                        if (entries.length > 1) {
                            solve();
                        }
                        operator = '-';
                        updateMemory(" " + operator + " ");
                    }
                    break;
                case 'x':
                    checkSolved();
                    if (display.innerHTML != '') {
                        entries.push(parseFloat(display.innerHTML));
                        updateMemory(display.innerHTML);
                        if (entries.length > 1) {
                            solve();
                        }
                        operator = 'x';
                        updateMemory(" " + operator + " ");
                    }
                    break;
                case '/':
                    checkSolved();
                    if (display.innerHTML != '') {
                        entries.push(parseFloat(display.innerHTML));
                        updateMemory(display.innerHTML);
                        if (entries.length > 1) {
                            solve();
                        }
                        operator = '/';
                        updateMemory(" " + operator + " ");
                    }
                    break;
                case '=':
                    checkSolved();
                    if (display.innerHTML != '') {
                        entries.push(parseFloat(display.innerHTML));
                        updateMemory(display.innerHTML);
                        solve();
                        display.innerHTML = entries[0];
                        solved = true;
                    }
                    break;
                case 'C':
                    display.innerHTML = '';
                    memory.innerHTML = '';
                    entries = [];
                    solved = false;
                    break;
                case 'CE':
                    display.innerHTML = '';
                    break;
                default:
                    checkSolved();
                    display.innerHTML += botao.innerHTML;
                    break;
            };
        }
    })
}

function solve() {
    let resultado;
    switch (operator) {
        case '+':
            resultado = entries[0] + entries[1];
            break;
        case '-':
            resultado = entries[0] - entries[1];
            break;
        case 'x':
            resultado = entries[0] * entries[1];
            break;
        case '/':
            resultado = entries[0] / entries[1];
            break;
        default:
            resultado = entries[0];
            break;
    }
    entries = [resultado];
    operator = null;
    updateMemory(" = " + resultado);
}

function updateMemory(texto) {
    if (memory.innerHTML.includes("=")) {
        memory.innerHTML = memory.innerHTML.slice(memory.innerHTML.indexOf("=") + 1)
    }
    memory.innerHTML += texto;
    display.innerHTML = '';
}

function checkSolved() {
    if (solved) {
        display.innerHTML = '';
        memory.innerHTML = '';
        entries = [];
        solved = false;
    }
}

window.onkeydown = (e) => {
    switch (e.key) {
        case '0':
            botao0.click();
            break;
        case '1':
            botao1.click();
            break;
        case '2':
            botao2.click();
            break;
        case '3':
            botao3.click();
            break;
        case '4':
            botao4.click();
            break;
        case '5':
            botao5.click();
            break;
        case '6':
            botao6.click();
            break;
        case '7':
            botao7.click();
            break;
        case '8':
            botao8.click();
            break;
        case '9':
            botao9.click();
            break;
        case 'Enter':
            botaoIgual.click();
            break;
        case '+':
            botaoMais.click();
            break;
        case '-':
            botaoMenos.click();
            break;
        case '*':
            botaoMultiplica.click();
            break;
        case '/':
            botaoDivide.click();
            break;
        case 'Backspace':
            botaoCancelEntry.click();
            break;
        case '.':
            botaoPonto.click();
            break;
        case ',':
            botaoPonto.click();
            break;
        case 'Escape':
            botaoClear.click();
            break;
        default:
            break;
    }
}