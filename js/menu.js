const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.ham span');
const opMenu = document.querySelectorAll('.li-enlaces');
const cMenu = document.querySelector('#contacto-menu');

ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
    ham.classList.toggle('girar');
});

cMenu.addEventListener("click",()=>{
    enlaces.classList.remove('activado');
    ham.setAttribute('class',"ham girar");
    barras.forEach(child => {child.classList.remove('animado')});
})
