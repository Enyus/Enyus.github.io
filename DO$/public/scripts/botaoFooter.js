let botaoCategoria = document.getElementById("categoriamobile");
let divCategoriasFooter = document.querySelector(".categoriasmobile");
let botaoFecharCategorias = document.getElementById("fechar");

botaoCategoria.onclick = (e) => {
    divCategoriasFooter.style.display = 'flex';
}

botaoFecharCategorias.onclick = (e) => {
    divCategoriasFooter.style.display = 'none';
}