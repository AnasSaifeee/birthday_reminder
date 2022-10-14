const users = require('../models/schema')

const reminder=async (req,res)=>{
    const user = new users({
        name:"anas",
        age :23,
        DOB:"2000-04-28"
    })  
    user.save(async()=>{{
        res.status(200).json({user: await users.find({

        })})
    }})
}

module.exports={reminder}