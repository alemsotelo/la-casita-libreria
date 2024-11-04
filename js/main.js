// Mostrar el botón "Subir" al hacer scroll
const btnUp = document.getElementById('btnUp');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { 
        btnUp.classList.add('show');
    } else {
        btnUp.classList.remove('show');
    }
});
