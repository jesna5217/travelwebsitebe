
//import express module
const express=require('express')
const cors=require('cors')

//import dotenv module
require('dotenv').config()

require('./DB/connections')
const router=require('./Router/router')
const adminroutes=require('./Router/adminroutes')
//import cors 

//create server using express
const doServer=express()

//inject cors into doServer
doServer.use(cors());

//use middleware to convert JSON data to js object
doServer.use(express.json())
doServer.use(router);
doServer.use(adminroutes);
doServer.use('/uploads',express.static('./uploads'))
//provide port
const PORT=4001;

//run the server
doServer.listen(PORT,()=>{
    console.log(`doServer is running in PORT ${PORT}`);
    
})

doServer.get('/',(req,res)=>{
    res.send("DayOut")
})