const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.tekst1',{delay:350, origin:'left'})
sr.reveal('.fotozarko',{delay:350, origin:'right'})
sr.reveal('.overmij1',{delay:350, origin:'right'})






