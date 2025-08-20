const headerBox = document.querySelector('header')
const footerBox = document.querySelector('footer')

document.addEventListener('keydown', (e)=>{
    if (e.code == 'NumpadSubtract'){
        headerBox.classList.toggle('off')
        footerBox.classList.toggle('off')
    }
})

let clickHandler = {
    LSCheck : function() {
        for (let key in localStorage){
            console.log(`${key}: ${localStorage[key]}`)
        }
    }
}
function buttonCreator(buttonTextContent , executableAction , title = 0 , listenedKey = 0){
    const button = document.createElement('button');
    button.textContent = buttonTextContent;
    button.title = title
    button.addEventListener('click' , executableAction)
    if (listenedKey != 0){
        document.addEventListener('keydown', (e)=> {
            if (e.code == listenedKey){
                executableAction()
            }
        })
    }
    return button
}

headerBox.append(buttonCreator("Содержимое LS" , clickHandler.LSCheck))

