const multer=require('multer');
//create storage
const storage=multer.diskStorage({
    //it consists of two keys
    //first is the destination
    //second is filename
    destination:(req,file,callback)=>{
        callback(null,'./uploads')
    },
    filename:(req,file,callback)=>{
        const fileName =`image-${Date.now()}-${file.originalname}`
        callback(null,fileName)
    }
})
//implement file filter
const fileFilter=(req,file,callback)=>{
    if(file.mimetype==='image/png'|| file.mimetype==="image/jpeg" || file.mimetype==="image/jpg" || file.mimetype==="image/avif"){
        callback(null,true)
    }
    else{
        callback(null,false)
    }
}

const multerConfig=multer({
    storage,
    fileFilter
})
module.exports=multerConfig;