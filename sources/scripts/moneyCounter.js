/* eslint-disable no-undef */
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
// const pageForm = document.querySelector('form')
// const inputCollection = pageForm.querySelectorAll('input') 

// class Input {
//     constructor(name, value = 0, min = 0, type = 'number'){
//         this.name = name,
//         this.value = value,
//         this.min = min,
//         this.type = type
//     }
// }
// НЕ ПОНАДОБИЛСЯ!! надо реально разобраться с классами и понять - где их вообще использовать :/

clickHandler = {
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

        localStorage.setItem("moneyCounterInputTable" , JSON.stringify(inputTable))
    },

    loadTable : function(){
        // переписать на try/catch/finally
        if (localStorage.getItem('moneyCounterInputTable') == null){
            console.log('Сохраненного пресета не существует , загружаю встроенный...')
            inputTable = JSON.parse(localStorage.getItem('moneyCountingDefaultTable'))
        }
        for (let inputData in inputTable){
            let label = document.createElement('label')
            let labelParagraph = document.createElement('p')
            // let input = new Input(inputTable[inputData].name)
            let input =  document.createElement('input')

            input.name = inputTable[inputData].name
            input.type = 'number'
            input.min = 0
            input.value = 0

            labelParagraph.textContent = inputTable[inputData].textContent

            label.append(labelParagraph)
            label.append(input)
            pageForm.append(label)

            input.addEventListener('change', ()=> {
                finalSumDisplay.textContent = `Итоговая сумма : ${formSumComputer()} руб.`
            })
        }

        let finalSumDisplay = document.createElement('p')
        finalSumDisplay.textContent = 'Итоговая сумма : 0 руб.'
        pageForm.append(finalSumDisplay)
    },

    deleteTable : function(){
            
    },



    closeModal: function(){
        dialogWindow.close()
    },

    modalAddInput : function(){
        const input = document.createElement('input')
        dialogWindow.append(input)
    },
}

//sandbox
const pageForm = document.createElement('form')
memoryButtonBox.after(pageForm)


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
    let inputCollection = pageForm.querySelectorAll('input')
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

// const testSubject = {
//     abilities : {
//         power : 10
//     }
// }

// console.log(testSubject.abilities.power)