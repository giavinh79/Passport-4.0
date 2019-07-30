const app = require('express')();
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.header('Access-Control-Allow-Credentials', 'true');
    // res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
     next(); 
});

app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    type: 'application/json'
}));
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.use('/api', routes); 

io.on('connection', function (socket) {
    console.log('a user connected');
});

const port = process.env.PORT || 5000;
http.listen(port, () => {
    console.log('Listening on port ' + port);
});
