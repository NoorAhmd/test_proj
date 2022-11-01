const Joi = require('joi')

export const validationSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    password: Joi.string().min(8).max(16).regex('/[a-zA-Z]+[@#.,-_]{1,}/').required(),
    mobileNumber: Joi.string().mobileNumber(),
    email: Joi.string()
        .email({minDomainSegments: 2, tlds: {allow: ['com', 'net']}})
        .required(),
})
