const express = require('express')
require('dotenv').config()
const mongooseConnection = require('./db')
const usersRoute = require('./routes/usersRoute')
const booksRoute = require('./routes/booksRoute')
mongooseConnection()

const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use('/users',usersRoute)
app.use('/books', booksRoute)

app.get('/',(req, res)=>{
    res.send('Home Route')
})

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})