const inputEmail = document.getElementById("email");
const inputNome = document.getElementById("nome");
const inputSobrenome = document.getElementById("sobrenome");
const inputDataNasc = document.getElementById("dataNasc");
const inputCpf = document.getElementById("cpf");
const inputPassword = document.getElementById("password");
const inputConfirmaPassword = document.getElementById("confirmapassword");
const buttonSubmit = document.getElementById("submit")

const erros = []

buttonSubmit.disabled = "true";

function checkValidation () {
    if (erros.length == 0 &&
        inputEmail.value != '' &&
        inputNome.value != '' &&
        inputSobrenome.value != '' &&
        inputDataNasc.value != '' &&
        inputCpf.value != '' &&
        inputPassword.value != '' &&
        inputConfirmaPassword.value != '') {
            buttonSubmit.disabled = false
    } else {
        buttonSubmit.disabled = "true";
    };
}

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
}

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
}

// Qual validação usar para data de nascimento?

inputDataNasc.onblur = (e) => {
    if (inputDataNasc.value.length != 10) {
        inputDataNasc.style.borderColor = "red";
        if (!erros.includes("dataNasc")) {
            erros.push("dataNasc");
        };
    } else {
        inputDataNasc.style.borderColor = "green";
        if (erros.includes("dataNasc")) {
            erros.splice(erros.indexOf("dataNasc"), 1);
        };
    }
    checkValidation();
}

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
}

inputPassword.onblur = (e) => {
    if (inputPassword.value.length < 6) {
        inputPassword.style.borderColor = "red";
        if (!erros.includes("senha")) {
            erros.push("senha");
        };
    } else {
        inputPassword.style.borderColor = "green";
        if (erros.includes("senha")) {
            erros.splice(erros.indexOf("senha"), 1);
        };
    }
    checkValidation();
}

inputConfirmaPassword.onblur = (e) => {
    if (inputConfirmaPassword.value != inputPassword.value ) {
        inputConfirmaPassword.style.borderColor = "red";
        if(!erros.includes("confirmaSenha")) {
            erros.push("confirmaSenha");
        };
    } else {
        inputConfirmaPassword.style.borderColor = "green";
        if (erros.includes("confirmaSenha")) {
            erros.splice(erros.indexOf("confirmaSenha"), 1);
        };
    }
    checkValidation();
}