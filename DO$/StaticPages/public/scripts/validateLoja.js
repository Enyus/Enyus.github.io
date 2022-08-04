const inputEmail = document.getElementById("email");
const inputRazaoSocial = document.getElementById("razaosocial");
const inputNomeFantasia = document.getElementById("nomefantasia");
const inputIe = document.getElementById("ie");
const inputCnpj = document.getElementById("cnpj");
const inputPassword = document.getElementById("password");
const inputConfirmaPassword = document.getElementById("confirmapassword");
const buttonSubmit = document.getElementById("submit")

const inputLogradouro = document.getElementById("logradouro");
const inputNumero = document.getElementById("numero");
const inputCidade = document.getElementById("cidade");
const inputEstado = document.getElementById("estado");
const inputCEP = document.getElementById("cep");

const erros = []

buttonSubmit.disabled = "true";

function checkValidation () {
    if (erros.length == 0 &&
        inputEmail.value != '' &&
        inputRazaoSocial.value != '' &&
        inputNomeFantasia.value != '' &&
        inputIe.value != '' &&
        inputCnpj.value != '' &&
        inputPassword.value != '' &&
        inputConfirmaPassword.value != '' &&
        inputLogradouro.value != '' &&
        inputNumero.value != '' &&
        inputCidade.value != '' &&
        inputEstado.value != '' &&
        inputCEP.value != '') {
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

inputRazaoSocial.onblur = (e) => {
    if (inputRazaoSocial.value.length < 2) {
        inputRazaoSocial.style.borderColor = "red";
        if (!erros.includes("Razão Social")) {
            erros.push("Razão Social");
        };
    } else {
        inputRazaoSocial.style.borderColor = "green";
        if (erros.includes("Razão Social")) {
            erros.splice(erros.indexOf("Razão Social"), 1);
        };
    }
    checkValidation();
}

inputNomeFantasia.onblur = (e) => {
    if (inputNomeFantasia.value.length < 2) {
        inputNomeFantasia.style.borderColor = "red";
        if (!erros.includes("Nome Fantasia")) {
            erros.push("Nome Fantasia");
        };
    } else {
        inputNomeFantasia.style.borderColor = "green";
        if (erros.includes("Nome Fantasia")) {
            erros.splice(erros.indexOf("Nome Fantasia"), 1);
        };
    }
    checkValidation();
}

inputIe.onblur = (e) => {
    if (inputIe.value.length < 9 || inputIe > 14) {
        inputIe.style.borderColor = "red";
        if (!erros.includes("Inscrição Estadual")) {
            erros.push("Inscrição Estadual");
        };
    } else {
        inputIe.style.borderColor = "green";
        if (erros.includes("Inscrição Estadual")) {
            erros.splice(erros.indexOf("Inscrição Estadual"), 1);
        };
    }
    checkValidation();
}

inputCnpj.onblur = (e) => {
    if (inputCnpj.value.length != 14 ||
        isNaN(inputCnpj.value)) {
        inputCnpj.style.borderColor = "red";
        alert("O CNPJ deve ser apenas numérico e ter 14 números")
        if (!erros.includes("CNPJ")) {
            erros.push("CNPJ");
        };
    } else {
        inputCnpj.style.borderColor = "green";
        if (erros.includes("CNPJ")) {
            erros.splice(erros.indexOf("CNPJ"), 1);
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
        if (!erros.includes("confirmaSenha")) {
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

inputLogradouro.onblur = (e) => {
    if (inputLogradouro.value.length < 2) {
        inputLogradouro.style.borderColor = "red";
        if (!erros.includes("logradouro")) {
            erros.push("logradouro");
        };
    } else {
        inputLogradouro.style.borderColor = "green";
        if (erros.includes("logradouro")) {
            erros.splice(erros.indexOf("logradouro"), 1);
        };
    }
    checkValidation();
};

inputNumero.onblur = (e) => {
    if (inputNumero.value.length < 0) {
        inputNumero.style.borderColor = "red";
        if (!erros.includes("numero")) {
            erros.push("numero");
        };
    } else {
        inputNumero.style.borderColor = "green";
        if (erros.includes("numero")) {
            erros.splice(erros.indexOf("numero"), 1);
        };
    }
    checkValidation();
};

inputCidade.onblur = (e) => {
    if (inputCidade.value.length < 2) {
        inputCidade.style.borderColor = "red";
        if (!erros.includes("cidade")) {
            erros.push("cidade");
        };
    } else {
        inputCidade.style.borderColor = "green";
        if (erros.includes("cidade")) {
            erros.splice(erros.indexOf("cidade"), 1);
        };
    }
    checkValidation();
};

inputEstado.onblur = (e) => {
    if (inputEstado.value.length < 2) {
        inputEstado.style.borderColor = "red";
        if (!erros.includes("estado")) {
            erros.push("estado");
        };
    } else {
        inputEstado.style.borderColor = "green";
        if (erros.includes("estado")) {
            erros.splice(erros.indexOf("estado"), 1);
        };
    }
    checkValidation();
};

inputCEP.onblur = (e) => {
    if ( inputCEP.value.length != 8 ) {
        inputCEP.style.borderColor = "red";
        if (!erros.includes("cep")) {
            erros.push("cep");
        };
    } else {
        inputCEP.style.borderColor = "green";
        if (erros.includes("cep")) {
            erros.splice(erros.indexOf("cep"), 1);
        };
    }
    checkValidation();
};