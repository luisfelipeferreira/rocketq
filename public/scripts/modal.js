export default function Modal() {

    const modal_wrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener('click', close)

    function open() {
        //active para modal
        modal_wrapper.classList.add('active')
    }
    function close() {
        //remover active da modal
        modal_wrapper.classList.remove('active')

    }

    return { open, close }
}
