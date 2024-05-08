import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeletons";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {

  const {loading, messages} = useGetMessages();
  // listen for incoming messages....
  useListenMessages();
  const lastMessageRef = useRef();
  console.log("messages: ",messages);

  useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);


  return (
    <div className="px-4 flex-1 overflow-auto">

      {!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key ={message._id} ref={lastMessageRef}>
            <Message  message={message} />
          </div>
				))}

      {/* these Array(3) calling skelton function 3 times. */}
      {loading && [...Array(3)].map((_,idx) =>
        <MessageSkeleton key ={idx} />
      )}
      {!loading && messages.length === 0 && (
        <p className="text-center text-white">Send a message to start a conversation</p>
      )}
    </div>
    
  )
}

export default Messages
