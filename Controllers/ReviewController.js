
const reviews=require('../Models/ReviewSchema')
const jwt=require('jsonwebtoken')

 exports.addReviews=async(req,res)=>{

    const userId=req.payload;
   console.log("hii review");
   
    const image=req.file.filename;
    
    const {userName,tourRating,reviewText,tourId}=req.body;
    try{
const newReview=new reviews({
    userName,
    tourRating,
    reviewText,
    tourId,
    image
})
await newReview.save();
res.status(200).json("review uploaded")

    }
     catch(err){
        res.status(401).json({message:"Uploading failed",error:err.message})
    }

 }

 exports.getReviewById=async(req,res)=>{

    
  const {id}=req.params;
  try{
    const review=await reviews.find({tourId:id})
// console.log(review);
res.status(200).json(review)

  }
  catch(err){
    res.status(401).json(err)
  }
    
 }
//get all reviews

exports.getAllReview=async(req,res)=>{
try{
  const allReview=await reviews.find();
  res.status(200).json(allReview)
}
catch(err){
  res.status(401).json(err)
}
}

