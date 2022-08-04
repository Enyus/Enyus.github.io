const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("senha");
const buttonSubmit = document.getElementById("submit")

const erros = []

buttonSubmit.disabled = "true";

function checkValidation () {
    if (erros.length == 0 &&
        inputEmail.value != '' &&
        inputPassword.value != '') {
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
};