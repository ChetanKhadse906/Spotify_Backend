// In this middleware we are checking user's validation means, while doing Registration user has given valid Credentials or not If not then validation error
const {body, validationResult}=require('express-validator')

const userRegisterValidationRules=[

    body("username")
        .isString()
        .withMessage("Username must be a String")
        .isLength({min:3, max:25})
        .withMessage("Username must be between 3 and 25 characters"),
    
    body("email")
        .isEmail()
        .withMessage("Invalid email address"),

    body("password")
        .isLength({min:6})
        .withMessage("Password must be at least 6 characters long"),

        validateResult
]

async function validateResult(req, res, next)
{
    const errors=validationResult(req);

    if(!errors.isEmpty())
    {
        return res.status(400).json({

            Errors: errors.array()
        })
    }

    next();
}

module.exports={userRegisterValidationRules};

