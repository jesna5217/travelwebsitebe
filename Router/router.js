const express=require('express');

const router=new express.Router();
const userController=require('../Controllers/userConroller')
const tourController=require('../Controllers/tourController')
const adminController=require('../Controllers/adminController')
const bookingController=require('../Controllers/bookingController')
const reviewController=require('../Controllers/ReviewController')
 const jwtMiddleware=require('../Middlewares/jwtMiddleware')
 const multerConfig=require('../Middlewares/multerMiddleware')
//provide diff path for resolving requests
router.post('/user/register',userController.register)
router.post('/user/login', userController.login)
// router.get('/admin/login',adminController.adminLogin)

router.post('/tour/addtour',jwtMiddleware,multerConfig.single('tourImage'),tourController.addTour)
router.get('/tour/gettour',tourController.getAllTour);
router.get('/tour/gettourid/:id',tourController.getAllTourById)
router.put('/tour/edittour/:id',jwtMiddleware,multerConfig.single('tourImage'),tourController.editTour);
router.delete('/tour/deletetour/:id',jwtMiddleware,tourController.deleteTour);
router.post('/booking',jwtMiddleware,bookingController.uploadBookingData)



router.get('/bookingdetails/:id',bookingController.getBookingDetailsById)

router.post('/review',jwtMiddleware,multerConfig.single('image'),reviewController.addReviews)
router.get('/getreview/:id',reviewController.getReviewById);
// router.put('/uploadimage/:id',jwtMiddleware,multerConfig.single('profile'),userController.updateProfileImage);
router.get('/user/details/:id',userController.getUserById)
router.get('/allreview',reviewController.getAllReview)
router.put('/uploadimage/:id',jwtMiddleware,multerConfig.single('profile'),userController.updateProfile);
router.get('/tour/searchtour',tourController.getSearchTour)
//Export router
module.exports=router;