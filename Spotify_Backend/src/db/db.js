// connecting Backend with MongoDB database with the help of mongoose package
const mongoose=require('mongoose')

const ConnectDB=async()=>
{
    try
    {
        mongoose.connect(process.env.MONGO_URI);

        console.log("Connected to DB")
    }
    catch(err)
    {
        console.log("Unabe to connect with DB: ", err);
    }
    
}

module.exports=ConnectDB;
