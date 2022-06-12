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

let cirkel = document.querySelector(".cirkel"), 
	progwaarde = document.querySelector(".progressie");

let progbeginwaarde = 0,
	progeindwaarde = 80,
	speed = 10;

let progress = setInterval(() => {
	progbeginwaarde++;
	progwaarde.textContent = `${progbeginwaarde}%`
	cirkel.style.background = `conic-gradient(#33D67E ${progbeginwaarde * 3.6}deg, #ededed 0deg)`;
	if (progbeginwaarde == progeindwaarde){
		clearInterval(progress);
	}
	console.log(progbeginwaarde);

}, speed);






