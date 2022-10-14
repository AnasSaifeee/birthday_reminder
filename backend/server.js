const express = require('express')
const cors = require('cors')
const app= express()
const mongoose = require('mongoose')
const routes = require('./routes/routes')
require("dotenv").config()

app.use(
	cors({
	  origin:"http://localhost:4000/",
	  methods: "GET,POST,PUT,DELETE, PATCH",
	})
  );

// app.use((req,res,next)=> 
// {
// 	console.log(req.path, req.method)
// 	next()
// })

app.use('/api/birthdayreminder',routes)

mongoose.connect(process.env.MONGO_URI).then(()=>{
	app.listen(process.env.port,()=>{
		console.log("app is running on port",process.env.port)
	})
}).catch((error)=>{
	console.log(error)
})

