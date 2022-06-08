const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const saltRounds = 10
const jwt = require('jsonwebtoken');

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

userSchema.pre('save', function (next) {
    var user = this;
    if (user.isModified('password')) {
        //비밀번호를 암호화 시킨다.
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) return next(err)

            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) return next(err)
                user.password = hash
                next()
            })
        })
    } else {
        next()
    }
})

userSchema.methods.comparePassword = function(plainPassword, cb) {
  
    //plainPassword 암호화된 비밀번호와 입력한 비밀번호를 압호화해서 매치하는지 확인
    bcrypt.compare(plainPassword, this.password, function(err,isMatch) {
        if(err) return cb(err),
            cb(null, isMatch)
    })
}

userSchema.methods.generateToken = function(cb) {
    var user = this;
    
    //jsonwebtoken을 이용해서 token 생성하기
    var token = jwt.sign(user._id, 'secertToken')
    //user._id + 'secretToken' = token
    //유저아이디와 시크릿토큰으로 토큰을 만듬
    //->
    //'secertToken -> user._id
    //시크릿토큰으로 유저아이디를 찾을 수 있음

    user.token = token 
    user.save(function(errm user) {
        if(err) return cb(err)
        cb(null, user)
    })

}

const User = mongoose.model('User', userSchema)

module.exports = { User } //다른 곳에서도 사용할 수 있도록 
