const User = require("../models/user_model"); // Correct casing for User model

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

        const boyprofilePic =  `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlprofilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        console.log("Hello");
        // adding data to database........
        const newuser = await User({
            fullName: fullName,
            username: username,
            password,
            confirmPassword,
            gender,
            profilePic : gender === "male" ? boyprofilePic : girlprofilePic,
        })
        await newuser.save();

        res.status(201).json({
            _id:newuser._id,
            fullName : newuser.fullName,
            username : newuser.username,
            profilePic : newuser.profilePic,
        })
    }

    catch(error){
        console.log("error in signup controller" ,error.message);
        res.status(500).json({error:"Internal server error"})
    }
}

const login = (req,res)=>{
    console.log("Login User");
}

const logout = (req,res)=>{
    console.log("Logout User");
}

module.exports = {signup , login ,logout}
