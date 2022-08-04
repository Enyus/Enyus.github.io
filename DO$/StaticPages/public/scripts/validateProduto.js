const inputNomeProduto = document.getElementById("nomeproduto");
const selectMarca = document.getElementById("marca");
const inputPreco = document.getElementById("preco");
const selectCategoria = document.getElementById("categoria");
const inputDescProduto = document.getElementById("descproduto");

const divFoto = document.getElementById("fotoproduto");

const buttonImg1 = document.getElementById("buttonimg1");
const buttonImg2 = document.getElementById("buttonimg2");
const buttonImg3 = document.getElementById("buttonimg3");
const buttonImg4 = document.getElementById("buttonimg4");
const buttonImg5 = document.getElementById("buttonimg5");
const buttonImg6 = document.getElementById("buttonimg6");

const inputImgUpload1 = document.getElementById("imgupload1");
const inputImgUpload2 = document.getElementById("imgupload2");
const inputImgUpload3 = document.getElementById("imgupload3");
const inputImgUpload4 = document.getElementById("imgupload4");
const inputImgUpload5 = document.getElementById("imgupload5");
const inputImgUpload6 = document.getElementById("imgupload6");

const divDescTec = document.getElementById('desctec');

const inputCheckDesc1 = document.getElementById('checkdesc1');
const inputCheckDesc2 = document.getElementById('checkdesc2');
const inputCheckDesc3 = document.getElementById('checkdesc3');
const inputCheckDesc4 = document.getElementById('checkdesc4');
const inputCheckDesc5 = document.getElementById('checkdesc5');
const inputCheckDesc6 = document.getElementById('checkdesc6');

const inputCatDesc1 = document.getElementById("catdesc1");
const inputDescTec1 = document.getElementById("desctec1");
const inputCatDesc2 = document.getElementById("catdesc2");
const inputDescTec2 = document.getElementById("desctec2");
const inputCatDesc3 = document.getElementById("catdesc3");
const inputDescTec3 = document.getElementById("desctec3");
const inputCatDesc4 = document.getElementById("catdesc4");
const inputDescTec4 = document.getElementById("desctec4");
const inputCatDesc5 = document.getElementById("catdesc5");
const inputDescTec5 = document.getElementById("desctec5");
const inputCatDesc6 = document.getElementById("catdesc6");
const inputDescTec6 = document.getElementById("desctec6");

const inputEstoque = document.getElementById("estoque")

const inputPromocao = document.getElementById("promocao")

const buttonSubmit = document.getElementById("submit");

const erros = [];

buttonSubmit.disabled = "true";
buttonSubmit.setAttribute('style', "background-color: gray")

function checkValidation () {
    if (inputImgUpload1.value == '' &&
        inputImgUpload2.value == '' &&
        inputImgUpload3.value == '' &&
        inputImgUpload4.value == '' &&
        inputImgUpload5.value == '' &&
        inputImgUpload6.value == '') {
        divFoto.style.border = "solid red 1px";
        buttonSubmit.disabled = true;
        buttonSubmit.setAttribute('style', "background-color: gray")
    } else {
        divFoto.style.border = "unset";
    };

    if ((inputCatDesc1.value == '' || inputDescTec1.value == '' || inputCheckDesc1.checked == false) &&
        (inputCatDesc2.value == '' || inputDescTec2.value == '' || inputCheckDesc2.checked == false) &&
        (inputCatDesc3.value == '' || inputDescTec3.value == '' || inputCheckDesc3.checked == false) &&
        (inputCatDesc4.value == '' || inputDescTec4.value == '' || inputCheckDesc4.checked == false) &&
        (inputCatDesc5.value == '' || inputDescTec5.value == '' || inputCheckDesc5.checked == false) &&
        (inputCatDesc6.value == '' || inputDescTec6.value == '' || inputCheckDesc6.checked == false)) {
        divDescTec.style.border = "solid red 1px";
        buttonSubmit.disabled = true;
        buttonSubmit.setAttribute('style', "background-color: gray")
    } else {
        divDescTec.style.border = "unset";
    };

    if (erros.length == 0 &&
        inputNomeProduto.value != '' &&
        selectMarca.selected != '' &&
        selectCategoria.selected != '' &&
        inputDescProduto.value != '' &&
        inputCatDesc1.value != '' &&
        inputDescTec1.value != '' && 
        inputEstoque.value != 0) {
            buttonSubmit.disabled = false
            buttonSubmit.removeAttribute('style')
    } else {
        buttonSubmit.disabled = true;
        buttonSubmit.setAttribute('style', "background-color: gray")
    };
};

