const botaoInicio = document.getElementById("irparainicio");
const botaoPedidos = document.getElementById("irparapedidos");
const botaoProdutos = document.getElementById("irparaprodutos");
const botaoDados = document.getElementById("irparadados");
const botaoEnderecos = document.getElementById("irparaenderecos");
const botaoAdministradores = document.getElementById("irparaadministradores");

const divInicio = document.getElementById("resumo");
const divPedidos = document.getElementById("pedidos");
const divProdutos = document.getElementById("listaprodutos");
const divDados = document.getElementById("dados");
const divEnderecos = document.getElementById("enderecos");
const divAdministradores = document.getElementById("administradores");

const buttonImg = document.getElementById("perfilLoja");
const inputImgUpload = document.getElementById("fotoPerfil");
const buttonImgSubmit = document.getElementById("submitPerfil");

buttonImgSubmit.disabled = true;
let statusFoto = 0;

const botaoDeletaLoja = document.getElementById("botaoDeletaLoja");
const confirmaDeletaLoja = document.getElementById("confirmadeletaloja");

botaoDeletaLoja.disabled = true;

function showPreview (event) {
    if(event.target.files.length > 0){
        let fileType = event.target.files[0].name.slice(-4);
        if (fileType == '.jpg' || fileType == '.png' || fileType == 'jpeg') {
            let src = URL.createObjectURL(event.target.files[0]);
            buttonImg.src = src;
            buttonImg.style.border = 'solid 3px green';
            statusFoto = 1;
        } else {
            buttonImg.style.border = 'solid 3px red';
            statusFoto = 0;
        }
    };
};

botaoInicio.onclick = (e) => {
    divInicio.style.display= 'flex';
    divPedidos.style.display='none';
    divProdutos.style.display='none';
    divDados.style.display='none';
    divAdministradores.style.display='none';
};

botaoPedidos.onclick = (e) => {
    divInicio.style.display= 'none';
    divPedidos.style.display='block';
    divProdutos.style.display='none';
    divDados.style.display='none';
    divAdministradores.style.display='none';
};

botaoProdutos.onclick = (e) => {
    divInicio.style.display= 'none';
    divPedidos.style.display='none';
    divProdutos.style.display='block';
    divDados.style.display='none';
    divAdministradores.style.display='none';
};

botaoDados.onclick = (e) => {
    divInicio.style.display= 'none';
    divPedidos.style.display='none';
    divProdutos.style.display='none';
    divDados.style.display='block';
    divAdministradores.style.display='none';
};

botaoAdministradores.onclick = (e) => {
    divInicio.style.display= 'none';
    divPedidos.style.display='none';
    divProdutos.style.display='none';
    divDados.style.display='none';
    divAdministradores.style.display='block';
};


inputImgUpload.onchange = (e) => {
    showPreview(e);
    if (statusFoto==1) {
        buttonImgSubmit.disabled = false;
    } else {
        buttonImgSubmit.disabled = true;
    };
};

confirmaDeletaLoja.onchange = (e) => {
    if (confirmaDeletaLoja.checked) {
        botaoDeletaLoja.disabled = false;
    } else {
        botaoDeletaLoja.disabled = true;
    }
};