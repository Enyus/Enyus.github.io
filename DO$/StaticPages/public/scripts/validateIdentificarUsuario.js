const inputEmail = document.getElementById("email");
const inputNome = document.getElementById("nome");
const inputSobrenome = document.getElementById("sobrenome");
const inputCpf = document.getElementById("cpf");
const buttonSubmit = document.getElementById("submit");
const form = document.getElementById('form');

const erros = [];

buttonSubmit.disabled = "true";

function checkValidation () {
    if (erros.length == 0 &&
        inputEmail.value != '' &&
        inputNome.value != '' &&
        inputSobrenome.value != '' &&
        inputCpf.value != '') {
            buttonSubmit.disabled = false
    } else {
        buttonSubmit.disabled = "true";
    };
};

form.onclick = (e) => {checkValidation()}

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

inputSobrenome.onblur = (e) => {
    if (inputSobrenome.value.length < 2) {
        inputSobrenome.style.borderColor = "red";
        if (!erros.includes("sobrenome")) {
            erros.push("sobrenome");
        };
    } else {
        inputSobrenome.style.borderColor = "green";
        if (erros.includes("sobrenome")) {
            erros.splice(erros.indexOf("sobrenome"), 1);
        };
    }
    checkValidation();
};

inputCpf.onblur = (e) => {
    if (inputCpf.value.length != 11 ||
        isNaN(inputCpf.value)) {
        inputCpf.style.borderColor = "red";
        alert("O CPF deve ser apenas numérico e ter 11 números");
        if (!erros.includes("cpf")) {
            erros.push("cpf");
        };
    } else {
        inputCpf.style.borderColor = "green";
        if (erros.includes("cpf")) {
            erros.splice(erros.indexOf("cpf"), 1);
        };
    }
    checkValidation();
};