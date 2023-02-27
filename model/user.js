const mongoose = require('mongoose');
const validator = require('validator');

const UserAuth = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'please fill the part']
    },
    email: {
        type: String,
        validate: [validator.isEmail, 'please provide  vaild email'] // for checking if email is realy vaild
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

module.exports = mongoose.model('users', UserAuth)