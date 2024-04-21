require('dotenv').config();
const express  = require("express");
const bodyParser = require('body-parser');


const authRoutes = require("./routes/auth_routes.js");
const connnectToMongoDB = require('./db/connectToMogoDb.js');


const app = express();
const PORT = process.env.PORT;

//middleware
app.use(express.json());
app.use('/api/auth' ,authRoutes);


// route
app.get("/" , (req,res)=>{
    res.send("hello");
})




app.listen(PORT , (req,res)=>{
    connnectToMongoDB();
    console.log(`Listening to port no. ${PORT}`);
})