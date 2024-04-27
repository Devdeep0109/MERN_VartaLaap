const bcrypt = require("bcryptjs");
const User = require("../models/user_model"); // Correct casing for User model
const { generateTokenAndSetCookie } = require("../utils/generateToken");


const signup = async(req,res)=>{
    
    try{
        const {fullName, username ,password,confirmPassword, gender} = req.body;

        if(password != confirmPassword){
            return res.status(400).json({error: "Password doesnot matches confirm Password"});
        }

        const user  = await User.findOne({username});

        if(user){
            return res.status(400).json({error:"username already exists"});
        }

        // HASHED PASSWORD
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password ,salt);

        const boyprofilePic =  `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlprofilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        // adding data to database........
        
        const newUser = await User({
            fullName: fullName,
            username: username,
            password:hashedpassword,
            gender,
            profilePic : gender === "male" ? boyprofilePic : girlprofilePic,
        })
        
        if(newUser){
            //GENERATE JWT TOKEN
            await generateTokenAndSetCookie(newUser._id ,res); 
            await newUser.save();

            res.status(201).json({
                _id:newUser._id,
                fullName : newUser.fullName,
                username : newUser.username,
                profilePic : newUser.profilePic,
            })
        }
        else{
            res.status(400).json({error:"Invalid user data"})
        }
       
    }

    catch(error){
        console.log("error in signup controller" ,error.message);
        res.status(500).json({error:"Internal server error"})
    }
}

const login = async(req,res)=>{

    try{
        const {username ,password} =req.body;
        const user = await User.findOne({username});

        // console.log(user);
        const isPasswordCorrect = await bcrypt.compare(password , user?.password || "");

        // console.log(isPasswordCorrect);
        if(!user || !isPasswordCorrect){

            return res.status(400).json({error:"Invalid Username or Password"});
        }
        //GENERATE THE TOKEN.
        generateTokenAndSetCookie(user._id ,res);

        res.status(200).json({
            _id:user._id,
            fullName : user.fullName,
            username : user.username,
            profilePic : user.profilePic,
        })
    }
    catch(error){
        console.log("error in Login controller" ,error.message);
        res.status(500).json({error:"Internal server error"})
    }
}

const logout = (req,res)=>{
    
    try{
        res.cookie("jwt" ,"",{maxAge:0});
        res.status(200).json({error:"Logout Successfully"});
    }
    catch(error){
        console.log("error in signup controller" ,error.message);
        res.status(500).json({error:"Internal server error"})
    }
}

module.exports = {signup , login ,logout}
