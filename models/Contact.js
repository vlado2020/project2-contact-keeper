const mongoose = require('mongoose')


const ContactSchema = mongoose.Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        //referenca na određenu mongodb kolekciju
        ref: 'users'
    },

    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },  
    phone:{
        type: String,
        required: true
    },
    type:{
        type: String,
        default: 'personal'
    },
   date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Contact', ContactSchema)