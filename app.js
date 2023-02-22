var openModal = document.querySelector('.open-modal-btn')
var modal = document.querySelector('.modal')
var iconClose = document.querySelector('.modal__header i')
var btnClose = document.querySelector('.modal__footer-close')

function toggleModal (e) {
    if (e.target === e.currentTarget) {
        modal.classList.toggle('disabled')
    }
}

openModal.addEventListener('click', toggleModal)
modal.addEventListener('click', toggleModal)
iconClose.addEventListener('click', toggleModal)
btnClose.addEventListener('click', toggleModal)
