let harmburger = document.querySelector('.harmburger')
let nav = document.querySelector('nav')


harmburger.addEventListener('click', () => {
    if (nav.classList.contains('active')) {
        nav.className = ''
        harmburger.style.transform = 'rotate(-180deg)'
    } else {
        nav.className = 'active'
        harmburger.style.transform = 'rotate(90deg)'
    }
})

console.log(nav)