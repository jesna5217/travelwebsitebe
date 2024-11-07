const tours=require ('../Models/tourSchema');
const jwt=require('jsonwebtoken')

//add a new tour
exports.addTour=async(req,res)=>{
    console.log("inside tour project controller");
    const userId=req.payload;
    console.log("userId",userId);
    //req we are getting is formdata
    //it is not possible to diractly acess the data
    //we need to use multer module to deal with multipart
    const tourImage=req.file.filename;
    console.log(tourImage);
    const {title,city,price,days,desc,maxGroupSize,id}=req.body;
    try{
        const existingTour=await tours.findOne({title});
        if(existingTour){
            res.status(409).json("Project Already exists")
        }
        else{
            const newTour=new tours({
                id,
                title,
            city,
            days,
            desc,
            maxGroupSize,
            price,
            tourImage
            })
            await newTour.save();
            res.status(200).json("Uploaded sucessfully")
        }
    }
    catch(err){
        res.status(401).json({message:"Uploading failed",error:err.message})
    }
    
}

//get all tour details
exports.getAllTour=async(req,res)=>{
    try{
        const allTours=await tours.find();
        res.status(200).json(allTours)
    }
    catch(err){
        res.status(401).json(err)
    }
}
exports.getAllTourById=async(req,res)=>{
    try{
        const {id}=req.params;
        
        
        const idTour=await tours.findOne({id:id});
        res.status(200).json(idTour)
        
    }
    catch(err){
        res.status(401).json(err)
    }
}

//to edit

exports.editTour=async(req,res)=>{
    const {id:tourId}=req.params;
console.log(tourId);

   const {title,city,days,maxGroupSize,price,desc,tourImage,id}=req.body;
 const uploadedImage=req.file?req.file.filename:tourImage;

 try{
    const updateTour=await tours.findByIdAndUpdate(
        {_id:tourId},{
            id:id,
            title:title,
            city:city,
            
            days:days,

            maxGroupSize:maxGroupSize,
            price:price,
            desc:desc,
            tourImage:uploadedImage
        },
        {
            new:true
        }
    )
    await updateTour.save();
    res.status(200).json(updateTour)
 }
 catch(err){
    res.status(401).json(err)
 }
}


exports.deleteTour=async(req,res)=>{
    console.log("inside delete tour");
    
    const {id}=req.params;
    console.log(id);
    
    try{
const removedTour=await tours.findByIdAndDelete(id);
res.status(200).json(removedTour);
    }
    catch(err){
        res.status(401).json(err)
    }
}
 