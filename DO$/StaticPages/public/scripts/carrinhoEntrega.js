const inputCEP = document.getElementById('cep');
const inputLogradouro = document.getElementById('logradouro');
const inputNumero = document.getElementById('numero');
const inputComplemento = document.getElementById('complemento');
const inputCidade = document.getElementById('cidade');
const inputEstado = document.getElementById('estado');
const buttonSubmit = document.getElementById('submit');
const modalidadeEntrega = document.getElementById('modalidadeentrega');
const form = document.getElementById('form');

const inputsAutoEndereco = document.getElementsByName('enderecoauto');

const errosEndereco=['modalidade'];
buttonSubmit.disabled = 'true';

function autoEndereco(event) {
    inputLogradouro.value = event.path[1].children[2].value;
    inputNumero.value = event.path[1].children[3].value;
    inputComplemento.value = event.path[1].children[4].value;
    inputCidade.value = event.path[1].children[5].value;
    inputEstado.value = event.path[1].children[6].value;
    inputCEP.value = event.path[1].children[7].value;
};

function uncheckAutoEndereco() {
    inputsAutoEndereco.forEach(input => {
        input.checked = false;
    });
};

function checkValidationEndereco () {
    if (errosEndereco.length == 0 &&
        inputLogradouro.value != '' &&
        inputNumero.value != '' &&
        inputCidade.value != '' &&
        inputEstado.value != '' &&
        inputCEP.value != '') {
            buttonSubmit.disabled = false;
    } else {
        buttonSubmit.disabled = true;
    };
}

form.onclick = (e) => {checkValidationEndereco()}

inputCEP.onfocus = (e) => {
    inputCEP.value = "";
    uncheckAutoEndereco();
};

inputLogradouro.onfocus = (e) => {
    inputLogradouro.value = "";
    uncheckAutoEndereco();
};

inputNumero.onfocus = (e) => {
    inputNumero.value = "";
    uncheckAutoEndereco();
};

inputComplemento.onfocus = (e) => {
    inputComplemento.value = "";
    uncheckAutoEndereco();
};

inputCidade.onfocus = (e) => {
    inputCidade.value = "";
    uncheckAutoEndereco();
};

inputEstado.onfocus = (e) => {
    inputEstado.value = "";
    uncheckAutoEndereco();
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
    if (inputNumero.value.length <= 0) {
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

modalidadeEntrega.onclick = (e) => {
    if (e.target.nodeName == 'INPUT') {
        modalidadeEntrega.style.borderColor = 'green';
        if (errosEndereco.includes("modalidade")) {
            errosEndereco.splice(errosEndereco.indexOf("modalidade"), 1);
        };
    };
    checkValidationEndereco();
};