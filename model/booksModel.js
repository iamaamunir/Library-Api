const mongoose = require('mongoose')

const schema = mongoose.Schema

const booksModel = new schema({
    title:{
        type: String,
        required:[true, "Title is required"]
    },
    author:{
        type:String,
        required:[true, 'Author name is required']
    },
    description:{
        type:String,
        required:[true, 'Book description is required']
    },
    isbn:{
        type: Number,
        required:[true, 'Book isbn is required']
    },
    year_of_publication:{
        type: Number,
        required:[true, 'Year of publication is required']
    },
    created_At:{
        type: Date,
        default: Date.now()
    },
    updatedAt:{
        type: Date,
        default: Date.now()
    },
    price_in_naira:{
        type:Number,
        required: [true, 'Price is required'],
        min:[0, 'Price must be greater than 0']
    
    }
})

module.exports= mongoose.model('books', booksModel)