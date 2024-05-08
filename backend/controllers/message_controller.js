
const Conversation = require("../models/conversation_model");
const Message = require("../models/message_model");
const { getReceiverSocketId, io } = require("../socket/socket");

const sendMessage  = async(req,res)=>{

    try{

        const {message} = req.body;
        const {id:receiverId} = req.params; // taking req.params value to id and assigning to "receiverId"
        const senderId = req.user._id; // why userId beacuse in generating token it is signed and assigned as "userId" which ultimately give user's  "_id"

        let conversation = await Conversation.findOne({
            participants: {$all :[senderId,receiverId]},
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId,receiverId],
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        // SOCKET IO FUNCTIONALITY WILL GO HERE....
        const receiverSocketId = getReceiverSocketId(receiverId);

        if(receiverSocketId){
            // io.to(<socket_id>).emit is used to send events specific client.
            io.to(receiverSocketId).emit("newMessage" ,newMessage);
        }


        // await conversation.save();
        // await newMessage.save();

        //  THESE 2 LINES RUN IN PARALLEL....
        await Promise.all([conversation.save() ,newMessage.save()])

        res.status(201).json(newMessage);
    }
    catch(error){
        console.log("error in sendMessage controller", error.message);
        res.status(500).json({error:"Internal server error"});
    }
}
const getMessage = async(req,res)=>{

    try{

        const {id:userTochatId} =req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants:{$all: [senderId ,userTochatId] },
        }).populate("messages"); //NOT REFERENCES BUT ACTUAL MESSAGES...

        if(!conversation){
            return res.status(200).json([]);
        }
        const messages = conversation.messages;

        res.status(200).json(messages);

    }
    catch(error){
        console.log("error in getMessage controller", error.message);
        res.status(500).json({error:"Internal server error"});
    }
}


module.exports = {sendMessage ,getMessage};