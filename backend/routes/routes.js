const express = require('express')
const users = require('../models/schema')
const {reminder} = require('../controller/controller')
const router = express.Router()


    
router.get('/',reminder)


module.exports = router