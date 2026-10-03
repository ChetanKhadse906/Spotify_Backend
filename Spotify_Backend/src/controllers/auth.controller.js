// Now all the validations is being done 
const Bcrypt=require('bcryptjs')
const userModel=require('../model/user.model');
const jwt=require('jsonwebtoken')

const userRegister=async(req, res)=>{

    const{username, email, password, role}=req.body;

    // first hash user's Confidential Password --> bcryptjs
    const hashPassword=await Bcrypt.hash(password, 10) 

    // Now password is being hashed store User's Credentials in MongoDB Database with hashed Password

    const user=await userModel.create({

        Username: username,
        Email: email,
        Password: hashPassword,
        Role: role
    })

    return res.status(201).json({ 

        message: "User created Successfully",
        
        User:{
            Username: user.Username,
            Email: user.Email,
            Password: user.Password,
            Role: user.Role
        }
    })
}

const userLogin=async(req, res)=>{
    
    // All the checks have being done in the middleware, Now create JWT and store in the user's cookie
    // and give access to the user for login

    const user=req.user;

    // generate JWT 
    const token=await jwt.sign({
        id: user._id,
        Role: user.Role
    },process.env.JWT_SECRET)

    // store token in user cookie--> cookieparser

    res.cookie("token", token);

    return res.status(200).json({

        message: "User login Successfully",
        token
    })
}

const logoutUser=async(req, res)=>{

    res.clearCookie("token");

    return res.status(200).json({

        message: "User log out Successfully"
    })
}

module.exports={userRegister, userLogin, logoutUser};
