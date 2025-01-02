// making responsible menu
let menuBTN = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menuBTN.onclick = () => {
    navbar.classList.toggle('active');
}

// appearing button to get top
let getTopBTN = document.querySelector('#gettopBTN');

window.addEventListener('scroll', function() {
    getTopBTN.classList.toggle('active', window.scrollY > 300);
})