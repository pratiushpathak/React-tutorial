import { useRef,useEffect } from 'react'
import { ChatMessage } from './ChatMessage';
 function ChatMessages({chatMessages})
{
 const chatMessagesref= useRef(null);

 useEffect(()=>{
 const containerElem= chatMessagesref.current;
 if(containerElem)
 {
  containerElem.scrollTop=containerElem.scrollHeight;
 }
  },[chatMessages]);


  


    return(
      <div className="chat-messages-conatiner"
      ref={chatMessagesref}
      >
    
    {chatMessages.map((chatMessage)=>{
    return(
          <ChatMessage 
          message={chatMessage.message}
          sender={chatMessage.sender}
          key={chatMessage.id}
          />
    )
    })}
    </div>
  );
}

export default ChatMessages;