inputNomeProduto.onkeydown = (e) => {
    if (inputNomeProduto.value.length < 2) {
        inputNomeProduto.style.borderColor = "red";
        if (!erros.includes("Nome Produto")) {
            erros.push("Nome Produto");
        };
    } else {
        inputNomeProduto.style.borderColor = "green";
        if (erros.includes("Nome Produto")) {
            erros.splice(erros.indexOf("Nome Produto"), 1);
        };
    }
    checkValidation();
}

function selectMarcaCategoria(select, str) {
    if (select.value == "") {
        select.style.borderColor = "red";
        if (!erros.includes(str)) {
            erros.push(str);
        };
    } else {
        select.style.borderColor = "green";
        if (erros.includes(str)) {
            erros.splice(erros.indexOf(str), 1);
        };
    }
}

selectMarca.onclick = (e) => {
    selectMarcaCategoria(selectMarca, "Marca");
    checkValidation();
}
selectMarca.onblur = (e) => {
    selectMarcaCategoria(selectMarca, "Marca");
    checkValidation();
}

inputPreco.onkeydown = (e) => {
    if (inputPreco.value == '0,00') {
        inputPreco.style.borderColor = "red";
        if (!erros.includes("Preço")) {
            erros.push("Preço");
        };
    } else {
        inputPreco.style.borderColor = "green";
        if (erros.includes("Preço")) {
            erros.splice(erros.indexOf("Preço"), 1);
        };
    }
    checkValidation();
}

selectCategoria.onclick = (e) => {
    selectMarcaCategoria(selectCategoria, "Categoria");
    checkValidation();
}
selectCategoria.onblur = (e) => {
    selectMarcaCategoria(selectCategoria, "Categoria");
    checkValidation();
}

inputDescProduto.onkeyup = (e) => {
    if (inputDescProduto.value.length < 10) {
        inputDescProduto.style.borderColor = "red";
        if (!erros.includes("Descrição do Produto")) {
            erros.push("Descrição do Produto");
        };
    } else {
        inputDescProduto.style.borderColor = "green";
        if (erros.includes("Descrição do Produto")) {
            erros.splice(erros.indexOf("Descrição do Produto"), 1);
        };
    }
    checkValidation();
}

// Quais validações usar para imagens?

let buttonsImg = [null, buttonImg1, buttonImg2, buttonImg3, buttonImg4, buttonImg5, buttonImg6]

function showPreview (event, i) {
    if(event.target.files.length > 0){
        let src = URL.createObjectURL(event.target.files[0]);
        buttonsImg[i].children[1].src = src;
        buttonsImg[i+1].style.display = 'block'
    };
};

inputImgUpload1.addEventListener('change', function (e) {
    showPreview(e, 1);
    if (inputImgUpload1.value == '') {
        if (!erros.includes("Imagem1")) {
            erros.push("Imagem1");
        };
    } else {
        buttonImg1.style.borderColor = "green";
        if (erros.includes("Imagem1")) {
            erros.splice(erros.indexOf("Imagem1"), 1);
        };
    }
    checkValidation();
})

inputImgUpload2.addEventListener('change', function (e) {
    showPreview(e, 2);
    if (inputImgUpload2.value == '') {
        if (!erros.includes("Imagem2")) {
            erros.push("Imagem2");
        };
    } else {
        buttonImg2.style.borderColor = "green";
        if (erros.includes("Imagem2")) {
            erros.splice(erros.indexOf("Imagem2"), 1);
        };
    }
    checkValidation();
})

inputImgUpload3.onchange = (e) => {
    showPreview(e, 3);
    if (inputImgUpload3.value == '') {
        if (!erros.includes("Imagem3")) {
            erros.push("Imagem3");
        };
    } else {
        buttonImg3.style.borderColor = "green";
        if (erros.includes("Imagem3")) {
            erros.splice(erros.indexOf("Imagem3"), 1);
        };
    }
    checkValidation();
}

inputImgUpload4.onchange = (e) => {
    showPreview(e, 4);
    if (inputImgUpload4.value == '') {
        if (!erros.includes("Imagem4")) {
            erros.push("Imagem4");
        };
    } else {
        buttonImg4.style.borderColor = "green";
        if (erros.includes("Imagem4")) {
            erros.splice(erros.indexOf("Imagem4"), 1);
        };
    }
    checkValidation();
}

