const form = document.querySelector('.form-quiz')

console.log(form)

form.addEventListener('submit', event => {
    event.preventDefault()

    console.log(event.target.inputQuestion1)
})
