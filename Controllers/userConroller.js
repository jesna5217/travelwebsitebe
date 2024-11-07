const users=require('../Models/userSchema')
const jwt=require('jsonwebtoken')
exports.register=async(req,res)=>{
    console.log("inside user register controller");
    const {username,email,password}=req.body;
    //checking email already exists

    try{
        const existingUser=await users.findOne({email:email})
        if(existingUser){
            res.status(400).json("Account Already Exists")
        }
        else{
        
            console.log("user not exists");
            const newUser=new users({
                username:username,
                email:email,
                password:password,
                profile:""
            })
            //users-schema name
        
            //inserting to db
            await newUser.save();
            res.status(201).json("Account registered successfully")
        
        }
    }catch(err){
    res.status(400).json("Register request failed due to",err)
    }

    
    
}
exports.login=async(req,res)=>{
    console.log("inside login controller");
    
    const {email,password}=req.body;
try{
//checking if it exists
const existingUser=await users.findOne({email:email,password:password});
//users is the schema
if(existingUser){
    const token=jwt.sign({userId:existingUser._id},"dayout123");
    console.log(token);
    
    res.status(200).json({data:existingUser,
        token:token
    })
    
}
else{
  res.status(401).json("Invalid email or password")
    
}
}
catch(error){
res.status(500).json("Internal server error")
}

}

exports.getUser=async(req,res)=>{
    console.log("hi");
    
  try{
    const allUsers=await users.find();
    res.status(200).json(allUsers)
  }
  catch(err){
    res.status(401).json(err)
  }
}


exports.deleteUserApi=async(req,res)=>{
    const {id}=req.params;
    console.log("inside delete user");
    try{
        const removedUser=await users.findByIdAndDelete(id);
        res.status(200).json(removedUser)
    }
    catch(err){
        res.status(401).json(err)
    } 
}

 exports.getUserById=async(req,res)=>{
    const {id}=req.params;
  
    try{
        const user=await users.findOne({_id:id});
    res.status(200).json(user);
    // console.log(user)
    }
    catch(err){
        res.status(401).json(err)
    } 
 }
//profile adding

exports.updateProfile=async(req,res)=>{

    const {id}=req.params;

    
    const {profile}=req.body;
    const uploadProfile=req.file?req.file.filename:profile;
    try{
        const updateProfileImage=await users.findByIdAndUpdate(
           {_id:id} ,
           {
            profile:uploadProfile
           },{
            new:true
           }
        )
        await updateProfileImage.save()
        res.status(200).json("sucess")
      
        
    }
    catch(err){
        res.status(401).json(err)
     }
}











