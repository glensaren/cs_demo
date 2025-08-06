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


    builderDisplay.style.gridTemplateColumns = `repeat(${columns}, auto)`

    let i = 0
    while (i < rows){
        let block = document.createElement('div')
        const randomNumber = Math.random()
        const number = (randomNumber * 16777215).toFixed(5)
        const hex = parseInt(number, 10).toString(16)
        block.classList.add('block')
        block.style.background = '#' + hex
        // block.textContent = randomNumber.toFixed(5)
        builderDisplay.append(block)
        i++
    }
}
)

        // if (Math.random().toFixed(1) == Math.random().toFixed(1)){
        // устаревший код для "мозайки"
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

// function numberArrayGenerator(topNumber = 1){
//     let numberArray = []
//     let i = 0
//     while (i < topNumber){
//         numberArray.push(i.toFixed(4))
//         i = i + 0.0001
//     }
//     return numberArray
// }

// const numberArray =  numberArrayGenerator()

// for (const number of numberArray){
//     const readyNumber = number * 16777215
//     let hex = parseInt(readyNumber, 10).toString(16)
//     const block = document.createElement('div');
//     block.classList.add('block')
//     block.style.background = '#' + hex
//     block.textContent = hex
//     builderDisplay.append(block)
// }



document.addEventListener("keydown" , (e)=> {
    const rect = document.body.getBoundingClientRect()
    const height = rect.height.toFixed(0)

    if (e.code == "ShiftLeft"){
        window.scroll({
            top: height,
            bottom: 0,
            behavior: "smooth",
        })
    }

    else if(e.code == "ShiftRight"){
        window.scroll({
            top: 0,
            bottom: height,
            behavior: 'smooth',
        })
    }
})

document.addEventListener('keydown' , (e)=> {
    console.log(`event key = ${e.key}`)
    console.log(`event code = ${e.code}`)
})

//ИДЕЯ! реализовать скрытие подвала и шапки нажатием кнопки (будет numpad5)55

const headerBox = document.querySelector('header')
const footerBox = document.querySelector('footer')
document.addEventListener('keydown', (e)=>{
    if (e.code == 'NumpadSubtract'){
        headerBox.classList.toggle('off')
        footerBox.classList.toggle('off')
    }
})
