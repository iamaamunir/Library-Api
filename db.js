const mongoose = require('mongoose')

require('dotenv').config()

const mongoDb_URL = process.env.MONGOOSE_CONNECTION_URL

function connectToMongoDb (){
    mongoose.connect(mongoDb_URL)
    mongoose.connection.on('connected', ()=>{
        console.log('MongoDB connected successfully')
    })
    mongoose.connection.on('error', (err)=>{
        console.log('Error connecting to MongoDB', err)
    })
}

module.exports = connectToMongoDb