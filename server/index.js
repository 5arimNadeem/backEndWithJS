import express from "express"
const app = express()

app.get('/', (req, res) => {
    return res.send('home page hai yeh ')
})

app.get('/about', (req, res) => {
    return res.send('about page hoon mai ')
})



app.listen(9000, () => console.log("SS"))
