const inputEmail = document.getElementById("email");
const inputNome = document.getElementById("nome");
const inputDepartamentos = document.getElementById('departamentos');
const inputDisp4h = document.getElementById('4h');
const inputDisp8h = document.getElementById('8h');
const inputDispFreela = document.getElementById('freela');
const divDisp = document.getElementById('disp');
const inputMensagem = document.getElementById('mensagem');
const buttonCurriculo = document.getElementById('curriculo');
const inputCurriculo = document.getElementById('fileupload');
const buttonSubmit = document.getElementById('submit');

const erros = [];

buttonSubmit.disabled = "true";

function checkRadioInputs () {
    if( inputDisp4h.checked == true || inputDisp8h.checked == true || inputDispFreela.checked ==true) {
        divDisp.style.border = 'solid green 1px';
        if (erros.includes("disp")) {
            erros.splice(erros.indexOf("disp"), 1);
        };
    } else {
        if (!erros.includes("disp")) {
            erros.push("disp");
        };
        divDisp.style.border = 'solid red 1px';
    };
};

function checkValidation () {
    checkRadioInputs();
    if (erros.length == 0 &&
        inputEmail.value != '' &&
        inputNome.value != '' &&
        inputDepartamentos.value != '' &&
        (inputDisp4h.checked != false || inputDisp8h.checked != false || inputDispFreela.checked != false) &&
        inputMensagem.value != '' &&
        inputCurriculo.value != '') {
            buttonSubmit.disabled = false
    } else {
        buttonSubmit.disabled = "true";
    };
};

inputEmail.onblur = (e) => {
    if (inputEmail.value.length <= 3 ||
        inputEmail.value.indexOf("@") < 0 ||
        inputEmail.value.indexOf(" ") > 0 ||
        inputEmail.value.indexOf(".") < 0) {
        inputEmail.style.borderColor = "red";
        if (!erros.includes("email")) {
            erros.push("email");
        };
    } else {
        inputEmail.style.borderColor = "green";
        if (erros.includes("email")) {
            erros.splice(erros.indexOf("email"), 1);
        };
    };
    checkValidation();
};

inputNome.onblur = (e) => {
    if (inputNome.value.length < 2) {
        inputNome.style.borderColor = "red";
        if (!erros.includes("nome")) {
            erros.push("nome");
        };
    } else {
        inputNome.style.borderColor = "green";
        if (erros.includes("nome")) {
            erros.splice(erros.indexOf("nome"), 1);
        };
    }
    checkValidation();
};

inputDepartamentos.onblur = (e) => {
    if (inputDepartamentos.value == 'escolha') {
        inputDepartamentos.style.borderColor = "red";
        if (!erros.includes("departamentos")) {
            erros.push("departamentos");
        };
    } else {
        inputDepartamentos.style.borderColor = "green";
        if (erros.includes("departamentos")) {
            erros.splice(erros.indexOf("departamentos"), 1);
        };
    }
    checkValidation();
};

inputMensagem.onblur = (e) => {
    if (inputMensagem.value == '') {
        inputMensagem.style.borderColor = "red";
        if (!erros.includes("mensagem")) {
            erros.push("mensagem");
        };
    } else {
        inputMensagem.style.borderColor = "green";
        if (erros.includes("mensagem")) {
            erros.splice(erros.indexOf("mensagem"), 1);
        };
    }
    checkValidation();
};

inputCurriculo.onchange = (e) => {
    if (inputCurriculo.value == '') {
        if (!erros.includes("curriculo")) {
            erros.push("curriculo");
        };
    } else {
        buttonCurriculo.style.border = "solid green 1px";
        if (erros.includes("curriculo")) {
            erros.splice(erros.indexOf("curriculo"), 1);
        };
    }
    checkValidation();
};

inputDisp4h.onchange = (e) => checkRadioInputs();
inputDisp8h.onchange = (e) => checkRadioInputs();
inputDispFreela.onchange = (e) => checkRadioInputs();