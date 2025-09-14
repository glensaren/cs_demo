//желательно поработать над шифрование , просто так пароли
//хранить в коде - опасно
const headerBox = document.querySelector('header')
const footerBox = document.querySelector('footer')

//   |  Вот это только для deltaTime , на экран не выводится
//   v
const creationTime = Date.now()

const startTime = new Date()
const timeOptions = {
    weekday : 'short',
    year : 'numeric',
    month : 'long',
    day : 'numeric',
    era : 'short',
    hourCycle : 'h12',
    hour : '2-digit',
    minute : '2-digit',
    second : '2-digit',
    dayPeriod : 'short',
    timeZoneName : 'shortOffset'
}
const timeBox = document.createElement('div')
const startTimeDisplay = document.createElement('p')
const passedTimeDisplay = document.createElement('p')
timeBox.append(passedTimeDisplay)
timeBox.classList.add('time-box')
timeBox.classList.add('admin-only')
startTimeDisplay.textContent = `Время открытия страницы - ${startTime.toLocaleDateString('ru-RU' , timeOptions)}`
timeBox.append(startTimeDisplay)
headerBox.append(timeBox)

setInterval(()=> {
    let deltaTime = Math.floor((Date.now() - creationTime) / 1000)
    passedTimeDisplay.textContent = `Сайт запущен ${Math.floor(deltaTime / 3600)} часов, ${Math.floor(deltaTime/60)} , ${(deltaTime % 3600 % 60)} секунд`
    //закончит эту х_йню
} , 1000)

document.addEventListener('keydown', (e)=>{
    if (e.code == 'NumpadSubtract'){
        headerBox.classList.toggle('off')
        footerBox.classList.toggle('off')
    }
})

let clickHandler = {
    LSCheck : function() {
        for (let key in localStorage){
            if (typeof localStorage[key] != 'function'){
                console.log(`${key}: ${localStorage[key]}`)
            }
        }
    }
}
function buttonCreator(buttonTextContent , executableAction , title = '' , listenedKey = 0, classList = '' ){
    const button = document.createElement('button');
    button.textContent = buttonTextContent;
    button.title = title
    button.classList.add(classList)
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

headerBox.append(buttonCreator("Содержимое LS" , clickHandler.LSCheck, '' , '' , 'admin-only'))

const adminOnlyElems = document.querySelectorAll('.admin-only')
const keyholder = ['ghx183','letmein','17729']
const adminLoginForm = document.querySelector('.admin-login-form')
adminLoginForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const keyInput = new FormData(adminLoginForm)
    const key = keyInput.get('admin-switch');
    if (keyholder.includes(key)){
        for (let elem in adminOnlyElems){
            adminOnlyElems[elem].classList.toggle('admin-only')
        }
    
    }
    else {
        const warning = document.createElement('p')
        warning.style.background = 'red'
        warning.style.color = 'white'
        warning.style.padding = '.5rem'
        warning.textContent = 'Доступ запрещён'
        adminLoginForm.after(warning)
        adminLoginForm.remove()
    }
})