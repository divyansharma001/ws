import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

//event handler

wss.on('connection', function(socket){
    console.log('user connected')   
    setInterval(()=>{
     socket.send("Current price of bitcoin is " + Math.random());
    }, 500)
     
    // this is used to listen to the message event from the client
    socket.on('message', (e)=>{
        console.log(e.toString());
    })

})