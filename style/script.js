let d = document
let button = d.getElementById('filter')
let menu = d.getElementById('menu')
let close = d.getElementById('close')

button.addEventListener('click', () => {
    menu.classList.add('active')
})

close.addEventListener('click', () => {
    menu.classList.remove('active')
})