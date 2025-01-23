import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

//event handler

wss.on('connection', function(socket){
    console.log('user connected')   
   
    // this is used to listen to the message event from the client
    socket.on('message', (e)=>{

        console.log(e.toString())
        console.log(e.toString().trim()=='ping')

        if(e.toString().trim()=='ping'){
            socket.send('pong')
        }
    })

})