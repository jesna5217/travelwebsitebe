const mongoose=require("mongoose")
const tourSchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true,
        unique:true
    },
    city:{
        type:String,
        required:true
    },
    days:{
        type:Number,
        required:true
    },
    tourImage:{

        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    maxGroupSize:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    reviews:{
        type:String
    },
    rating:{
        type:Number
    },
    avgRating:{
        type:Number
    }
})

const tours=mongoose.model("tours",tourSchema);
module.exports=tours;