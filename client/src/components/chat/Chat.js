import React, {useState, useEffect } from 'react'
import queryString from 'query-string';
import io from 'socket.io-client'; 
import './chat.css';
import { useSearchParams } from 'react-router-dom'

let socket = io.connect("http://localhost:3001");

const Chat = () => {

  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
 

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {

    setName(searchParams.get('name'))
    setRoom(searchParams.get('room'))
    console.log(name, room)
    console.log(socket)

    socket.emit('join', {name, room}, () => {
      
    });

    return () => {
      socket.emit('disconnect');

      socket.off();
    }

  }, [socket, name, room]);
  return (
    <h1>Chat</h1>
  )
}

export default Chat