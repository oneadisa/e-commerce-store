const jwt = require('jsonwebtoken')

const generateToken = (phoneNumber) => {
    return jwt.sign({ phoneNumber }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    })
}

module.exports = generateToken;