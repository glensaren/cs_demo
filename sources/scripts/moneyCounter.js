/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
// todo 190825 : 
// 1)сделать создание произвольного количество полей ввода для денег , с возможностью выбирать валюту , номинал и физическую форму денег
// 2)реализовать пункт 1 через самописный класс с конструктором
// 3)реализовать возможность создания и загрузки пресетов через localStorage
// 4)максимально минимизировать использование ИИ в процессе выполнения вышеуказанных пунктов. 
// 5)Красиво оформить саму страницу. Эпоха минимализма в cs-demo должна быть окончена, в конце концов я веб-разработчик
const memoryButtonBox = document.querySelector('.memory-button-box')
const dialogWindow = document.querySelector('dialog')
const finalSumDisplay = document.querySelector('.final-sum')
const pageForm = document.querySelector('form')
const inputCollection = pageForm.querySelectorAll('input') 



const clickHandler = {
    saveTable : function(){
        const inputTable = {}
        let i = 0
        for (let child in inputCollection){
            
            if (typeof inputCollection[child] == 'object'){
                inputTable[i + '_input'] = {
                    name : inputCollection[child].name,
                    textContent : inputCollection[child].parentElement.innerText
                }

                i++
            }
        }

        console.log(inputTable)

        localStorage.setItem("moneyCounterInputTable" ,inputTable)
    },
    loadTable : function(){
        const inputTable = localStorage.getItem("moneyCounterInputTable")
        console.log(typeof inputTable)
    },

    deleteTable :function(){

    },

    closeModal: function(){
        dialogWindow.close()
    },

    modalAddInput : function(){
        const input = document.createElement('input')
        dialogWindow.append(input)
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

function formSumComputer(){
    let sum = 0
    for (let child of inputCollection){
        sum = sum + child.value * parseInt(child.name)
    }
    return sum
}       
        
memoryButtonBox.append(buttonCreator('Сохранить' , clickHandler.saveTable , 'Сохранить таблицу'))
memoryButtonBox.append(buttonCreator('Загрузить' , clickHandler.loadTable, 'Загрузить таблицу'))
memoryButtonBox.append(buttonCreator('Удалить' , clickHandler.deleteTable, 'Удалить таблицу'))

dialogWindow.append(buttonCreator('Добавить поле ввода', clickHandler.modalAddInput))
dialogWindow.append(buttonCreator('Создать таблицу', clickHandler.closeModal))

for (let child of inputCollection){
    // console.log(parseInt(child.value))
    child.addEventListener("change", ()=> {
        finalSumDisplay.textContent = `${formSumComputer()} руб.`
    })
}

// const testSubject = {
//     abilities : {
//         power : 10
//     }
// }

// console.log(testSubject.abilities.power)