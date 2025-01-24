
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [socket, setWebsocket] = useState();

  

  const handleSendMessage = () =>{
    if(!socket) return;
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
      <input type='text' placeholder='Write Message'>
      </input>
      <button onClick={handleSendMessage}>Send</button>
    </div>
      
    </>
  )
}

export default App
