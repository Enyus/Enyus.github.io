let divMiniImg = document.getElementsByClassName('miniimg')[0];
let divFocoImg = document.getElementsByClassName('focoimg')[0];

// Para que a primeira foto seja colocada em foco sempre:
divFocoImg.innerHTML = divMiniImg.children[0].innerHTML;
divMiniImg.children[0].remove();

function expand () {
    let elementoClicado = document.activeElement;
    let elementoFocado = divFocoImg.children[0];
    let novoButton = document.createElement('button');
    novoButton.setAttribute('onclick', 'expand()');
    novoButton.appendChild(elementoFocado);
    
    divFocoImg.innerHTML = elementoClicado.innerHTML;
    elementoClicado.remove();

    divMiniImg.appendChild(novoButton);
}