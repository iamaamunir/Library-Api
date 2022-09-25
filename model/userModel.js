const mongoose = require('mongoose')

const schema = mongoose.Schema

const userModel = new schema({
    Name:{
        type: String,
        require:[true, "User name is required"]
    },
    Email:{
        type:String,
        require:[true, "Email is required"],
        unique:true
    },
    Username:{
        type: String,
        required:[true, "Username is required"],
        unique:true,
        min:[String.length, `Username must be greater] than ${String.length}`]
    },
    Password:{
        type: String,
        required:[true, "Password is required"],
        unique:true,
        max:[12, `Password must be equal or equal to  12`],
        min:[5, `Password must be greater than or equal to 5`]

    },
    Phone_Number:{
        type:Number,
        required:[true, "Phone Number is required"]
    },

    Address:{
        type: String
    },
    Role:{
        type:String,
        required:[true, "Your role is required: Admin Or Visitor"],
        enum:['Admin', 'Visitor']
    }
})

module.exports = mongoose.model('users', userModel)