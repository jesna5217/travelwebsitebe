const admins=require ('../Models/adminSchema')
const jwt=require('jsonwebtoken');
const bookings = require('../Models/BookingSchema');


exports.adminLogin=async(req,res)=>{
    console.log("inside admin login controller");

    const {email,password}=req.body;
 try{
const adminDetails=await admins.findOne({email:email});
if (!adminDetails) {
    return res.status(404).json({ message: "Admin not found" });
}

if(password===adminDetails.password){
    const token=jwt.sign({userId:adminDetails._id},"dayout123")
    console.log(token);
    
    res.status(200).json({data:adminDetails,
        token:token
    });
    console.log("sucess");
    
}
else {
    // Password is incorrect
    res.status(401).json({ message: "Incorrect password" });
}
    }
 catch(err){
        res.status(500).json(err);
   }
}

exports.getAllBookings=async(req,res)=>{

    
try{
    const allBookings=await bookings.find();
    res.status(200).json(allBookings)
}
catch(err){
    res.status(401).json(err)
}
}

//get admin details
exports.getAdmin=async(req,res)=>{
   
    try{
        const adminDetails=await admins.find();
        res.status(200).json(adminDetails)
    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.updateAdmin=async(req,res)=>{
   const {id}=req.params;
   const {password}=req.body;
    try{
        const updatePassword=await admins.findByIdAndUpdate(
            {_id:id},
            {
                password:password
            },{
                new:true
            }
        )
        await updatePassword.save();
        
        res.status(200).json("updated");
        
        
    }
    catch(err){
        res.status(401).json(err)
     }
}