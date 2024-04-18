import React from "react"
import Header2 from "./Header2"
import './Chats.css'
import Chat from './Chat'

function Chats() {
  return (
    <div>
      <Header2 />
      <div className="chats">
        <Chat name="Sarah" message="Hey How are you"
        timestamp="35 minutes ago" profilePic="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=400" />
        <Chat name="Ellen" message="Whats up?" timestamp="55 minutes ago" 
        profilePic="https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=400" />
        <Chat name="Natasha" message="Hola" timestamp="3 days ago" profilePic="https://images.pexels.com/photos/1645668/pexels-photo-1645668.jpeg?auto=compress&cs=tinysrgb&w=400" />
      </div>
    </div>
  )
}

export default Chats