import { useState } from 'react'
import {Chatbot}  from 'supersimpledev'
import dayjs from 'dayjs';
import './Chatinput.css'

export function ChatInput({chatMessages,setChatMessages}){
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
            id:crypto.randomUUID(),
            time:dayjs().valueOf()
          }
        ]
  
   setChatMessages(newChatMessages );
     const response= Chatbot.getResponse(inputText);
     
   setChatMessages(
        [
          ...newChatMessages,{
            message:response,
            sender:'robot',
            id:crypto.randomUUID(),
             time:dayjs().valueOf()
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