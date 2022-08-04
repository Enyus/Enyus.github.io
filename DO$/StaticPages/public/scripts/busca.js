const campoBusca = document.getElementById('campobusca');
const botaoBusca = document.getElementById('botaobuscar');
const campoBuscaMobile = document.getElementById('campobuscamobile');
const botaoBuscaMobile = document.getElementById('botaobuscarmobile');

const botaoCategoriaMobile = document.getElementById('categoriamobile');
const divCategoriaMobile = document.getElementById('divcategoriasmobile');
const botaoFechar = document.getElementById('fechar');

campoBusca.onkeydown = (e) => {
    if (e.key == 'Enter') {
        botaoBusca.click();
    };
};

botaoBusca.onclick = (e) => {
    if (campoBusca.value == '') {
        e.preventDefault()
    } else {
        botaoBusca.setAttribute('href', '/resultadobusca?page=1&busca='+campoBusca.value);
    };
};

campoBuscaMobile.onkeydown = (e) => {
    if (e.key == 'Enter') {
        botaoBuscaMobile.click();
    };
};

botaoBuscaMobile.onclick = (e) => {
    if (campoBuscaMobile.value == '') {
        e.preventDefault()
    } else {
        botaoBuscaMobile.setAttribute('href', '/resultadobusca?page=1&busca='+campoBuscaMobile.value);
    };
};

botaoCategoriaMobile.onclick = (e) => {
    divCategoriaMobile.style.display='flex';
};

botaoFechar.onclick = (e) => {
    divCategoriaMobile.style.display='none';
}