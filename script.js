let newDiv = document.createElement("div")
newDiv.innerHTML = "<h1>Это вставленный текст</h1>"
newDiv.className = "newDiv"
document.body.append(newDiv)

const currentKey = '1'
let pressedKeyShower = document.createElement("p")
pressedKeyShower.innerHTML = "<h1> Текущая клавиша : " + currentKey + "</h1>"
document.body.append(pressedKeyShower)

// function keyShower(){
//     addEventListener(ke)
// }

//идея в том , чтобы сделать слушатель нажатых кнопок . типо чтоб пользователь видел ,
//какую кнопку он клацнул. это все надо для того , чтоб 1)вспомнить как кодить на js , 2) разобраться
//как работать с кнопками через keyUp и keyDown
