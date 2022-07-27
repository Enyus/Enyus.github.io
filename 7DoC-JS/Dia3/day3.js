let divResolucao = document.getElementById("resolucao");
let botaoResolucao = document.getElementById("botao-resolver");
let area
let lib
let tecs = [];
let errou = false;

function resolver() {
    botaoResolucao.style.display = "none";

    area = prompt("Qual área de programação você gostaria de seguir? Digite 1 para BackEnd ou 2 para FrontEnd.")

    if (!errou) {
        divResolucao.innerHTML += "<p>Qual área de programação você gostaria de seguir?</p>"
    }

    if (area == '1') {
        area = 'BackEnd';
        errou = false;
        alert("Que legal, você quer seguir na área de BackEnd!");
        divResolucao.innerHTML += "<p>Que legal, você quer seguir na área de BackEnd!</p>";
        perguntaBack();
    } else if (area == '2') {
        area = 'FrontEnd';
        errou = false;
        alert("Que legal, você quer seguir na área de FrontEnd!");
        divResolucao.innerHTML += "<p>Que legal, você quer seguir na área de FrontEnd!</p>";
        perguntaFront();
    } else {
        errou = true;
        alert("Não entendi sua resposta, por favor responda com 1 ou 2?");
        resolver();
    }
}

function perguntaBack () {
    lib = prompt("Para sua carreira em BackEnd, você quer aprender C# ou Java? Digite 1 para C# e 2 para Java.")

    if (!errou) {
        divResolucao.innerHTML += "<p>Para sua carreira em BackEnd, você quer aprender C# ou Java?</p>"
    }

    if (lib == '1') {
        lib = 'C#';
        alert("Ótimo, C# é uma linguagem muito legal para Backend!");
        divResolucao.innerHTML += "<p>Ótimo, C# é uma linguagem muito legal para Backend!</p>";
        errou=false;
        segundaPergunta();
    } else if (lib == '2') {
        lib = 'Java';
        alert("Ótimo, Java é uma linguagem muito legal para Backend!");
        divResolucao.innerHTML += "<p>Ótimo, Java é uma linguagem muito legal para Backend!</p>";
        errou=false;
        segundaPergunta();
    } else {
        alert("Não entendi sua resposta, por favor responda com 1 ou 2?");
        errou = true;
        perguntaBack();
    }
}

function perguntaFront () {
    lib = prompt("Para sua carreira em FrontEnd, você quer aprender React ou Vue? Digite 1 para React e 2 para Vue.")

    if (!errou) {
        divResolucao.innerHTML += "<p>Para sua carreira em FrontEnd, você quer aprender React ou Vue?</p>"
    }

    if (lib == '1') {
        lib = 'React';
        alert("Ótimo, React é uma lib muito legal para FrontEnd!");
        divResolucao.innerHTML += "<p>Ótimo, React é uma lib muito legal para FrontEnd!</p>";
        errou=false;
        segundaPergunta();
    } else if (lib == '2') {
        lib = 'Vue';
        alert("Ótimo, Vue é uma lib muito legal para FrontEnd!");
        divResolucao.innerHTML += "<p>Ótimo, Vue é uma lib muito legal para FrontEnd!</p>";
        errou=false;
        segundaPergunta();
    } else {
        alert("Não entendi sua resposta, por favor responda com 1 ou 2?");
        errou=true;
        perguntaFront();
    }
}

function segundaPergunta () {
    let fullStack = prompt(`Você prefer continuar se especializando em ${area} ou seguir para FullStack? Digite 1 para Especializar ou 2 para FullStack.`);

    if (!errou) {
        divResolucao.innerHTML += `<p>Você prefer continuar se especializando em ${area} ou seguir para FullStack?</p>`
    }

    if (fullStack == '1') {
        alert(`Que legal, temos um ${area}er, especialista em ${lib} por aqui!`);
        divResolucao.innerHTML += `<p>Que legal, temos um ${area}er, especialista em ${lib} por aqui!</p>`
        errou = false;
        terceiraPergunta();
    } else if (fullStack == '2') {
        alert(`Que legal, temos um dev FullStack por aqui!`);
        divResolucao.innerHTML += `<p>Que legal, temos um dev FullStack por aqui!</p>`
        errou = false;
        terceiraPergunta();
    } else {
        alert("Não entendi sua resposta, por favor responda com 1 ou 2?");
        errou=true;
        segundaPergunta();
    }
}

function terceiraPergunta () {
    let querTecs = prompt("E tem mais alguma tecnologia que você quer estudar? Digite 1 para SIM e 2 para NÃO.");

    if (!errou) {
        divResolucao.innerHTML += "E tem mais alguma tecnologia que você quer estudar?";
    }

    if (querTecs == '1') {
        while (querTecs == '1') {
            tecs.push(prompt("Qual a Tecnologia que você quer aprender?"));
            querTecs = prompt("Mais alguma? Digite 1 para SIM e 2 para NÃO.");
        }
        mensagemTecs = '<p>Que legal, então você quer aprender:</p><ul>'
        for (i = 0 ; i < tecs.length ; i++) {
            mensagemTecs += `<li>${tecs[i]}</li>`
        }
        mensagemTecs += '</ul>';
        divResolucao.innerHTML += mensagemTecs;
    } else if (querTecs == '2') {
        alert("Sério? Ok então.");
        divResolucao.innerHTML += "Sério? Ok então."
    } else {
        alert("Não entendi sua resposta, por favor responda com 1 ou 2?");
        errou=true;
        terceiraPergunta();
    }
}