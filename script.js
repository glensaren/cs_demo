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

//==========================================================================================================

//2)Описание каждого програмного блока при наведении на него ("Spoiler")
//идея в том , чтобы при наведении на любой блок (например, на блок из задачи 1), снизу появлялось "окошко"
//с описанием сделаной работы.
//Для полного кайфа стоит сделать это всё через цикл, а значения добавить через объект, где будет такая
//цепочка - задача1 : описание1 , задача2 : описание2
//UPD1 - делаю не совсем через объект , а через словарь , потому что оказывается , что он обрабатывается
//быстрее обычного объекта
let item = ''

function mapCheckUp(mapName){
    for (let item of mapName)
        console.log(item)
}

let itemsMap = new Map

function addMapItem(task , desc){
    itemsMap.set(`${task}` , desc)
}

addMapItem(keyLog , 'Это виртуальная клавиатура , реализованная через слушатель событий keyDown')
addMapItem(newDiv , 'Это элемент, вставленный в DOM при помощи Java Script')
mapCheckUp(itemsMap)

let newDivSpoilerState = false

newDiv.addEventListener('mouseover' , ()=> {
    let newDivSpoiler = document.createElement("div")
    if (newDivSpoilerState == false){
        newDivSpoiler.innerHTML = '<div class = "block-description"><p>Это элемент, вставленный при помощи Java Script</p></div>'
        newDiv.after(newDivSpoiler)
        newDivSpoilerState == true
    }

    else{
        return
    }
})

newDiv.addEventListener('mouseleave', ()=> {
    newDivDesc.remove()
})


//==========================================================================================================
