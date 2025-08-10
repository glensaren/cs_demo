const inventoryDisplay = document.querySelector('.inventory-display')
const inventory = {}

inventory.bullets ='0'
inventory.bandages = '0'
inventory.wood = '0'

for (let itemName of Object.keys(inventory)){
    console.log(itemName)
    for (let itemCount of Object.entries(inventory))
        console.log (itemName + itemCount)
    // let item = document.createElement('p')
    // item.textContent = itemNode
    // inventoryDisplay.append(item)
}

