const {Schema , model, default: mongoose} = require("mongoose");

const messageSchema = new Schema({

    senderId:{
        type : mongoose.Schema.Types.ObjectId,
        ref :"User",
        required: true
    },
    receiverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User", // refering to userModel name that is "User" 
        required: true
    },
    message:{
        type:String,
        required:true,
    }

} , {timestamps:true});

const Message = model("Message" , messageSchema);

module.exports = Message;