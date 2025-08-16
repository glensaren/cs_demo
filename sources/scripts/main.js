const headerBox = document.querySelector('header')
const footerBox = document.querySelector('footer')
const burgerMenuButton = document.querySelector('.burger-menu-button')
const burgerMenu = document.querySelector('.burger-menu')
const burgerMenuSize = burgerMenu.getBoundingClientRect()
let burgerMenuStatus = 0

burgerMenuButton.addEventListener('click', ()=> {
    if (burgerMenuStatus == 0){
        burgerMenu.style.right = 0;
        burgerMenuStatus++
    }

    else{
        burgerMenu.style.right =`-${burgerMenuSize.width}px`
        burgerMenuStatus--
    }
})

document.addEventListener('keydown', (e)=>{
    if (e.code == 'NumpadSubtract'){
        headerBox.classList.toggle('off')
        footerBox.classList.toggle('off')
    }
})



