const formEl = document.querySelector('#form')
const submitButtonEl = document.querySelector('#form-submit')

submitButtonEl.addEventListener('click', (e) => {
    e.preventDefault()
    const {email} = e.target
    console.log(email.validity)
    if (email.validity.typeMismath) {
        email.setCustomValidity('This is not the correct email!')
    }
    console.log('submit')
})

formEl.addEventListener('submit', (e) => {
    e.preventDefault()
})