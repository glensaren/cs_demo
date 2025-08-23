const headerBox = document.querySelector('header')
const footerBox = document.querySelector('footer')

const creationTime = new Date()
const timeBox = document.createElement('div')
const creationTimeDisplay = document.createElement('p')
const passedTimeDisplay = document.createElement('p')
timeBox.append(passedTimeDisplay)
timeBox.className = 'time-box'
creationTimeDisplay.textContent = `Время открытия страницы - ${creationTime.getHours()}:${creationTime.getMinutes()}:${creationTime.getSeconds()}`
timeBox.append(creationTimeDisplay)
headerBox.append(timeBox)

setInterval(()=> {
    let passedTime = new Date()
    passedTimeDisplay.textContent = `${passedTime.getHours() - creationTime.getHours()}:${passedTime.getMinutes() - creationTime.getMinutes()}:${passedTime.getSeconds() - creationTime.getSeconds()}`
} , 1000)

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

