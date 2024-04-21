const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    fullName:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        minlength:6,
    },
    confirmPassword:{
        type:String,
        required:true,
        minlength:6,
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"]
    },
    profilePic:{
        type: String,
        default:"",
    }
})

const User = mongoose.model("user",userSchema);

module.exports = User;