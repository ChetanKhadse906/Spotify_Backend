require('dotenv').config();
const app=require('./src/app')
const ConnectDB=require('./src/db/db')

const dns=require('dns')
dns.setServers(['8.8.8.8', '1.1.1.1'])

const port=4000;

ConnectDB();

app.listen(port, ()=>{
    console.log("Your server is running on port: " , port);
})

