const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

let globalSockets = {};

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next()
});

app.use(bodyParser.urlencoded({
    limit: '100mb',
    extended: true
}));
app.use(bodyParser.json({
    limit: '100mb'
}));

io.on('connection', function (socket) {
    console.log(socket.id)
    globalSockets[socket.id] = socket;
});

app.post('/scan', (req, res) => {
    console.log(req.body)
    const image = req.body.image;
    const id = req.body.socketId;
    socket = globalSockets[id];
    if (socket) {
        socket.emit('image', image);
        res.send('Success');
    }

})

app.use(express.static(path.join(__dirname, 'build_client')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build_client', 'index.html'));
});

const port = process.env.PORT || 5000;
http.listen(port, () => {
    console.log('Listening on port ' + port);
});
