const http = require('http')
const fs = require('fs')
const hostname = '127.0.0.1'
const port = 3000
const server = http.createServer((req , res) => {
    fs.readFile('server.html' , (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end('An error occured while trying to read HTML file. Try later nahyi')
            return
        }
        res.writeHead(200 , {'Content-Type': 'text/html'});
        res.end(data);
    })
})

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

server.listen(port, hostname)

//fyleSystem

fs.readFile(`journal.txt`,'utf-8',(err, data)=>{
    fs.writeFile('journal.txt', data + `\nПрограмма была запущена в ${startTime.toLocaleDateString('ru-RU' , timeOptions)}` , (err , data)=>{
        // console.log(fs.readFileSync('journal.txt' , 'utf-8'))
        console.log(`Запись прошла успешно`)
    })
})

