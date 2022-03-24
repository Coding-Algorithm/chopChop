let harmburger = document.querySelector('.harmburger')
let nav = document.querySelector('nav')
let navLinks = document.querySelectorAll('nav a')


harmburger.addEventListener('click', () => {
    if (nav.classList.contains('active')) {
        nav.className = ''
        harmburger.style.transform = 'rotate(-180deg)'
    } else {
        nav.className = 'active'
        harmburger.style.transform = 'rotate(90deg)'
    }
})

navLinks.forEach(navLink, () => {addEventListener('click', ()=> {
    nav.className = ''
    harmburger.style.transform = 'rotate(-180deg)'
})})

console.log(nav)