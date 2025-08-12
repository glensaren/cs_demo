const buttonGrid = document.querySelector('.button-grid')

const clickHandler = {
    inventoryDisplayHandler : function(){
        inventoryDisplay.classList.toggle('hidden')
    },
    itemSearch : function(){
        Math.random()
    }
}

function buttonCreator(buttonTextContent , executableAction){
    const button = document.createElement('button');
    button.textContent = buttonTextContent;
    button.addEventListener('click' , executableAction)
    return button
}

buttonGrid.append(buttonCreator('Инвентарь' , clickHandler.inventoryDisplayHandler))

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

const wiListApplyer = 
'cтальная труба,деревянный прут,пистолет Беретта 92Ф,бутылка минеральной воды(0.5Л),пачка патронов 9х19 Парабеллум(50 штук)'
const wiArray = wiListApplyer.split(',')
console.log(wiArray)

console.log(inventoryDisplay.children)
const inventoryCellCollection = []
for (let cell of inventoryDisplay.children){
    inventoryCellCollection.push(cell)
}

console.log(inventoryCellCollection)
let h = 0
inventoryCellCollection.forEach((element) => {
    let elementIndex = inventoryCellCollection.indexOf(element)
    element.textContent = wiArray[elementIndex]
})