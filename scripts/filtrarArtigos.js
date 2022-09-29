let filtroSelecionado = document.getElementById('filtro');
const containerProjetos = document.getElementById('container');

function filtrarArtigos () {
    switch (filtroSelecionado.value) {
        case 'novos':
            containerProjetos.style.flexWrap = 'wrap-reverse';
            containerProjetos.style.flexDirection = 'row-reverse';
            break;
        default:
            containerProjetos.style.flexWrap = 'wrap';
            containerProjetos.style.flexDirection = 'row';
    }
};