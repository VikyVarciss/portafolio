const menuInicial = document.querySelector(' .menu'); //tomando la clase menu
const menuFinal = document.querySelector(' .menu-navegacion');

console.log(menuInicial);
console.log(menuFinal);


menuInicial.addEventListener('click', ()=>{  //al elemento menuInicial se le agrega un evento .addEventListener de tipo click
    menuFinal.classList.toggle("spread")
})

window.addEventListener('click', e=>{  //cunando alguien toque la ventana o el menu dispare otra funcion de flecha
    if(menuFinal.classList.contains('spread') && e. target != menuInicial){

        menuFinal.classList.toggle('spread')
    }
})