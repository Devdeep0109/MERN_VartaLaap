
const Message = () => {
  return (
    <div className="chat chat-end ">
        <div className="chat-image avatar ">
            <div className="w-10 rounded-full">
                <img alt="Tailwind CSS chat bubble component" src="" />
            </div>
        </div>

        <div className="chat-bubble text-white chat-bubble-info">You were the Chosen One!</div>
        <div className="chat-footer text-white opacity-50 text-xs flex gap-1 items-center">
            Seen at 12:46
        </div>
      
    </div>
  )
}

export default Message
