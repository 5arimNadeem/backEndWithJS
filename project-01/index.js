const express = require("express")
const { connectMongoDB } = require('./connection')
const user = require('./routes/user')
const { logReqRes } = require('./middleWares')
const app = express()
const port = 8000

// Connection : 
connectMongoDB("mongodb://127.0.0.1:27017/youtube-app-1").then(() => { console.log("mongoDBConnected") }) 


// middleware plugin
app.use(express.urlencoded({ extended: false }))
// frontend sa data laa kar daita hai or object kii form mai return karwata hai req.body mai 

app.use(logReqRes('log.txt'))

// Routes 
app.use("/api/users", user)

app.listen(port, () => console.log(`server started at port 8000`))


