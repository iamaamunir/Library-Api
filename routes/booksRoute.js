const express = require('express')
const bookRoute = express.Router()

const bookModel = require('../model/booksModel')
const userModel = require("../model/userModel");

bookRoute.post('/createbook/:id', (req,res)=>{
    const {userType: role, bookDetails: book} = req.body
    const id = req.params.id
    userModel.findById(id).then((user)=>{
        
    })
})

module.exports = bookRoute