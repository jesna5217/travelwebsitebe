const mongoose=require('mongoose');
const ReviewSchema=new mongoose.Schema({
    userName:{
        type:String,
    required:true    
    },
    tourRating:{
        type:Number
       
    },
    reviewText:{
        type:String,
    },
    image:{
        type:String
    },
    tourId:{
        type:String,
        required:true
    }
})
const reviews=mongoose.model('reviews',ReviewSchema);
module.exports=reviews;