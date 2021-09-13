const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, //trim: space를 없애주는 역할 *ex)seok 8440@naver.com
        unique: 1
    },
    password: {
        type: String,
        maxlength: 50
    },
    lastname: {
        type: String,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

const User = mongoose.model('User', userSchema)

module.exports = { User } //다른 곳에서도 사용할 수 있도록 
