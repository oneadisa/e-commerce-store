const bcrypt = require('bcrypt')
const signedUpUser = require('../models/signUpModels')
const asyncHandler = require('express-async-handler')
const generateToken = require('../utils/generateToken')





const registerUser = asyncHandler(async(req, res) => {


    // const saltPassword = await bcrypt.genSalt(10)
    // const securePassword = await bcrypt.hash(req.body.password, saltPassword)


    // const signedUpUser = new signUpTemplateCopy({
    // firstName: req.body.firstName,
    // lastName: req.body.lastName,
    // email: req.body.email,
    // phoneNumber: req.body.phoneNumber,
    // password: securePassword
    // })

    const { firstName, lastName, email, phoneNumber, password, pic, isAdmin } = req.body

    const userExists = await signedUpUser.findOne({ email })

    if (userExists) {
        res.status(400);
        throw new Error('User Already Exists. Please Log In.')
    }
    const user = await signedUpUser.create({

        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        isAdmin,
        pic

    })
    if (user) {
        res.status(201).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            isAdmin: user.isAdmin,
            pic: user.pic,
            token: generateToken(user._id)


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

    const user = await signedUpUser.findOne({ email });
    if (user && (await user.matchPassword(password))) {
        res.json({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            password: user.password,
            isAdmin: user.isAdmin,
            pic: user.pic,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid email or password.');
    }
})

module.exports = { registerUser, authUser }