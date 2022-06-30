const activadores =  document.querySelectorAll(".nav #menu li");
const desplegable = document.getElementsByClassName("desplegable")[0];
const ingreso = document.querySelectorAll(".nav #ingreso li");
console.log(ingreso);


activadores.forEach( (el) => {
    el.addEventListener('mouseover', (e) => {
        e.target.style.borderBottom = '4px solid #F10820';

        desplegable.style.clipPath = 'polygon(0 0, 100% 0%, 100% 100%, 0 100%)';
    })

    el.addEventListener('mouseout', (e) =>{
        e.target.style.borderBottom = '0px solid #F10820';

        desplegable.style.clipPath = 'polygon(0 0, 100% 0%, 100% 0, 0 0)';
    })
});


desplegable.addEventListener('mouseenter', (e) => {
    e.target.style.clipPath = 'polygon(0 0, 100% 0%, 100% 100%, 0 100%)';
})

desplegable.addEventListener('mouseleave', (e) => {
    e.target.style.clipPath = 'polygon(0 0, 100% 0%, 100% 0, 0 0)';
})

ingreso.forEach( (el) => {
el.addEventListener('mouseenter', (e) => {
        e.target.style.borderBottom = '4px solid #F10820';
    })

el.addEventListener('mouseleave', (e) => {
    e.target.style.borderBottom = '0px solid #F10820';
})

})




