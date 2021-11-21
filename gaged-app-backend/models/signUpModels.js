// import mongoose from "mongoose";
// import bcrypt from "bcryptjs";
// 
// const userSchema = mongoose.Schema(
//   {
// name: {
//   type: String,
//   required: true,
// },
// email: {
//   type: String,
//   required: true,
//   unique: true,
// },
// password: {
//   type: String,
//   required: true,
// },
// isAdmin: {
//   type: Boolean,
//   required: true,
//   default: false,
// },
// pic: {
//   type: String,
//   required: true,
//   default:
// "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
// },
//   },
//   {
// timestamps: true,
//   }
// );
// 
// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };
// 
// will encrypt password everytime its saved
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
// next();
//   }
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });
// 
// const User = mongoose.model("User", userSchema);
// 
// export default User;
// 
// 
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const signUpTemplate = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: "false"
    },
    pic: {
        type: String,
        required: true,
        default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    date: {
        type: Date,
        default: Date.now
    }

});

signUpTemplate.pre('save', async function(next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

signUpTemplate.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

const signedUpUser = mongoose.model('mySignedUpUserTable', signUpTemplate);

module.exports = signedUpUser;
// 
// isAdmin: {
// just in case
// type: Boolean,
// required: true,
// default: false
// },
// pic: {
// type: String,
// required: true,
// default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
// },