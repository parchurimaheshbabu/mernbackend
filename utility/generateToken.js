const jwt = require('jsonwebtoken');

function  generateToken(payload, secretKey, expiresIn) {
    const token = jwt.sign(payload, secretKey, {expiresIn});
    return token;
}

module.exports = generateToken;


// json web token has 3 parts: 
// 1. header // ok
// 2. payload
// 3. signature

// xxxx.yyyy.zzzz

// header 

// 2 parts

// {
//     "alg" : "hs256, hs384, hs512, RS256, RS384, RS512, ES256, ES384, ES512",
//     "type" : "jwt" // type of token we want to use
// }

// payload

// claims

// statements about the user 

// like name, email, phone, role, etc ---> registered claims

// defined by users of jwt --> public claims to avoid collisions

// private claims --> custom claims created to share information 

// {
//     "sub" : "xxxx",
//     "name" : "xxxx",
//     "email" : "xxxx",
//     "phone" : "xxxx",
//     "role" : "xxxx",
//     "exp" : "xxxx"
// }

// signatures verify these 3 parts

// data integrity, confidentiality, and authenticity

// data is not modified in transit,
// data is not viewed by any,
// data is sent really by the user but not by middleman







// /json web taken has 3 parts:
// 1. header // ok
// 2. payload
// 3. signature
// /xxxx.yyyy.zzzz 2222