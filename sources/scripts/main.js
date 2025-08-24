const headerBox = document.querySelector('header')
const footerBox = document.querySelector('footer')

// const creationTime = new Date()
const creationTime = Date.now()
const timeBox = document.createElement('div')
const creationTimeDisplay = document.createElement('p')
const passedTimeDisplay = document.createElement('p')
timeBox.append(passedTimeDisplay)
timeBox.className = 'time-box'
// creationTimeDisplay.textContent = `Время открытия страницы - ${creationTime.getHours()}:${creationTime.getMinutes()}:${creationTime.getSeconds()}`
creationTimeDisplay.textContent = `Время открытия страницы - ${new Date}`
timeBox.append(creationTimeDisplay)
headerBox.append(timeBox)

setInterval(()=> {
    // let passedTime = new Date()
    let deltaTime = Math.floor((Date.now() - creationTime) / 1000)
    // passedTimeDisplay.textContent = `Сайт запущен ${passedTime.getHours() - creationTime.getHours()} часов, ${passedTime.getMinutes() - creationTime.getMinutes()} минут, ${passedTime.getSeconds() - creationTime.getSeconds()} секунд`
    passedTimeDisplay.textContent = `Site is running for ${deltaTime} sec. , ${Math.floor(deltaTime / 60)} min. , ${Math.floor(deltaTime / 3600)} h.`
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

