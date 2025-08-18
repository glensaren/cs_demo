const headerBox = document.querySelector('header')
const footerBox = document.querySelector('footer')

document.addEventListener('keydown', (e)=>{
    if (e.code == 'NumpadSubtract'){
        headerBox.classList.toggle('off')
        footerBox.classList.toggle('off')
    }
})


