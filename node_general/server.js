// const chalk = require('chalk')
const http = require('http')
const hostname = '127.0.0.1'
const port = 3000
const server = http.createServer((req , res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello Polytech\n')
})

const fs = require('fs')
fs.open('test.txt', 'w+', (err, fd) => {
})

try {
const fd = fs.openSync('test.txt', 'w+')
} catch (err) {
console.error(err)
}


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

server.listen(port, hostname, ()=>{
    console.log(`Сервер удачно запущен в ${startTime.toLocaleDateString('ru-RU' , timeOptions)}`)
})
// process.exit()