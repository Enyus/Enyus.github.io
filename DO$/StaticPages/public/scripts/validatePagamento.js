const form = document.getElementById('form');
const divFormaPagamento = document.getElementById('formapagamento');
const numeroCartao = document.getElementById('numerocartao');
const parcelamento = document.getElementById('parcelamento');
const nomeCartao = document.getElementById('nomecartao');
const validadeCartao = document.getElementById('validadecartao');
const anoValidade = document.getElementById('anovalidade');
const codSeguranca = document.getElementById('codseguranca');
const cpfTitular = document.getElementById('cpftitularcartao');
const buttonSubmit = document.getElementById('fakesubmit');

const erros = ['formapagamento'];

buttonSubmit.disabled = true;

function checkValidation() {
    if (erros.length == 0 &&
        numeroCartao.value != '' &&
        nomeCartao.value != '' &&
        codSeguranca.value != '' &&
        cpfTitular.value != '') {
        buttonSubmit.disabled = false;
    } else {
        buttonSubmit.disabled = true;
    };
};

function checkValidadeCartao() {
    if (validadeCartao.value < (new Date()).getMonth() + 1 &&
        anoValidade.value == new Date().getFullYear()) {
        validadeCartao.style.borderColor = "red";
        anoValidade.style.borderColor = "red";
        if (!erros.includes("validadecartao")) {
            erros.push("validadecartao");
        };
    } else {
        validadeCartao.style.borderColor = "green";
        anoValidade.style.borderColor = "green";
        if (erros.includes("validadecartao")) {
            erros.splice(erros.indexOf("validadecartao"), 1);
        };
    }
    checkValidation();
};

form.onclick = (e) => { checkValidation() };

divFormaPagamento.onclick = (e) => {
    if (e.target.nodeName == 'INPUT') {
        if (erros.includes("formapagamento")) {
            erros.splice(erros.indexOf("formapagamento"), 1);
        };
    };
    checkValidation();
};

numeroCartao.onblur = (e) => {
    if (numeroCartao.value.length < 13 || numeroCartao.value.length > 16) {
        numeroCartao.style.borderColor = "red";
        if (!erros.includes("numerocartao")) {
            erros.push("numerocartao");
        };
    } else {
        numeroCartao.style.borderColor = "green";
        if (erros.includes("numerocartao")) {
            erros.splice(erros.indexOf("numerocartao"), 1);
        };
    }
    checkValidation();
};

nomeCartao.onblur = (e) => {
    if (nomeCartao.value.length < 2) {
        nomeCartao.style.borderColor = "red";
        if (!erros.includes("nomecartao")) {
            erros.push("nomecartao");
        };
    } else {
        nomeCartao.style.borderColor = "green";
        if (erros.includes("nomecartao")) {
            erros.splice(erros.indexOf("nomecartao"), 1);
        };
    }
    checkValidation();
};

codSeguranca.onblur = (e) => {
    if (codSeguranca.value.length != 3) {
        codSeguranca.style.borderColor = "red";
        if (!erros.includes("codseguranca")) {
            erros.push("codseguranca");
        };
    } else {
        codSeguranca.style.borderColor = "green";
        if (erros.includes("codseguranca")) {
            erros.splice(erros.indexOf("codseguranca"), 1);
        };
    }
    checkValidation();
};

cpfTitular.onblur = (e) => {
    if (cpfTitular.value.length != 11 ||
        isNaN(cpfTitular.value)) {
        cpfTitular.style.borderColor = "red";
        if (!erros.includes("cpf")) {
            erros.push("cpf");
        };
    } else {
        cpfTitular.style.borderColor = "green";
        if (erros.includes("cpf")) {
            erros.splice(erros.indexOf("cpf"), 1);
        };
    }
    checkValidation();
};

validadeCartao.onblur = (e) => {
    checkValidadeCartao();
    checkValidation();
};

anoValidade.onblur = (e) => {
    checkValidadeCartao();
    checkValidation();
};