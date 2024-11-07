
const bookings=require ('../Models/BookingSchema')
const jwt=require('jsonwebtoken')


//upload booking details

exports.uploadBookingData=async(req,res)=>{
    console.log("inside booking");
    console.log(req.body);
    
const {fullName,phone,guestNo,bookAt,userId,userEmail,tourName,price}=req.body;
console.log(fullName);

try{
const newBooking=new bookings({
    fullName,
    phone,
    guestNo,
    bookAt,
    userId,
   userEmail,
    tourName,
    price
});

await newBooking.save();

res.status(200).json("uploaded successfully")
console.log("uploaded");
}
catch(err){
    res.status(401).json({message:"Uploading failed",error:err.message})

} 
}


exports.getBookingDetailsById=async(req,res)=>{
    // console.log("inside orders");
    try{
        const {id}=req.params;
        // console.log(id);
        const orders=await bookings.find({userId:id});
        // console.log(orders);
        
        res.status(200).json(orders)
    }
    catch(err){
        res.status(401).json(err)
    }
}