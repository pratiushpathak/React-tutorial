import { useState } from 'react'
import { ChatInput } from './components/Chatinput'
import { Chatbot } from 'supersimpledev';

import ChatMessages from './components/ChatMessages';

import './App.css'
import { useEffect } from 'react';

 function App()
 {
   
     useEffect(() => {
    Chatbot.addResponses({
      'goodbye': 'Goodbye. Have a great day!',
      'give me a unique id': function() {
        return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
      }
    });

  // [] tells useEffect to only run once. We only want to run
  // this setup code once because we only want to add these
  // extra responses once.
  }, []);


   const [chatMessages,setChatMessages]=useState(

    [{
    message:'hello chatbot',
    sender:'user',
    id:'id1',
     time: 1736127291230
  },{
    message:"Hello! How can I help you?" ,
    sender:"robot",
    id:'id2',
     time: 1736127297235
  },{
    message:"can you get me today date",
     sender:"user",
    id:'id3',
     time: 1736727209230

  },{
     message:"Today is August 20",
      sender:"robot",
      id:'id4',
      time: 2736727209239
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
