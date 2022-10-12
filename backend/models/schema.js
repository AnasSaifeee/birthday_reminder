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
    day:{
        type:Number,
        required:true
    },
    month:{
        type:Number,
        required:true
    },
    year:{
        type:Number,
        required:true
    }

},{timestamps:true})

module.exports=mongoose.model('user',userschema)