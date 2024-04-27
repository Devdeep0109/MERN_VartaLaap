const jwt  = require("jsonwebtoken");
const User = require("../models/user_model");

const protectRoute = async(req, res, next) =>{

    try{
        
        const token = req.cookies.jwt;
        
        if(!token){
            return res.status(401).json({error:"Un-authorised -no token provided"});
        }

        const decoded = jwt.verify(token ,process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({error:"Un-authorised -Invalid token"})
        }

        const user = await User.findById(decoded.userId).select("-password"); // -password to remove password.

        if(!user){
            return res.status(401).json({error:"user not found"});
        }

        req.user = user;
        console.log("hey protect route is working properly");
        next();
    }
    catch(error){
        console.log("error in ProtectRoute middleware", error.message);
        res.status(500).json({error:"Internal server error"});
    }
}

module.exports = protectRoute;