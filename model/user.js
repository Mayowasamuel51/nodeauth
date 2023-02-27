const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const UserAuth = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'please fill the part'],
        unique: true,
    },
    email: {
        type: String,
        validate: [validator.isEmail, 'please provide  vaild email'], // for checking if email is realy vaild
        unique: true,
    }, 
    password: {
        type: String, 
        required:[true , 'please provide a password '] 
    }, 
    passwordConfrim: {
        type: String,
        validate: {
            validator: function (el) {
                return el === this.password
            },
            message: 'please input a password'
        }
    }
    // we are trying to make the password and passwordconfirm be the same thing 
})



// Hashing the password in the model 
UserAuth.pre('save',  async function (next) {
    if (!this.isModified('password')) return next() // if password has been changed do the next thing 
    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfrim = undefined;;
    next()
})
module.exports = mongoose.model('users', UserAuth)