inputImgUpload5.onchange = (e) => {
    showPreview(e, 5);
    if (inputImgUpload5.value == '') {
        if (!erros.includes("Imagem5")) {
            erros.push("Imagem5");
        };
    } else {
        buttonImg5.style.borderColor = "green";
        if (erros.includes("Imagem5")) {
            erros.splice(erros.indexOf("Imagem5"), 1);
        };
    }
    checkValidation();
}

inputImgUpload6.onchange = (e) => {
    showPreview(e, 6);
    if (inputImgUpload6.value == '') {
        if (!erros.includes("Imagem6")) {
            erros.push("Imagem6");
        };
    } else {
        buttonImg6.style.borderColor = "green";
        if (erros.includes("Imagem6")) {
            erros.splice(erros.indexOf("Imagem6"), 1);
        };
    }
    checkValidation();
}

// Validações das Descrições Técnicas

inputCatDesc1.onkeyup = (e) => {
    if (inputCatDesc1.value.length == '') {
        inputCatDesc1.style.borderColor = "red";
        if (!erros.includes("Cat. Descrição do Produto 1")) {
            erros.push("Cat. Descrição do Produto 1");
        };
    } else {
        inputCheckDesc1.checked = true;
        inputCatDesc1.style.borderColor = "green";
        if (erros.includes("Cat. Descrição do Produto 1")) {
            erros.splice(erros.indexOf("Cat. Descrição do Produto 1"), 1);
        };
    }
    checkValidation();
};

inputDescTec1.onkeyup = (e) => {
    if (inputDescTec1.value.length == '') {
        inputDescTec1.style.borderColor = "red";
        if (!erros.includes("Descrição do Produto 1")) {
            erros.push("Descrição do Produto 1");
        };
    } else {
        inputCheckDesc1.checked = true;
        inputDescTec1.style.borderColor = "green";
        if (erros.includes("Descrição do Produto 1")) {
            erros.splice(erros.indexOf("Descrição do Produto 1"), 1);
        };
    }
    checkValidation();
};

inputCatDesc2.onkeyup = (e) => {
    if (inputCatDesc2.value.length == '') {
        inputCatDesc2.style.borderColor = "red";
        if (!erros.includes("Cat. Descrição do Produto 2")) {
            erros.push("Cat. Descrição do Produto 2");
        };
    } else {
        inputCatDesc2.style.borderColor = "green";
        inputCheckDesc2.checked = true;
        if (erros.includes("Cat. Descrição do Produto 2")) {
            erros.splice(erros.indexOf("Cat. Descrição do Produto 2"), 1);
        };
    }
    checkValidation();
};

inputDescTec2.onkeyup = (e) => {
    if (inputDescTec2.value.length == '') {
        inputDescTec2.style.borderColor = "red";
        if (!erros.includes("Descrição do Produto 2")) {
            erros.push("Descrição do Produto 2");
        };
    } else {
        inputDescTec2.style.borderColor = "green";
        inputCheckDesc2.checked = true;
        if (erros.includes("Descrição do Produto 2")) {
            erros.splice(erros.indexOf("Descrição do Produto 2"), 1);
        };
    }
    checkValidation();
};

inputCatDesc3.onkeyup = (e) => {
    if (inputCatDesc3.value.length == '') {
        inputCatDesc3.style.borderColor = "red";
        if (!erros.includes("Cat. Descrição do Produto 3")) {
            erros.push("Cat. Descrição do Produto 3");
        };
    } else {
        inputCatDesc3.style.borderColor = "green";
        inputCheckDesc3.checked = true;
        if (erros.includes("Cat. Descrição do Produto 3")) {
            erros.splice(erros.indexOf("Cat. Descrição do Produto 3"), 1);
        };
    }
    checkValidation();
};

inputDescTec3.onkeyup = (e) => {
    if (inputDescTec3.value.length == '') {
        inputDescTec3.style.borderColor = "red";
        if (!erros.includes("Descrição do Produto 3")) {
            erros.push("Descrição do Produto 3");
        };
    } else {
        inputDescTec3.style.borderColor = "green";
        inputCheckDesc3.checked = true;
        if (erros.includes("Descrição do Produto 3")) {
            erros.splice(erros.indexOf("Descrição do Produto 3"), 1);
        };
    }
    checkValidation();
};

