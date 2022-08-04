const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const inputTelefone = document.getElementById('telefone');
const inputMensagem = document.getElementById('mensagem');
const buttonSubmit = document.getElementById('submit');

const erros = [];

buttonSubmit.disabled = "true";

function checkValidation () {
    if (erros.length == 0 &&
        inputNome.value != '' && inputNome.value != 'Nome Completo' &&
        inputEmail.value != '' && inputEmail.value != 'E-mail' &&
        inputTelefone.value != '' && inputTelefone.value != 'Telefone para contato (xx) xxxxx-xxxx' &&
        inputMensagem.value != '' && inputMensagem.value != 'Digite aqui sua dúvida') {
            buttonSubmit.disabled = false
    } else {
        buttonSubmit.disabled = "true";
    };
};

inputNome.onblur = (e) => {
    if (inputNome.value.length < 2 || inputNome.value == 'Nome Completo') {
        inputNome.style.border = "solid red 1px";
        if (!erros.includes("nome")) {
            erros.push("nome");
        };
    } else {
        inputNome.style.border = "solid green 1px";
        if (erros.includes("nome")) {
            erros.splice(erros.indexOf("nome"), 1);
        };
    }
    checkValidation();
};

inputEmail.onblur = (e) => {
    if (inputEmail.value.length <= 3 ||
        inputEmail.value.indexOf("@") < 0 ||
        inputEmail.value.indexOf(" ") > 0 ||
        inputEmail.value.indexOf(".") < 0) {
        inputEmail.style.border = "solid red 1px";
        if (!erros.includes("email")) {
            erros.push("email");
        };
    } else {
        inputEmail.style.border = "solid green 1px";
        if (erros.includes("email")) {
            erros.splice(erros.indexOf("email"), 1);
        };
    };
    checkValidation();
};

inputTelefone.onblur = (e) => {
    if (inputTelefone.value.length < 10 || inputTelefone.value == 'Telefone para contato (xx) xxxxx-xxxx') {
        inputTelefone.style.border = "solid red 1px";
        if (!erros.includes("telefone")) {
            erros.push("telefone");
        };
    } else {
        inputTelefone.style.border = "solid green 1px";
        if (erros.includes("telefone")) {
            erros.splice(erros.indexOf("telefone"), 1);
        };
    }
    checkValidation();
};

inputMensagem.onblur = (e) => {
    if (inputMensagem.value.length < 4 || inputMensagem.value == 'Digite aqui sua dúvida') {
        inputMensagem.style.border = "solid red 1px";
        if (!erros.includes("mensagem")) {
            erros.push("mensagem");
        };
    } else {
        inputMensagem.style.border = "solid green 1px";
        if (erros.includes("mensagem")) {
            erros.splice(erros.indexOf("mensagem"), 1);
        };
    };
    checkValidation();
};