let link = document.querySelector('.login-link')
let popup = document.querySelector('.modal-login')
let close = document.querySelector('.modal-close')
let overlay = document.querySelector('.modal-overlay')
let login = popup.querySelector('[name=login]')
let password = popup.querySelector('[name=password]')
let form = popup.querySelector('form')
let storage = ''
let isStorageSupport = true

link.addEventListener('click', function (evt) {
    evt.preventDefault()
    popup.classList.add('modal-show')
    overlay.classList.add('modal-show')
    login.focus()
    if (storage) {
        login.value = storage
        password.focus()
    } else {
        login.focus()
    }
})

close.addEventListener('click', function (evt) {
    evt.preventDefault()
    popup.classList.remove('modal-show')
    popup.classList.remove('modal-error')
    overlay.classList.remove('modal-show')
})

try {
    storage = localStorage.getItem('login')
} catch (err) {
    isStorageSupport = false
}

form.addEventListener('submit', function (evt) {
    if (!login.value || !password.value) {
        evt.preventDefault()
        popup.classList.add('modal-error')
    } else {
        if (isStorageSupport) {
            localStorage.setItem('login', login.value)
        }
    }
})

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault()

        if (popup.classList.contains('modal-show')) {
            popup.classList.remove('modal-show')
        }
    }
})
