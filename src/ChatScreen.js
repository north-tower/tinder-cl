import React, {useState} from 'react';
import Header2 from './Header2'
import './ChatScreen.css'
import Avatar from '@mui/material/Avatar';


function ChatScreen() {
  const [messages, setMessages] =useState([
    {
      name: 'Ellen',
      image: 'https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg',
      message: 'Whats up?'
    },
    {
      name: 'Ellen',
      image: 'https://images.pexels.com/photos/1544376/pexels-photo-1544376.jpeg',
      message: 'How is it going?'
    },
    {
      
      message: 'Whats up?'
    }
  ])

  return (
    <>
    <Header2 />

    <div className="chatScreen">
      <p className="chatScreen__timestamp">YOU MATCHED WITH ELLEN ON 18/04/2024</p>
      {messages.map((message) => 
      message.name ? 
      (
        
        <div className="chatScreen__message">
          <Avatar className="chatScreen__image" alt={message.name} src={message.image} />
          <p className="chatScreen__text">{message.message}</p>
          </div>
      ) : (
        <div className="chatScreen__message">
          <p className="chatScreen__textUser">
            {message.message}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default ChatScreen;
