
const testButton = document.querySelector('.test-button')
testButton.addEventListener("click" , ()=> {
    alert (testButton.innerHTML)
})

let newDiv = document.createElement("div")
newDiv.innerHTML = "<h1>Это вставленный текст</h1>"
newDiv.className = "newDiv"
document.body.append(newDiv)

let keyLog = document.createElement("p")


document.body.append(keyLog)
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


//идея в том , чтобы сделать слушатель нажатых кнопок . типо чтоб пользователь видел ,
//какую кнопку он клацнул. это все надо для того , чтоб 1)вспомнить как кодить на js , 2) разобраться
//как работать с кнопками через keyUp и keyDown
