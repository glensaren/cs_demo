const buttonGrid = document.querySelector('.button-grid')
const foundItemDisplay = document.createElement('p')
buttonGrid.after(foundItemDisplay)

class Item {
    constructor(name , description , rarity , amount) {
        this.name = name;
        this.description = description;
        this.rarity = rarity;
        this.amount = amount
    }
}

const clickHandler = {
    inventoryDisplayHandler : function(){
        inventoryDisplay.classList.toggle('hidden')
        inventoryGUI_Update()
    },
    itemSearch : function(){
        
        const diceValue = (Math.random() * 25).toFixed(0);
        if (diceValue < 10){
            foundItemDisplay.textContent = 'Вы ничего не нашли'
        }

        if (diceValue >= 10 && diceValue < 17){
            foundItemDisplay.textContent = 'Вы нашли мусор'
            winvArray.push('Мусор')
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
const inventory = {
    
}

for (let item of Object.keys(inventory)){
    const itemNode = document.createElement('p')
    itemNode.textContent = `${item} : ${inventory[item]}`
    inventoryDisplay.append(itemNode)
}

// console.log(Object.values(inventory))

const iterableObject = {};
function objectCycleAppendTester(){
    let k = 10
    let i = 0;
    while (i < 10 && k > 0){
        iterableObject[`object${i}`] = k
        i++
        k--
    }
    console.log('Итоговое значение перечисленного объекта:')
    console.log(iterableObject)
}

objectCycleAppendTester()


console.log('-----------------------------------------')
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

function matrixSizeGetter(matrixName){
    const y = matrixName.length;
    const x = matrixName[0].length
    return [y,x]
}

// coordLearner(1,0)

const newMatrix = matrixBuilder(6,3);
matrixValueSetter(newMatrix, 0 , 1 , 99)

console.log(newMatrix)
console.log(matrixSizeGetter(newMatrix))

const winvArray = [
    new Item('Стол' , 'Деревянный стол', 0.7 , 1),
    new Item('Стул', 'Деревянный стул', 0.75 , 1),
    new Item('Автоматический пистолет Стечкина', '9-мм автоматический пистолет Стечкина (АПС, Индекс ГРАУ — 56-А-126) — автоматический пистолет, разработанный в конце 1940-х — начале 1950-х годов конструктором И. Я. Стечкиным и принятый на вооружение Вооружённых Сил СССР в 1951 году, одновременно с пистолетом Макарова.')

]

const inventoryCellCollection = []
for (let cell of inventoryDisplay.children){
    inventoryCellCollection.push(cell)
}

function inventoryGUI_Update(){
    inventoryCellCollection.forEach((element) => {
    let elementIndex = inventoryCellCollection.indexOf(element)
    element.textContent = (winvArray[elementIndex]).name
    element.title = (winvArray[elementIndex]).description
})
}
