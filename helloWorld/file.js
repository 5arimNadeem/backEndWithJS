const { log } = require('console')
const fs = require('fs')


// synchronous
// fs.writeFileSync('./test.txt', 'Hey there')

// asynchronous 
// fs.writeFile('./text.txt', "hellwAsync", (err) => {})

// const result = fs.readFileSync('./contact.txt', 'utf-8')
// console.log(result)

// fs.readFile("./contact.txt", "utf-8", (err, result) => {
//     if (err) {
//         console.log("error", err)
//     } else {
//         console.log(result)
//     }
// })

// async kii type void hai it don't resturs any thing and vice versa 

fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString())