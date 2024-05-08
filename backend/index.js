require("dotenv").config();
const path = require("path");
const express  = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const authRoutes = require("./routes/auth_routes.js");
const messageRoutes = require("./routes/message_routes.js");
const userRoutes = require("./routes/user_routes.js");


const connnectToMongoDB = require('./db/connectToMogoDb.js');
const {app ,server} = require("./socket/socket.js");


const PORT = process.env.PORT;
// const __dirname = path.resolve();


//middleware
app.use(express.json());
app.use(cookieParser());


app.use('/api/auth' ,authRoutes);
app.use('/api/messages' ,messageRoutes);
app.use('/api/users' ,userRoutes);

// for deploying purpose............

app.use(express.static(path.join(__dirname ,"/frontend/dist")));

app.get("*" ,(req,res) =>{
    res.sendFile(path.join(__dirname , "frontend" ,"dist" ,"index.html"))
})
// ...........................

// route
app.get("/" , (req,res)=>{
    res.send("hello");
})


server.listen(PORT , (req,res)=>{
    connnectToMongoDB();
    console.log(`Listening to port no. ${PORT}`);
})