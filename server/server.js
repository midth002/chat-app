const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 3001

const router = require('./router');

const app = express();
const server = http.createServer(app);

app.use(router);


const io = socketio(server);

server.listen(PORT, () => console.log(`server has started on port ${PORT}`));