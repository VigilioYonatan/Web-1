// boton responsive header hamburguesa 
const btn_hamburguer = document.querySelector('#btn-responsive');
const navbar1 = document.querySelector('.navbar-nav1');
function toggleBtn() {
    navbar1.classList.toggle('navbar-nav1-responsive')
}

btn_hamburguer.addEventListener('click', toggleBtn);

// ----------------------------------- //

// animation entrada 
// libreria https://michalsnik.github.io/aos/

AOS.init({
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
 delay: 200, // values from 0 to 3000, with step 50ms
 duration: 800, // values from 0 to 3000, with step 50ms
 once: false, // whether animation should happen only once - while scrolling down
 mirror: false, // whether elements should animate out while scrolling past them
 anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});