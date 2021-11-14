const bcrypt = require('bcrypt')
const signedUpBusiness = require('../models/signUpBusinessModels')
const asyncHandler = require('express-async-handler')
const generateToken = require('../utils/generateToken')





const registerUser = asyncHandler(async(req, res) => {


    // const saltPassword = await bcrypt.genSalt(10)
    // const securePassword = await bcrypt.hash(req.body.password, saltPassword)


    // const signedUpUser = new signUpTemplateCopy({
    // businessName: req.body.businessName,
    // accountHolderName: req.body.accountHolderName,
    // email: req.body.email,
    // phoneNumber: req.body.phoneNumber,
    // password: securePassword
    // })

    const { businessName, accountHolderName, email, phoneNumber, password } = req.body

    const userExists = await signedUpUser.findOne({ email })

    if (userExists) {
        res.status(400);
        throw new Error('User Already Exists')
    }
    const user = await signedUpUser.create({

        businessName,
        accountHolderName,
        email,
        phoneNumber,
        password,
        // isAdmin,
        // pic

    })
    if (user) {
        res.status(201).json({
            // _id: user._id,
            businessName: user.businessName,
            accountHolderName: user.accountHolderName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            // isAdmin: user.isAdmin,


        })
    } else {
        res.status(400)
        throw new Error('Error occured')
    }

    signedUpUser.save()
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.json(error)
        })
})

const authUser = asyncHandler(async(req, res) => {
    const { email, password } = req.body

    const user = await signedUpBusiness.findOne({ email });
    if (user && (await user.matchPassword(password))) {
        res.json({
            businessName: user.businessName,
            accountHolderName: user.accountHolderName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            password: user.password,
            // isAdmin: user.isAdmin,
            // pic: user.pic,
            // token: generateToken(user.phoneNumber)
        })
    } else {
        res.status(400)
        throw new Error('Invalid email or password.');
    }
})

module.exports = { registerBusiness, authBusiness }