//Same as app = express() = require(express);
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);



app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.use(express.static(__dirname + '/public'));


io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
});


http.listen(3000, function(){
    console.log('Listening on *:3000');
});