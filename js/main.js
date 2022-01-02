const btn_hamburguer = document.querySelector('#btn-responsive');
const navbar1 = document.querySelector('.navbar-nav1');
function toggleBtn() {
    navbar1.classList.toggle('navbar-nav1-responsive')
}

btn_hamburguer.addEventListener('click', toggleBtn);