const express = require('express')
const router = express.Router();
const signUpTemplateCopy = require('../models/signUpModels')
const bcrypt = require('bcrypt')

router.post('/signup', async(req, res) => {

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(req.body.password, saltPassword)

    const signedUpUser = new signUpTemplateCopy({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: securePassword
    })
    signedUpUser.save()
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.json(error)
        })
})

module.exports = router