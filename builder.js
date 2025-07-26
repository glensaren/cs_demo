const initialBlock = document.querySelector('.initial.block')
console.log(initialBlock.getBoundingClientRect)
const block = document.createElement('div')
block.classList.add('block')
initialBlock.after(block)
const shower = document.createElement('p')
shower.textContent = block.getBoundingClientRect.top
document.append(shower)