//import mongoose
const mongoose=require('mongoose')

//create schema
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    profile:{
        type:String
    }
})

//create model
//users is db collection name
const users=mongoose.model("users",userSchema)
//export model
module.exports=users;