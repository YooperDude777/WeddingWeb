/*=============== SHOW MENU ===============*/
const showMenu = (navId, toggleId) => {
    const nav = document.getElementById(navId),
          toggle = document.getElementById(toggleId)

    if (nav && toggle) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
            toggle.classList.toggle('show-icon')
        })
    }
}
showMenu('nav-menu', 'nav-toggle')

/*=============== CLOSE MENU ON LINK CLICK ===============*/
const navLinks = document.querySelectorAll('.nav__link')
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.getElementById('nav-menu')
        const navToggle = document.getElementById('nav-toggle')
        if (navMenu && navToggle) {
            navMenu.classList.remove('show-menu')
            navToggle.classList.remove('show-icon')
        }
    })
})
