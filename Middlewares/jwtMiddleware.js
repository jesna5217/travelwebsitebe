const jwt=require("jsonwebtoken");
const jwtMiddleware=(req,res,next)=>{
    console.log("inside jwt middleware");
//extracting token
if(!req.headers['authorization']){
    res.status(401).json("Authorization failed ,please login")
}
const token=req.headers['authorization'].split(' ')[1];
console.log(token);
try{
    const jwtResponse=jwt.verify(token,"dayout123");
    //used to decrypt the token
    console.log(jwtResponse);
    req.payload=jwtResponse.userId;
    next();
    
}
catch(error){
console.log(error);
res.status(401).json("Authorization failed ,please log in")
}


    
}
module.exports=jwtMiddleware;