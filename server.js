var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser');
    mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'developement',
    app = express();

function compile(str, path){
    return stylus(str).set('filename',path);
}

app.set('views',__dirname + '/server/views');
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser());

app.use(stylus.middleware(
    {
        src: __dirname + '/public',
        compile: compile
    }
));

app.use(express.static(__dirname + '/public'));

if(env === 'developement'){
    mongoose.connect('mongodb://localhost/activities');
} else {
    mongoose.connect('mongodb://arun:admin@ds053429.mongolab.com:53429/activities');
}

var db =mongoose.connection;
db.on('error',console.error.bind(console,'connection error...'));
db.once('open',function callback(){
    console.log("Mongodb is connected");
});
var messageSchema = mongoose.Schema({message : String});
var Message = mongoose.model('Message',messageSchema);
var mongoMessage;
Message.findOne().exec(function(err,messageDoc){
    mongoMessage = messageDoc.message;
});

app.get('/partials/:partialPath',function(req,res){
    res.render('partials/' + req.params.partialPath);

});

app.get('*',function(req,res){
    res.render('index',
        {mongoMessage : mongoMessage});
});

var port = process.env.PORT || 3030;
app.listen(port);
console.log("Listening port", port);

