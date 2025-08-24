const headerBox = document.querySelector('header')
const footerBox = document.querySelector('footer')

//   |  Вот это только для deltaTime , на экран не выводится
//   v
const creationTime = Date.now()

const startTime = new Date()
const timeOptions = {
    weekday : 'short',
    year : 'numeric',
    month : 'long',
    day : 'numeric',
    era : 'short',
    hourCycle : 'h12',
    hour : '2-digit',
    minute : '2-digit',
    second : '2-digit',
    dayPeriod : 'short',
    timeZoneName : 'shortOffset'
}
const timeBox = document.createElement('div')
const startTimeDisplay = document.createElement('p')
const passedTimeDisplay = document.createElement('p')
timeBox.append(passedTimeDisplay)
timeBox.className = 'time-box'
startTimeDisplay.textContent = `Время открытия страницы - ${startTime.toLocaleDateString('ru-RU' , timeOptions)}`
timeBox.append(startTimeDisplay)
headerBox.append(timeBox)

setInterval(()=> {
    let deltaTime = Math.floor((Date.now() - creationTime) / 1000)
    passedTimeDisplay.textContent = `Сайт запущен ${Math.floor(deltaTime / 3600)} часов, ${(deltaTime % 60 / 60)} , ${(deltaTime % 3600 % 60)} секунд`
    //закончит эту х_йню
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

