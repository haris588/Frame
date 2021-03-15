const modalBg = document.querySelector('.modal-bg')
const popUpBtn = document.querySelector('.btn-colored')
const closeModal = document.querySelector('.close-modal')

popUpBtn.addEventListener('click', () => {
    modalBg.classList.add('modal-bg-active')
})

closeModal.addEventListener('click', () => {
    modalBg.classList.remove('modal-bg-active')
})