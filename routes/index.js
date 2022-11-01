var express = require('express')
const User = require('../../model/user')
const {validationSchema} = require('./validation')

var router = express.Router()

/* GET home page. */
// router.get('/', function (req, res, next) {
//     res.render('index', {title: 'Express'})
// })

router.put('/', async (req, res, next) => {
    const {firstName, lastName, email, password, mobileNumber, pinCode} = req.body
    validationSchema.validate(req.body)
    const user = new User()
    user.firstName = firstName
    user.lastName = lastName
    user.email = email
    user.password = password
    user.mobileNumber = mobileNumber
    user.pinCode = pinCode
    const result = await user.save().catch((error) => {
        return error
    })
    res.status(201).json({
        response: 'success',
        data: result,
    })
    //return await User.create(req.body)
})

router.get('/:param', async (req, res) => {
    let param = req.params.param
    let result
    if (param.includes('@')) {
        result = await User.findOne({email: param})
    } else {
        result = await User.findOne({mobileNumber: param})
    }

    res.status(200).json({
        response: 'success',
        data: result,
    })
})

module.exports = router
