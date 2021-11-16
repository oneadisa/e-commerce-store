const express = require('express')
const router = express.Router();
// const signUpTemplateCopy = require('../models/signUpModels')
// const signUpBusinessTemplateCopy = require('../models/signUpBusinessModels')
// const bcrypt = require('bcrypt')
const { registerUser, authUser } = require('../controllers/userController')
const { registerBusiness, authBusiness } = require('../controllers/businessController')


router.route('/signup/2/individual').post(registerUser)
router.route('/loginUser').post(authUser);

router.route('/signUp/2/business').post(registerBusiness)
router.route('/loginBusiness').post(authBusiness);


// router.post('/signup/2/individual', async(req, res) => {
// 
// const saltPassword = await bcrypt.genSalt(10)
// const securePassword = await bcrypt.hash(req.body.password, saltPassword)

// const signedUpUser = new signUpTemplateCopy({
// firstName: req.body.firstName,
// lastName: req.body.lastName,
// email: req.body.email,
// phoneNumber: req.body.phoneNumber,
// password: securePassword
// })
// signedUpUser.save()
// .then(data => {
// res.json(data)
// })
// .catch(error => {
// res.json(error)
// })
// })

















// 
// const authUser =
// , asyncHandler(async(req, res) => {
// const { email, password } = req.body;
// const user = await signedUpUser.findOne({ email });
// if (user && (await user.matchPassword(password))) {
// res.json({
// firstName: user.firstName,
// lastName: user.lastName,
// email: user.email,
// phoneNumber: user.phoneNumber,
// password: user.password
// })
// } else {
// res.status(400);
// throw new Error("Invalid email or password!");
// }
// })
// )
// 
// router.post('/signup/2/business', async(req, res) => {
// 
// const saltPassword = await bcrypt.genSalt(10)
// const securePassword = await bcrypt.hash(req.body.password, saltPassword)
// 
// const signedUpBusiness = new signUpBusinessTemplateCopy({
// businessName: req.body.businessName,
// accountHolderName: req.body.accountHolderName,
// email: req.body.email,
// phoneNumber: req.body.phoneNumber,
// password: securePassword
// })
// signedUpBusiness.save()
// .then(data => {
// res.json(data)
// })
// .catch(error => {
// res.json(error)
// })
// 
// 
// })
// 



module.exports = router