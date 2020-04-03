require('dotenv').config()
var bodyParser = require('body-parser')
var express = require('express')
var app = express()

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/wbdv-online-sp20-server-legendu-node/whiteboard-cs5610-sp20');
// mongoose.connect('mongodb://localhost:27017/whiteboard-cs5610-sp20', { useNewUrlParser: true, useUnifiedTopology: true })

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(function (req,res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

require('./controllers/questions.controller.server')(app)
require('./controllers/quizzes.controller.server')(app)
require('./controllers/quiz-attempts.controller.server')(app)


app.get('/', function (req, res) {
    res.send('hello world')
})

app.listen(process.env.PORT || 3000)
