
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [socket, setWebsocket] = useState(); //created this state to store the websocket connection and use it

  const inputRef = useRef();

  const handleSendMessage = () =>{
    if(!socket) return;

    const message = inputRef.current.value;

    //@ts-ignore
    socket.send(message);
  
  }

  useEffect(()=>{
    const ws = new WebSocket('ws://localhost:8080') //create a new websocket connection
    setWebsocket(ws)
    ws.onmessage = (message) => {
      console.log('Message received:', message.data)
    }
    ws.onerror = (error) => {
      console.log('Error:', error)
    }
   }, [])

  
  return (
    <>
    <div>
      <input ref={inputRef} type='text' placeholder='Write Message'>
      </input>
      <button onClick={handleSendMessage}>Send</button>
    </div>
      
    </>
  )
}

export default App
