import { useState,useRef,useEffect } from 'react'
import {Chatbot}  from 'supersimpledev'
    
import './App.css'



 function ChatInput({chatMessages,setChatMessages}){
 const [inputText,setInputText]= useState('');

  function saveInputText(event){
   setInputText( event.target.value)

  }
  //implemented self
  function sendMessageenter(e)
  {
    if(e.key==='Enter')
  {
    sendMessage();
  }
      if (e.key === "Escape") {
      setInputText("")


      }
  }

  function sendMessage()
  {
    const newChatMessages=[
          ...chatMessages,{
            message:inputText,
            sender:'user',
            id:crypto.randomUUID()
          }
        ]
  
   setChatMessages(newChatMessages );
     const response= Chatbot.getResponse(inputText);
     
   setChatMessages(
        [
          ...newChatMessages,{
            message:response,
            sender:'robot',
            id:crypto.randomUUID()
          }
        ]
      )
     
      setInputText('')
  }

  return (
  <div className="chat-input-container">
     <input 
      placeholder="Send A message to chatbot"     size="30"
      onChange={saveInputText}
      className="chat-input"
     

      onKeyDown={sendMessageenter}
      value={inputText}
     /> 
     <button
     className="send-button"
     onClick={sendMessage}
     >Send </button>
  </div>
)
 }
 function ChatMessage({message,sender})
 {
// const message= props.message;
// const sender=props.sender;
//shortcut
// const{message,sender}=props;//destruturing

// if(sender==='robot')
// {
// return(
// <div>
  
//   <img src="robot.png" width="50"/>
//     {message}
// </div>
// );

// }

  return(
<div className={sender==='user'?'chat-message-user':'chat-message-robot'}>

  {sender==='robot'&& 
  (<img src="robot.png"className="chat-message-profile" />)}
<div className="chat-message-text">
  {message}
  
  </div>
    
     {sender==='user'&&
      (<img src="user.png"className="chat-message-profile" />)}
 

</div>
  );
 }

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






 function App()
 {

   const [chatMessages,setChatMessages]=useState(

    [{
    message:'hello chatbot',
    sender:'user',
    id:'id1'
  },{
    message:"Hello! How can I help you?" ,
    sender:"robot",
    id:'id2'
  },{
    message:"can you get me today date",
     sender:"user",
    id:'id3'

  },{
     message:"Today is August 20",
      sender:"robot",
      id:'id4'
    }]);
// const [chatMessages,setChatMessages]=array
//  const chatMessages= array[0]; //current data
//  const setChatMessages=array[1]//updater function
 
 
  return(
     <div className="app-container"> 
      
         
       
       
        <ChatMessages
        chatMessages={chatMessages}
        />

         <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
        />
      </div>

  );
 }
    

export default App
