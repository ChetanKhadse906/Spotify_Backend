const jwt=require('jsonwebtoken')

const authArtist=async(req, res, next)=>{

    // take the token from user's cookie
    // There are 3 possiblee conditions
    const token=req.cookies.token;

    // 1. user do not have token, means he is was not logged in
    if(!token)
    {
        return res.status(401).json({

            message: "Unauthenticated, User not logged in"
        })
    }

    try
    {
        // 2. user has token but the token is Incorrect, here error is thrown which is catch
        const decoded= jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded: ", decoded);

        // 3. User has token, it is correct as well but the token is not role specific
        // means only Artist has right to create the music, let's say normal user log in and he has requested to create the music then deny
        
        if(decoded.Role !== "Artist")
        {
            return res.status(403).json({

                message: "Unauthorize, You do not have right to create music "

            })
        }

        req.user=decoded;
        next();

    }
    catch(err)
    {
        // 2. User has token, but it is Invalid
        return res.status(401).json({

            message: "Unauthenticated, Invalid token"
        })
    }
}

// allow only normal user or Aritst to get all the musics at onces
const authUser=async(req, res, next)=>{

    // take the token from user's cookies
    const token=req.cookies.token

    // 3 Possibilites
    // 1) User does not have token
    if(!token)
    {
        return res.status(400).json({
            message: "Unauthenticated, User not logged in"
        })
    }

    // verifying user's token with previous token that we have created
    try{
        
        // 2) User has token, but the token is Invalid
        const decoded=jwt.verify(token, process.env.JWT_SECRET);

        // 3) User has token, the token is valid also but user does not have right means no role base token
        if(decoded.Role !== "User" )
        {
            return res.status(403).json({

                message: "Unauthorize, You don't have access"
            })
        }

        req.user=decoded;
        next();
    }
    catch(err)
    {
        console.log("Error: " , err)

        return res.status(400).json({

            message: "Unauthenticated Invalid token"
        })
    }

}


module.exports={authArtist, authUser};
