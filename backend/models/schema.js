const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userschema = new Schema({
    name:{
        type:String,
        required: true
    },
    age:{
        type:Number,
        required:true
    },
    DOB:{
        type:Date,
        required:true
    }

},{timestamps:true})

module.exports=mongoose.model('user',userschema)