const mongoose=require('mongoose');
const connectionString=process.env.DATABASE;
mongoose.connect(connectionString).then((res)=>{
    console.log("MongoDB connected successfully");
    
}).catch((err)=>{
    console.log("Connection Failed",err);
    
})