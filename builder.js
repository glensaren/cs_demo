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
        block.textContent = Math.random().toFixed(2)
        builderDisplay.append(block)
        i++
    }

    tester()
    console.log(`Я вывел на страницу 12 элементов!`)

    // const numbersArray = builderDisplay.textContent.split('.')
    // let summary = 0
    // for (const exactNumber of numbersArray) {
    //     summary = summary + parseInt(exactNumber)
    // }
    // console.log(summary)
    // console.log(`Количество элементов: ${rows}`)
    // console.log(`Общий вес массива: ${summary/(rows*10)}`)
}
)



builderEraseButton.addEventListener('click' , ()=> { 
    builderDisplay.innerHTML = ''
})


evalButton.addEventListener('click', ()=>{
    tester()
})

function tester(modifier = 1){
    if (modifier == 1){
        alert('Я работаю!')
    }

    else if(modifier == 2){
        console.log('Я работаю!')
    }
}

// СУКА ЧТО ПРОИСХОДИТ БЛЯТЬ С КОДОМ В ЭТОЙ ХУЙНЕ???!!
// НУ НАХУЙ Я БЛЯТЬ ПОШЕЛ КУРИТЬ И СПАТЬ. РАЗБИРАЙТЕСЬ САМИ!