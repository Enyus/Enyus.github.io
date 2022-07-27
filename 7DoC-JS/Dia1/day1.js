const listaTestes = document.querySelectorAll(".teste");
const divProblema = document.getElementById("problema");
const botaoTeste = document.getElementById("botao-teste");
const divResolucao = document.getElementById("resolucao");
const botaoResolucao = document.getElementById("botao-resolucao");

function testar() {
  botaoTeste.style.display = 'none';
  console.log(false == '0');
  listaTestes[0].innerHTML += ` // ${false == '0'}`
  console.log(null == undefined);
  listaTestes[1].innerHTML += ` // ${null == undefined}`
  console.log(" \t\r\n" == 0);
  listaTestes[2].innerHTML += ` // ${" \t\r\n" == 0}`
  console.log(' ' == 0);
  listaTestes[3].innerHTML += ` // ${' ' == 0}`
}

// Tarefa do dia 1:
let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

function resolver() {

  botaoResolucao.style.display = 'none';

  divResolucao.innerHTML += "<p>numeroUm = 1</p>";
  divResolucao.innerHTML += "<p>stringUm = '1'</p>";
  divResolucao.innerHTML += "<p>numeroTrinta = 30</p>";
  divResolucao.innerHTML += "<p>stringTrinta = '30'</p>";
  divResolucao.innerHTML += "<p>numeroDez = 10</p>";
  divResolucao.innerHTML += "<p>stringDez = '10'</p>";

  if (numeroUm == stringUm) {
    console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
    divResolucao.innerHTML += "<p>As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes</p>";
  } else {
    console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
    divResolucao.innerHTML += "<p>As variáveis numeroUm e stringUm não tem o mesmo valor</p>";
  }

  if (numeroTrinta === stringTrinta) {
    console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
    divResolucao.innerHTML += "<p>As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo</p>";
  } else {
    console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
    divResolucao.innerHTML += "<p>As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo</p>";
  }

  if (numeroDez == stringDez) {
    console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
    divResolucao.innerHTML += "<p>As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes</p>";
  } else {
    console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
    divResolucao.innerHTML += "<p>As variáveis numeroDez e stringDez não tem o mesmo valor</p>";
  }

}