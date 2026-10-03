const express=require('express')
const validationMiddleware=require('../middlewares/validation.middleware')
const authMiddleware=require('../middlewares/auth.middleware')
const authController=require('../controllers/auth.controller')

const router=express.Router();

router.post("/register", validationMiddleware.userRegisterValidationRules, authMiddleware.IsUserExists, authController.userRegister)
router.post("/login", authMiddleware.IsUserExistsforLogin, authController.userLogin)
router.get("/logout", authController.logoutUser);

module.exports=router;