inputCatDesc4.onkeyup = (e) => {
    if (inputCatDesc4.value.length == '') {
        inputCatDesc4.style.borderColor = "red";
        if (!erros.includes("Cat. Descrição do Produto 4")) {
            erros.push("Cat. Descrição do Produto 4");
        };
    } else {
        inputCatDesc4.style.borderColor = "green";
        inputCheckDesc4.checked = true;
        if (erros.includes("Cat. Descrição do Produto 4")) {
            erros.splice(erros.indexOf("Cat. Descrição do Produto 4"), 1);
        };
    }
    checkValidation();
};

inputDescTec4.onkeyup = (e) => {
    if (inputDescTec4.value.length == '') {
        inputDescTec4.style.borderColor = "red";
        if (!erros.includes("Descrição do Produto 4")) {
            erros.push("Descrição do Produto 4");
        };
    } else {
        inputDescTec4.style.borderColor = "green";
        inputCheckDesc4.checked = true;
        if (erros.includes("Descrição do Produto 4")) {
            erros.splice(erros.indexOf("Descrição do Produto 4"), 1);
        };
    }
    checkValidation();
};

inputCatDesc5.onkeyup = (e) => {
    if (inputCatDesc5.value.length == '') {
        inputCatDesc5.style.borderColor = "red";
        if (!erros.includes("Cat. Descrição do Produto 5")) {
            erros.push("Cat. Descrição do Produto 5");
        };
    } else {
        inputCatDesc5.style.borderColor = "green";
        inputCheckDesc5.checked = true;
        if (erros.includes("Cat. Descrição do Produto 5")) {
            erros.splice(erros.indexOf("Cat. Descrição do Produto 5"), 1);
        };
    }
    checkValidation();
};

inputDescTec5.onkeyup = (e) => {
    if (inputDescTec5.value.length == '') {
        inputDescTec5.style.borderColor = "red";
        if (!erros.includes("Descrição do Produto 5")) {
            erros.push("Descrição do Produto 5");
        };
    } else {
        inputDescTec5.style.borderColor = "green";
        inputCheckDesc5.checked = true;
        if (erros.includes("Descrição do Produto 5")) {
            erros.splice(erros.indexOf("Descrição do Produto 5"), 1);
        };
    }
    checkValidation();
};

inputCatDesc6.onkeyup = (e) => {
    if (inputCatDesc6.value.length == '') {
        inputCatDesc6.style.borderColor = "red";
        if (!erros.includes("Cat. Descrição do Produto 6")) {
            erros.push("Cat. Descrição do Produto 6");
        };
    } else {
        inputCatDesc6.style.borderColor = "green";
        inputCheckDesc6.checked = true;
        if (erros.includes("Cat. Descrição do Produto 6")) {
            erros.splice(erros.indexOf("Cat. Descrição do Produto 6"), 1);
        };
    }
    checkValidation();
};

inputDescTec6.onkeyup = (e) => {
    if (inputDescTec6.value.length == '') {
        inputDescTec6.style.borderColor = "red";
        if (!erros.includes("Descrição do Produto 6")) {
            erros.push("Descrição do Produto 6");
        };
    } else {
        inputDescTec6.style.borderColor = "green";
        inputCheckDesc6.checked = true;
        if (erros.includes("Descrição do Produto 6")) {
            erros.splice(erros.indexOf("Descrição do Produto 6"), 1);
        };
    }
    checkValidation();
};

inputEstoque.addEventListener('click', function (e) {
    if (inputEstoque.value < 1) {
        inputEstoque.style.borderColor = "red";
        if (!erros.includes("Estoque")) {
            erros.push("Estoque");
        };
    } else {
        inputEstoque.style.borderColor = "green";
        if (erros.includes("Estoque")) {
            erros.splice(erros.indexOf("Estoque"), 1);
        };
    }
    checkValidation();
    }
)

inputEstoque.addEventListener('keyup', function (e) {
    if (inputEstoque.value < 1) {
        inputEstoque.style.borderColor = "red";
        if (!erros.includes("Estoque")) {
            erros.push("Estoque");
        };
    } else {
        inputEstoque.style.borderColor = "green";
        if (erros.includes("Estoque")) {
            erros.splice(erros.indexOf("Estoque"), 1);
        };
    }
    checkValidation();
    }
)