var express = require('express');
//var path = require('path');
var server = express();

var bodyParser = require("body-parser");
server.use(bodyParser.urlencoded({extended:true}));

//server.set('views', path.join(__dirname, 'views'));

server.set('view engine', 'ejs');
server.use(express.static('public'));

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

/* ======================================================== */
var session         = require('express-session');
var passport        = require('passport');
var LocalStrategy   = require('passport-local').Strategy;
var connection      = require('./dbconn');
var ppStrats        = require('./config/passport')  /* strategies */

server.use(session({ secret : "teamxv3",
            resave : false,
            saveUninitialized : false
}));
server.use(passport.initialize()); /* use this middleware */
server.use(passport.session());
ppStrats(passport);
/* ======================================================== */

server.get('/', function(req,res) {
    res.render("index");
});

server.get('/teacher', function(req,res) {
    res.render("teacher");
});

server.get('/formi', function(req,res) {
    res.render("form");
});

var userRoute   = require("./routes/user");
server.use(userRoute);

server.listen(8080,console.log("Hi, i have started"));