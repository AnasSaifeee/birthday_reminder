const express = require('express')
const users = require('../models/schema')
const router = express.Router()



router.get('/',(req,res)=>{
    const user = new users({
        name:"devansh",
        age:23,
        day:13,
        month:10,
        year:2000
    })
    console.log("1")
    user.save(async ()=>{{
        res.status(200).json({user:await users.find({

        })})
    }})
})


module.exports = router