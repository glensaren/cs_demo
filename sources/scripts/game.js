const buttonGrid = document.querySelector('.button-grid')
const foundItemDisplay = document.createElement('p')
buttonGrid.after(foundItemDisplay)

class Item {
    constructor(name , description , rarity , amount = 0) {
        this.name = name;
        this.description = description;
        this.rarity = rarity;
        this.amount = amount
    }
}

const winvArray = [
    new Item('Стол' , 'Деревянный стол', 0.7 , 1),
    new Item('Стул', 'Деревянный стул', 0.75 , 1),
    new Item('АПС', '9-мм автоматический пистолет Стечкина (АПС)', 0.12, 1),
    new Item('Мусор', "Обычный уличный мусор. Наверное , из него выйдет что-то полезное , если правильно переработать", 0.8),
    new Item('Бутылка воды(0.5л)', "Потертая бутылка питьевой негазированной воды"),
    new Item('Шоколадный батончик', "Шоколадный батончик в кислотно-жёлтой упаковке. Содержит арахис"),
    new Item("Кухонный нож" , "Обычный кухонный нож", 0.1),
    new Item(""),
]

clickHandler = {
    inventoryDisplayHandler : function(){
        inventoryDisplay.classList.toggle('hidden')
        inventoryGUI_Update()
    },
    itemSearch : function(){
        //переписать на свитч и подвязать редкость предметов
        const diceValue = (Math.random() * 25).toFixed(0);
        if (diceValue < 10){
            foundItemDisplay.textContent = 'Вы ничего не нашли'
        }

        if (diceValue >= 10 && diceValue < 17){
            foundItemDisplay.textContent = 'Вы нашли мусор'
            winvArray[3].amount++
            inventoryGUI_Update()
        }
        
    }
}

function buttonCreator(buttonTextContent , executableAction , listenedKey = 0){
    const button = document.createElement('button');
    button.textContent = buttonTextContent;
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
buttonGrid.append(buttonCreator('Инвентарь' , clickHandler.inventoryDisplayHandler, 'Numpad1'))
buttonGrid.append(buttonCreator('Поиск' , clickHandler.itemSearch))

const inventoryDisplay = document.querySelector('.inventory-display')
for (let i = 0; i < winvArray.length ; i++){
    const cell = document.createElement('div')
    inventoryDisplay.append(cell)
}
const inventory = {}

for (let item of Object.keys(inventory)){
    const itemNode = document.createElement('p')
    itemNode.textContent = `${item} : ${inventory[item]}`
    inventoryDisplay.append(itemNode)
}

// console.log(Object.values(inventory))

// const iterableObject = {};
// function objectCycleAppendTester(){
//     let k = 10
//     let i = 0;
//     while (i < 10 && k > 0){
//         iterableObject[`object${i}`] = k
//         i++
//         k--
//     }
//     console.log('Итоговое значение перечисленного объекта:')
//     console.log(iterableObject)
// }

// objectCycleAppendTester()


// console.log('-----------------------------------------')
//==========================================================================================================

function matrixBuilder(height = 0, width = 0){
    const matrix = [];
    while(height > 0){
        const matrixRow = []
        let rowWidth = width
        while(rowWidth > 0){
            matrixRow.push('')
            rowWidth--
        }
        matrix.push(matrixRow)
        height--
    }

    return matrix
}

function matrixValueSetter(matrixName, y , x , assignedValue){
    (matrixName[y])[x] = assignedValue
}

// function matrixSizeGetter(matrixName){
//     const y = matrixName.length;
//     const x = matrixName[0].length
//     return [y,x]
// }

// coordLearner(1,0)

const newMatrix = matrixBuilder(6,3);
matrixValueSetter(newMatrix, 0 , 1 , 99)

// console.log(newMatrix)
// console.log(matrixSizeGetter(newMatrix))

const inventoryCellCollection = []
for (let cell of inventoryDisplay.children){
    inventoryCellCollection.push(cell)
}

function inventoryGUI_Update(){
    inventoryCellCollection.forEach((element) => {
    let elementIndex = inventoryCellCollection.indexOf(element)
    let inventoryItem = winvArray[elementIndex]

    if (inventoryItem.amount > 0) {
        element.textContent = `${inventoryItem.name} | ${inventoryItem.amount} шт.`
        element.title = inventoryItem.description
    }
    
})
}
