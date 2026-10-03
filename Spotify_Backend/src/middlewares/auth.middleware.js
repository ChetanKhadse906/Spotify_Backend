// Check for Registration
const userModel=require('../model/user.model')
const Bcrypt=require('bcryptjs')

const IsUserExists=async(req, res, next)=>{

    const {username, email}=req.body;

    const isUserAlreadyExists=await userModel.findOne({

        $or: [
            { Username: username },
            { Email: email }
        ]
    })

    if(isUserAlreadyExists)
    {
        return res.status(409).json({

            message: "User already exists with this Email or Username"
        })
    }

    next();
}

// Check for login
const IsUserExistsforLogin=async(req, res, next)=>{

    const{username, email, password}=req.body;

    // first check Is username or email exists in our DB
    const user=await userModel.findOne({

        $or: [
            { Username: username },
            { Email:email }
        ]
    })

    if(!user)
    {
        return res.status(400).json({

            message: "Invalid Credentials, Username/ Email"
        })
    }

    // Now check is Password is correct of user
    const isPasswordValid=await Bcrypt.compare(password, user.Password);

    if(!isPasswordValid)
    {
        return res.status(400).json({

            message: "Invalid Credentials, Wrong Password"
        })
    }

    req.user=user;

    next();

}

module.exports={IsUserExists, IsUserExistsforLogin};

