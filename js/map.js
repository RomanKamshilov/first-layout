let linkMap = document.querySelector('.contacts-button-map')
let popupMap = document.querySelector('.modal-map')
let closeMap = popupMap.querySelector('.modal-close')

linkMap.addEventListener('click', function (evt) {
    evt.preventDefault()
    popupMap.classList.add('modal-show')
    overlay.classList.add('modal-show')
})

closeMap.addEventListener('click', function (evt) {
    evt.preventDefault()
    popupMap.classList.remove('modal-show')
    overlay.classList.remove('modal-show')
})

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault()

        if (popupMap.classList.contains('modal-show')) {
            popupMap.classList.remove('modal-show')
        }
    }
})
