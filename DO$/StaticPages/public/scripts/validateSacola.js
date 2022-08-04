const inputCEP = document.getElementById('cep');
const submitCEP = document.getElementById('submitcep');
const divCEP = document.getElementById('containercep');
const linkEntrega = document.getElementById('entrega');
const linkRetirar = document.getElementById('retirar');
const totalFrete = document.getElementById('totalfrete');

submitCEP.disabled = true;

inputCEP.onblur = (e) => {
    if ( inputCEP.value.length != 8 ) {
        inputCEP.style.borderColor = "red";
        submitCEP.disabled = true;
    } else {
        inputCEP.style.borderColor = "green";
        submitCEP.disabled = false;
    }
};

linkRetirar.onclick = (e) => {
    divCEP.style.display='none';
    totalFrete.innerHTML='-';
    linkRetirar.style.borderBottom = '4px solid #e84218';
    linkEntrega.style.borderBottom = 'unset';
};

linkEntrega.onclick = (e) => {
    divCEP.style.display='block';
    totalFrete.innerHTML='a calcular';
    linkEntrega.style.borderBottom = '4px solid #e84218';
    linkRetirar.style.borderBottom = 'unset';
}