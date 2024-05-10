// Navbar Fixed
window.onscroll = function (){
    const header = document.querySelector('header'); // cari elemen yang namanya header
    const fixedNav = header.offsetTop; // ambil posisi header ini untuk ujung atas dari halamannya

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// Animasi Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});