const clickHandler = {
    sayHi: function(){
        alert('Hello')
    },

    sayBye: function(){
        alert('Bye bye!')
    }
}

function buttonCreator(buttonTextContent , executableAction){
    const button = document.createElement('button');
    button.textContent = buttonTextContent;
    button.addEventListener('click' , executableAction)
    return button
}

const buttonGrid = document.querySelector('.button-grid')

buttonGrid.append(buttonCreator('Hello' , clickHandler.sayHi))
buttonGrid.append(buttonCreator('ByeBye' , clickHandler.sayBye))

const inventoryDisplay = document.querySelector('.inventory-display')
const inventory = {
    bandage : 0,
    wood : 0,
    steel : 0,
    water : 0
}

for (let item of Object.keys(inventory)){
    const itemNode = document.createElement('p')
    itemNode.textContent = `${item} : ${inventory[item]}`
    inventoryDisplay.append(itemNode)
}

// console.log(Object.values(inventory))

