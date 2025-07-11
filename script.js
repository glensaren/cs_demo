// let itemsMap = new Map
// const testPishka = document.querySelector('.test-pishka')
const galleryBox = document.querySelector('.gallery')
const audioPlayerBox = document.querySelector('.audio-player')
const feedbackFormBox = document.querySelector('.feedback-form')


//0) вспоминаю, что такое append и alert + selector

const testButton = document.querySelector('.test-button')
const mainBox = document.querySelector('main')
testButton.addEventListener("click" , ()=> {
    alert (testButton.innerHTML)
})

let newDiv = document.createElement("div")
newDiv.innerHTML = "<h1>Это вставленный текст</h1>"
newDiv.className = "newDiv"
mainBox.append(newDiv)
// addMapItem(newDiv , 'Это элемент, вставленный в DOM при помощи Java Script')

//==========================================================================================================

//1)Ввод клавиш через eventListener keyDown (СДЕЛАНО)
//идея в том , чтобы сделать слушатель нажатых кнопок . типо чтоб пользователь видел ,
//какую кнопку он клацнул. это все надо для того , чтоб 1)вспомнить как кодить на js , 2) разобраться
//как работать с кнопками через keyUp и keyDown

let keyLog = document.createElement("p")

mainBox.append(keyLog)
keyLog.className = "key-log"

document.addEventListener("keydown" , (e)=> {
    if (e.key == "Shift" || e.key == "Control" || e.key == "Alt"){
        return ''
    } 

    else if (e.key == "Backspace"){
        keyLog.textContent
    }
    keyLog.textContent += `${e.key}`
})

// addMapItem(keyLog , 'Это виртуальная клавиатура , реализованная через слушатель событий keyDown')

//==========================================================================================================

//2)Описание каждого програмного блока при наведении на него ("Spoiler")
//идея в том , чтобы при наведении на любой блок (например, на блок из задачи 1), снизу появлялось "окошко"
//с описанием сделаной работы.
//Для полного кайфа стоит сделать это всё через цикл, а значения добавить через объект, где будет такая
//цепочка - задача1 : описание1 , задача2 : описание2
//UPD1 - делаю не совсем через объект , а через словарь , потому что оказывается , что он обрабатывается
//быстрее обычного объекта

function mapCheckUp(mapName){
    for (let item of mapName)
        console.log(item)
}

// mapCheckUp(itemsMap)


//!!

// function createTest(){
//     let testValue = 'Заработало!!!'
//     return testValue

// }

// function useTest(){
//     let usableValue = createTest()
//     alert(usableValue)
// }

// useTest()

function testConstant() {
    let testValue = 123456
    return testValue
}

function useConstant(){
    let testValue = testConstant()
    console.log (testValue)
}

useConstant()

//!!
//ПРИМ: Тут я использовал ГПТ , так как дурак ебанат сел за работу слишком поздно, и времени нет.
//Но самое главное - я немного лучше разобрался с работой перенных (а точнее их областями видимости) и
//понял , зачем нужен return






// newDiv.addEventListener('mouseleave', () => {
//     if (newDivSpoilerState == true){
//         newDiv.remove(newDivSpoiler)
//     }
// })



// newDiv.addEventListener('mouseleave', ()=> {
//     newDivSpoiler.remove()
// })

let spoilerStateCollection = []

function setSpoilerState(elementName = '' , state = false) {
    let spoilerState = state
    console.log('Состояние спойлера элемента ' + String(elementName) + ' : ' + spoilerState)
    spoilerStateCollection.push([elementName + ' : ' +state])
}

setSpoilerState('newDiv')
setSpoilerState('testPishka' , true)
setSpoilerState('test-button')
for (let state of spoilerStateCollection){
    console.log(state)
}

function createSpoiler(elementName , spoilerText){
    let spoiler = document.createElement('div')
    spoiler.textContent = spoilerText
    spoiler.classList.add('block-description')
    elementName.after(spoiler)
    // return spoiler
    // ОШИБКА! (1)
    // script.js:133 Uncaught TypeError: Cannot read properties of undefined (reading 'after')
    // at createSpoiler (script.js:133:17)
    // at script.js:160:19
}

function fillTaskMap(task , desk){
    taskMap.set(task, desk)
}

let taskMap = new Map
fillTaskMap(newDiv , 'Это блок кода, вставленный с использованием JS')
fillTaskMap(galleryBox , 'Это фото-галлерея , реализованная при помощи Fetch API. Ахаххаха лох нихуя тут нет я тупой и не умею это делать:0')
fillTaskMap(audioPlayerBox , 'Это аудио-плейер , играющий музыку с локального сервера')
fillTaskMap(feedbackFormBox , 'Это форма обратной реакции , которую обрабатывает и валидирует JS')
// function appendSpoiler(elementName, spoilerText)
let counter = 0
for (const [task,desc] of taskMap){
    counter ++
    console.log(counter + '.')
    console.log(task)
    console.log(desc)
    task.addEventListener('click', ()=>{
        console.log('вы нажали на ' + task.className)
    })
}

for (const [task,desc] of taskMap){
    createSpoiler(task,desc)
    // let spoiler = createSpoiler()
    // ОШИБКА! (1)
}

function testSpoiler(text){
    let spoiler = text
    return spoiler
}

let textSpoiler = testSpoiler('Это пробный текст , используемый для проверки работы return. Его на странице вы не увидите :/')
console.log(textSpoiler)

let textLibrary = new Map([
        [0 , ''],
        [1,''],
        [2,'Это второй блок словаря'],
        [3,''],
        [4,''],
        [5,''],
        [6,''],
        [7,''],
        [8,''],
        [9,''],
    ])
const textGeneratorButton = document.querySelector('.text-generator-button')
const textGeneratorDisplay = document.querySelector('.text-generator-display')
textGeneratorButton.addEventListener('click' , ()=> {
    let order = Math.floor(10 * Math.random())
    textGeneratorDisplay.textContent = (textLibrary.get(order))
})
//==========================================================================================================
