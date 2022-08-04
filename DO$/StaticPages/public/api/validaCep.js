const cep = document.getElementById('cep')

const searchCep = async () => {
    try {
        const cep = document.getElementById("cep").value;
        const request = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const response = await request.json();
        preencherDados(response);
    } catch (error) {
        document.getElementById("complemento").value = "";
        document.getElementById("cidade").value = "";
        document.getElementById("estado").value = "";
        document.getElementById("logradouro").value = "😥NÃO FOI POSSIVEL😥";
        return error;
    }
};
cep.addEventListener("focusout", searchCep);

const preencherDados = (dados) => {
    document.getElementById("logradouro").value = dados.logradouro;
    document.getElementById("complemento").value = dados.complemento;
    document.getElementById("cidade").value = dados.localidade;
    document.getElementById("estado").value = dados.uf;
};