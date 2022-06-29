const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/airline-assignments', {
    useNewUrlParser: true,
    keepAlive: true,
    connectTimeoutMS: 6000000
}).then(() => {
    console.log('Connection to Database Successful');
}).catch((err) => {
    console.error(err);
});

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, "static")))
app.use(session({ secret: 'cats' }))
// JSON Parsing
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-with, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
}));

// Require routes
const airlinesRoutes = require('./app/routes/airlines.routes');
const usersRoutes = require('./app/routes/users.routes');

// Use routes
app.use('/v1/airlines', airlinesRoutes);
app.use('/v1/users', usersRoutes);

const server = http.createServer(app);
server.listen(port, () => {
    console.log("App Run ..........")
})