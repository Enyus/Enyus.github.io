const botaoInicio = document.getElementById("irparainicio");
const botaoPedidos = document.getElementById("irparapedidos");
const botaoDesejos = document.getElementById("irparadesejos");
const botaoDados = document.getElementById("irparadados");
const botaoEnderecos = document.getElementById("irparaenderecos");
const botaoVale = document.getElementById("irparavale");

const divInicio = document.getElementById("inicio");
const divPedidos = document.getElementById("pedidos");
const divDesejos = document.getElementById("desejos");
const divDados = document.getElementById("dados");
const divEnderecos = document.getElementById("enderecos");
const divVale = document.getElementById("vale");

const buttonImg = document.getElementById("perfilUsuario");
const inputImgUpload = document.getElementById("fotoPerfil");
const buttonImgSubmit = document.getElementById("submitPerfil");

buttonImgSubmit.disabled = true;
let statusFoto = 0;

const botaoDeletaUsuario = document.getElementById("botaoDeletaUsuario");
const confirmaDeletaUsuario = document.getElementById("confirmadeletausuario");

botaoDeletaUsuario.disabled = true;

const inputLogradouro = document.getElementById("logradouro");
const inputNumero = document.getElementById("numero");
const inputCidade = document.getElementById("cidade");
const inputEstado = document.getElementById("estado");
const inputCEP = document.getElementById("cep");
const botaoCadastraEndereco = document.getElementById("botaoCadastraEndereco");

botaoCadastraEndereco.disabled = true;
let errosEndereco = [];

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

function checkValidationEndereco () {
    if (errosEndereco.length == 0 &&
        inputLogradouro.value != '' &&
        inputNumero.value != '' &&
        inputCidade.value != '' &&
        inputEstado.value != '' &&
        inputCEP.value != '') {
            botaoCadastraEndereco.disabled = false
    } else {
        botaoCadastraEndereco.disabled = "true";
    };
}

botaoInicio.onclick = (e) => {
    divInicio.style.display= 'flex';
    divPedidos.style.display='none';
    divDesejos.style.display='none';
    divDados.style.display='none';
    divEnderecos.style.display='none';
    divVale.style.display='none';
};

botaoPedidos.onclick = (e) => {
    divInicio.style.display= 'none';
    divPedidos.style.display='flex';
    divDesejos.style.display='none';
    divDados.style.display='none';
    divEnderecos.style.display='none';
    divVale.style.display='none';
};

botaoDesejos.onclick = (e) => {
    divInicio.style.display= 'none';
    divPedidos.style.display='none';
    divDesejos.style.display='block';
    divDados.style.display='none';
    divEnderecos.style.display='none';
    divVale.style.display='none';
};

botaoDados.onclick = (e) => {
    divInicio.style.display= 'none';
    divPedidos.style.display='none';
    divDesejos.style.display='none';
    divDados.style.display='block';
    divEnderecos.style.display='none';
    divVale.style.display='none';
};

botaoEnderecos.onclick = (e) => {
    divInicio.style.display= 'none';
    divPedidos.style.display='none';
    divDesejos.style.display='none';
    divDados.style.display='none';
    divEnderecos.style.display='block';
    divVale.style.display='none';
};

botaoVale.onclick = (e) => {
    divInicio.style.display= 'none';
    divPedidos.style.display='none';
    divDesejos.style.display='none';
    divDados.style.display='none';
    divEnderecos.style.display='none';
    divVale.style.display='block';
};

inputImgUpload.onchange = (e) => {
    showPreview(e);
    if (statusFoto==1) {
        buttonImgSubmit.disabled = false;
    } else {
        buttonImgSubmit.disabled = true;
    };
};

confirmaDeletaUsuario.onchange = (e) => {
    if (confirmaDeletaUsuario.checked) {
        botaoDeletaUsuario.disabled = false;
    } else {
        botaoDeletaUsuario.disabled = true;
    }
};

inputLogradouro.onblur = (e) => {
    if (inputLogradouro.value.length < 2) {
        inputLogradouro.style.borderColor = "red";
        if (!errosEndereco.includes("logradouro")) {
            errosEndereco.push("logradouro");
        };
    } else {
        inputLogradouro.style.borderColor = "green";
        if (errosEndereco.includes("logradouro")) {
            errosEndereco.splice(errosEndereco.indexOf("logradouro"), 1);
        };
    }
    checkValidationEndereco();
};

inputNumero.onblur = (e) => {
    if (inputNumero.value.length < 0) {
        inputNumero.style.borderColor = "red";
        if (!errosEndereco.includes("numero")) {
            errosEndereco.push("numero");
        };
    } else {
        inputNumero.style.borderColor = "green";
        if (errosEndereco.includes("numero")) {
            errosEndereco.splice(errosEndereco.indexOf("numero"), 1);
        };
    }
    checkValidationEndereco();
};

inputCidade.onblur = (e) => {
    if (inputCidade.value.length < 2) {
        inputCidade.style.borderColor = "red";
        if (!errosEndereco.includes("cidade")) {
            errosEndereco.push("cidade");
        };
    } else {
        inputCidade.style.borderColor = "green";
        if (errosEndereco.includes("cidade")) {
            errosEndereco.splice(errosEndereco.indexOf("cidade"), 1);
        };
    }
    checkValidationEndereco();
};

inputEstado.onblur = (e) => {
    if (inputEstado.value.length < 2) {
        inputEstado.style.borderColor = "red";
        if (!errosEndereco.includes("estado")) {
            errosEndereco.push("estado");
        };
    } else {
        inputEstado.style.borderColor = "green";
        if (errosEndereco.includes("estado")) {
            errosEndereco.splice(errosEndereco.indexOf("estado"), 1);
        };
    }
    checkValidationEndereco();
};

inputCEP.onblur = (e) => {
    if ( inputCEP.value.length != 8 ) {
        inputCEP.style.borderColor = "red";
        if (!errosEndereco.includes("cep")) {
            errosEndereco.push("cep");
        };
    } else {
        inputCEP.style.borderColor = "green";
        if (errosEndereco.includes("cep")) {
            errosEndereco.splice(errosEndereco.indexOf("cep"), 1);
        };
    }
    checkValidationEndereco();
};