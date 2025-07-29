const builderEraseButton = document.querySelector('.builder-erase-button')
const builderDisplay = document.querySelector('.builder-display')
const evalButton = document.querySelector('.eval-button')
const builderForm = document.querySelector('.builder-form')
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
        block.classList.add('block')
        if (i % 3 == 0){
            block.classList.add('green')
        }

        else if (i % 2 == 0 && i % 3 != 0){
            block.classList.add('purple')
        }

        else if (Math.random().toFixed(1) == Math.random().toFixed(1)){
            block.classList.add('black')
        }
        block.textContent = Math.random().toFixed(2)
        builderDisplay.append(block)
        i++
    }


    
}
)

builderEraseButton.addEventListener('click' , ()=> { 
    builderDisplay.innerHTML = ''
})

let summary = 0

evalButton.addEventListener('click', ()=>{
    const numbersArray = builderDisplay.textContent.split('.')
    summary = 0
    for (const exactNumber of numbersArray) {
        summary = summary + parseInt(exactNumber)
    }
    console.log(summary)
    console.log(`Количество элементов: ${rows}`)
    console.log(`Среднее значение: ${(summary/(rows*1000)).toFixed(10)}`)
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

