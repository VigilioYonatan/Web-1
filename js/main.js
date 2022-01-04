// terminos y condiciones 

const terminos = document.getElementById('conditionClose');
function cerrarTerminos() {
    terminos.parentElement.remove();
}
terminos.addEventListener('click', cerrarTerminos);

// boton responsive header hamburguesa 
const btn_hamburguer = document.querySelector('#btn-responsive');
const navbar1 = document.querySelector('.navbar-nav1');
function toggleBtn() {
    navbar1.classList.toggle('navbar-nav1-responsive')
}

btn_hamburguer.addEventListener('click', toggleBtn);


// animacion scrool 
// funcion efecto con parametros de clases y clase de tipo de animacion 
    function showScrollPrincipal(animationClass, show) {
        let animate = document.querySelectorAll(animationClass);
        let scrollTop = document.documentElement.scrollTop;
        
        for (let i = 0; i < animate.length; i++) {
            let animateAltura = animate[i].offsetTop;
            if (animateAltura - 800 < scrollTop) {
                animate[i].style.opacity = 0;
                animate[i].classList.remove(show);
            }
            if (animateAltura - 600 < scrollTop) {
                animate[i].style.opacity = 1;
                animate[i].classList.add(show);
            }
            if (animateAltura + 500 < scrollTop) {
                animate[i].style.opacity = 0;
                animate[i].classList.remove(show);
            }
            
        }   
    }

    // funciones con sus parametros
    function showScrollNormal() {
        showScrollPrincipal('.animation-initial','none');
    }
    function showScrollUp() {
        showScrollPrincipal('.animation-initial-showUp','showUp');
    }

window.addEventListener('scroll', showScrollNormal);
window.addEventListener('scroll', showScrollUp);
