const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const signUpBusinessTemplate = new mongoose.Schema({
    businessName: {
        type: String,
        required: true
    },
    accountHolderName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

signUpBusinessTemplate.pre('save', async function(next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

signUpBusinessTemplate.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

const signedUpBusiness = mongoose.model('mySignedUpBusinessTable', signUpBusinessTemplate);

module.exports = signedUpBusiness