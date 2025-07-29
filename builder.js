const builderEraseButton = document.querySelector('.builder-erase-button')
const builderDisplay = document.querySelector('.builder-display')
const evalButton = document.querySelector('.eval-button')
const builderForm = document.querySelector('.builder-form')



const blockAmountDisplay = document.querySelector('.block-amount-display')
const errorDisplay = document.querySelector('.error-display')
let rows = 0
builderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const builderFormData = new FormData(builderForm);
    rows = builderFormData.get('rowAmount');
    const columns = builderFormData.get('columnAmount')
    console.log(columns)

    let i = 0
    while (i < rows){
        let block = document.createElement('div')
        const randomNumber = Math.random()
        const number = (randomNumber * 16777215).toFixed(5)
        const hex = parseInt(number, 10).toString(16)
        block.classList.add('block')
        block.style.background = '#' + hex
        // if (Math.random().toFixed(1) == Math.random().toFixed(1)){
        //     block.classList.add('black')
        // }
        
        // else if (Math.random().toFixed(2) == 0.44){
        //     block.classList.add('golden')
        // }
        
        // else if (i % 3 == 0){
        //     block.classList.add('green')
        // }

        // else if (i % 2 == 0 && i % 3 != 0){
        //     block.classList.add('purple')
        // }
        block.textContent = randomNumber.toFixed(5)
        builderDisplay.append(block)
        i++
    }


    
}
)

builderEraseButton.addEventListener('click' , ()=> { 
    builderDisplay.innerHTML = ''
    blockAmountDisplay.textContent = ''
    errorDisplay.textContent = ''
})

let summary = 0

evalButton.addEventListener('click', ()=>{
    const numbersArray = builderDisplay.textContent.split('.')
    summary = 0
    for (const exactNumber of numbersArray) {
        summary = summary + parseInt(exactNumber)
    }
    console.log(summary)
    blockAmountDisplay.textContent = `Количество элементов: ${rows}`
    errorDisplay.textContent = `Среднее значение: ${(summary/(rows*1000)).toFixed(10)}`
})

// function tester(modifier = 1){
//     if (modifier == 1){
//         alert('Я работаю!')
//     }

//     else if(modifier == 2){
//         console.log('Я работаю!')
//     }
// }

// СУКА ЧТО ПРОИСХОДИТ БЛЯТЬ С КОДОМ В ЭТОЙ ХУЙНЕ???!!
// НУ НАХУЙ Я БЛЯТЬ ПОШЕЛ КУРИТЬ И СПАТЬ. РАЗБИРАЙТЕСЬ САМИ!
//FIXED :manincoolglasses :thumbup

// alert(hex)

