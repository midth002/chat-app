const express = require('express');
const { Server } = require('socket.io');
const http = require('http');
const cors = require('cors');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users')

const PORT = process.env.PORT || 3001

const app = express();

const router = require('./router');

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    },
});



app.use(router);


io.on('connection', (socket) => {
   
    socket.on('join', ({name, room}, callback) => {
       const { error, user } = addUser({id: socket.id, name, room});
        if(error) {
          return callback(error);
        }

        socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the room ${user.room}`})
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!`})
        socket.join(user.room);

        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', { user: user.name, text: message })

        callback();
    })

    socket.on('disconnect', () => {
        console.log('User has left.')
    })
})

server.listen(PORT, () => console.log(`server has started on port ${PORT}`));