
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [socket, setWebsocket] = useState();

  const inputRef = useRef();

  const handleSendMessage = () =>{
    if(!socket) return;

    // const message = inputRef.current.value;

    // socket.send(message);

    //@ts-ignore
    socket.send("ping");
  }

  useEffect(()=>{
    const ws = new WebSocket('ws://localhost:8080')
    setWebsocket(ws)
    ws.onmessage = (message) => {
      console.log('Message received:', message.data)
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
