const User = require("../models/user_model");


const getUserForSideBar = async(req,res)=>{

    try{

        const loggedInUserId = req.user._id;
        // ne == not equal.
        const fileteredUsers = await User.find({id : {$ne: loggedInUserId}}).select("-password"); // these will not add ourself. to do so we have to remove " {id : {$ne: loggedInUserId}} " 

        res.status(200).json(fileteredUsers);
    }
    catch(error){
        console.error("error in getSideBar : " ,error.message);
        res.status(400).json({error:"Internal server error"});
    }
}

module.exports = {getUserForSideBar};