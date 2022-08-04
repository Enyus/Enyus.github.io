const inputBuscaASide = document.getElementById('buscaside');
const botaoFiltro = document.getElementById('filtrar');

inputBuscaASide.onkeydown = (e) => {
    if (e.key == 'Enter') {
        campoBusca.value = inputBuscaASide.value;
        botaoBusca.click();
    };
};