const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const generateToken = require('../utility/generateToken');
const jwt = require('jsonwebtoken');

//Creating a user
exports.signup = async (req, res) => {
    const {name, email, password, phone} = req.body;
    const isEmailExists = await userModel.findOne({email});
    const isPhoneExists = await userModel.findOne({phone});
    if(isEmailExists || isPhoneExists){
        if(isEmailExists && isPhoneExists){
            return res.status(400).json({success: false, message: "Email and Phone number already exists"});
        }
        else if(isEmailExists){
            return res.status(400).json({success: false, message: "Email already exists"});
        }
        else{
            return res.status(400).json({success: false, message: "Phone number already exists"});
        }
    }

    // below code will be executed if the above logic is not satisfied
    // it means we have a new user.
    const hashedPassword = await bcrypt.hashSync(password, 12);

    const newUser = await userModel.insertMany({
        name,
        email,
        password: hashedPassword,
        phone
    });

    const token = generateToken({email}, process.env.JWT_VERIFICATION_KEY, '1h');

    res.status(201).json({success: true, message: "User created successfully", user: newUser});
}

exports.signIn = async (req, res, next) => {
    const {email, password} = req.body;
    const user = await userModel.findOne({email});

    if(!user || !(await bcrypt.compare(password, user.password)) || user.isVerified === false) {
        return res.status(400).json({success: false, message: "Invalid email or password or account is not verified"});
    }

    let token = generateToken({
        userId: user._id,
        userEmail: user.email,
        isDeleted: user.isDeleted,
        isVerified: user.isVerified,
    }, process.env.JWT_VERIFICATION_KEY, '6h');

    await userModel.updateOne({email}, {isVerified: true});

    res.status(200).json({success: true, message: "User logged in successfully"});
}