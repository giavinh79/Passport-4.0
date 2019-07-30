const app = require('express')();
const bodyParser = require('body-parser');
const http = require('http').createServer(app);
const io = require('socket.io')(http);

let globalSockets = {};

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.header('Access-Control-Allow-Credentials', 'true');
     next(); 
});

app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));
app.use(bodyParser.json());

io.on('connection', function (socket) {
    console.log(socket.id)
    globalSockets[socket.id] = socket;
});

app.post('/scan', (req, res) => {
    const image = req.body.image;
    const id = req.body.socketId;
    socket = globalSockets[id];
    socket.emit('image', image);
    res.send('Success');
})

const port = process.env.PORT || 5000;
http.listen(port, () => {
    console.log('Listening on port ' + port);
});
