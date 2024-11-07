const express=require('express');

const router=new express.Router();
const userController=require('../Controllers/userConroller');
const adminController=require('../Controllers/adminController')
const jwtMiddleware=require('../Middlewares/jwtMiddleware')

router.get('/getuser',userController.getUser);
router.delete('/user/deleteuser/:id',jwtMiddleware,userController.deleteUserApi)
router.get('/allbookings',adminController.getAllBookings);
router.post('/admin/login',adminController.adminLogin)
router.get('/getadmin',jwtMiddleware,adminController.getAdmin);
router.put('/updateadmin/:id',jwtMiddleware,adminController.updateAdmin)
//Export router
module.exports=router;