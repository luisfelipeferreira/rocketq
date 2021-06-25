import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// Pegar todos os botões que existem
const checkButtons = document.querySelectorAll('.actions a.check')
const deleteButtons = document.querySelectorAll('.actions a.delete')
// var deleteButtons = document.querySelectorAll('.actions a.delete')


checkButtons.forEach(button => {



    button.addEventListener('click', handleClick)
});

deleteButtons.forEach(button => {



    button.addEventListener('click', (event) => handleClick(event, false))
});

function handleClick(event, check = true) {

    const slug = check ? "check" : "delete"
    const roomId = document.querySelector('#room-id').dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector('.modal form')
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    event.preventDefault()

    const text = check ? 'Marcar como lida' : 'Excluir'

    // abrir modal
    modal.open()

    modalTitle.innerHTML = `${text} essa pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} essa pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
}
//pegar quando marcar como lido for clicado