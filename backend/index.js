require("dotenv").config();
const express  = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const authRoutes = require("./routes/auth_routes.js");
const messageRoutes = require("./routes/message_routes.js");
const userRoutes = require("./routes/user_routes.js");


const connnectToMongoDB = require('./db/connectToMogoDb.js');


const app = express();
const PORT = process.env.PORT;

//middleware
app.use(express.json());
app.use(cookieParser());


app.use('/api/auth' ,authRoutes);
app.use('/api/messages' ,messageRoutes);
app.use('/api/users' ,userRoutes);


// route
app.get("/" , (req,res)=>{
    res.send("hello");
})




app.listen(PORT , (req,res)=>{
    connnectToMongoDB();
    console.log(`Listening to port no. ${PORT}`);
})