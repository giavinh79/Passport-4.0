const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');

const app = express();

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.use('/api', routes); 

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Listening on port ' + port);
});
