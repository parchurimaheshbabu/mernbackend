const joi = require('joi');

signUpValidator = {
    body: joi.object({
        name: joi.string().min(3).max(30).required(),
        email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        phone: joi.string().pattern(new RegExp('^\\+91[6789][0-9]{9}$')).required(),
        password: joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*.).{12,}$')).required(),
        confirmPassword: joi.ref('password'),
    })
}