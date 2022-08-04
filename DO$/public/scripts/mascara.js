// Moeda
const preco = document.querySelector('.preco');
const promocao = document.querySelector('.promocao');
const estoque = document.querySelector('.estoque')

preco.addEventListener('input', function(){moeda(preco)})
estoque.addEventListener('blur', function() {
    return estoque.value > 999 ? estoque.value = 999 : estoque.value
})
promocao.addEventListener('blur', function(){
    return promocao.value > 100 ? promocao.value = 100 : promocao.value
})

function moeda(input){
    let v = input.value.replace(/\D/g,'');
    v = (v/100).toFixed(2) + '';
    v = v.replace(".", ",");
    v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
    input.value = v;
}
