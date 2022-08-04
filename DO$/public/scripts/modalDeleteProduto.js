const modal = document.querySelectorAll("div.modal");
const closeModal = document.querySelectorAll("span.close");
const cancelButton = document.querySelectorAll("button.cancelbtn");

const showModalLoja = document.querySelectorAll("a.deletarProduto");
const showModalEditProduto = document.querySelectorAll("button.delete");

modal.forEach(elementModal => {
  cancelButton.forEach(elementCancel => {
    elementCancel.addEventListener('click', function(e) {
      elementModal.style.display = 'none';
    })
  })
  closeModal.forEach(elementClose => {
    elementClose.addEventListener('click', function(e) {
      elementModal.style.display = 'none';
    })
  })
  window.addEventListener('click', function(e){
    if (e.target == elementModal) {
      elementModal.style.display = "none";
    }
  })
});

// Página editar produto

const formProduto = document.querySelector('.produto');
const idProduto = document.querySelector('.idProduto');
const deleteButton = document.querySelector('.deletebtn')

deleteButton.addEventListener('click', function(){
  formProduto.setAttribute('action', `/deletarProduto/${idProduto.value}?_method=DELETE`)
})