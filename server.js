var express = require('express');
var mongoose = require('mongoose');
//var database = require('./config/database');
//var config = require('./config/tripipal');
 
var app = express();
require('./routers/index')(app);

app.listen(3000);
console.log('Listening on port 3000...');
