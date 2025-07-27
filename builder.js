const builderEraseButton = document.querySelector('.builder-erase-button')
const builderDisplay = document.querySelector('.builder-display')
const builderForm = document.querySelector('.builder-form')
builderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const builderFormData = new FormData(builderForm);
    const rows = builderFormData.get('rowAmount');
    const columns = builderFormData.get('columnAmount')

    console.log(columns)

    let i = 0
    while (i < rows){
        let block = document.createElement('div')
        block.classList.add('block')
        builderDisplay.append(block)
        i++
    }
}
)

builderEraseButton.addEventListener('click' , ()=> { 
    builderDisplay.innerHTML = ''
})
