let express = require('express');
let socket = require('socket.io');
const port = 4000;

let app = express();

let server = app.listen(port, ()=> {
    console.log('escuchando puerts');
});

app.use(express.static('public'));

var io = socket(server);

io.on('connection', socket => {
    console.log('conexion de socket', socket.id);

    socket.on('chat', data => {
        io.sockets.emit('chat', data);
    })

    socket.on('typing', data => {
        socket.broadcast.emit('typing', data);
    })
});
