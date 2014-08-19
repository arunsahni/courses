var mongoose = require('mongoose');

module.exports = function(config){
    mongoose.connect(config.db);
    var db =mongoose.connection;
    db.on('error',console.error.bind(console,'connection error...'));
    db.once('open',function callback(){
        console.log("Mongodb is connected");
    });

    var userSchema = mongoose.Schema({
        firstName: String,
        lastName: String,
        username: String
    });

    var User = mongoose.model('User',userSchema);

    User.find({}).exec(function(err, collection){
        if(collection.length == 0){
            User.create({firstName: 'arun',lastName: 'sahni',username: 'sahni'});
            User.create({firstName: 'pink',lastName: 'hand',username: 'pinkhand'});
        } else {
            console.log("collection",collection);
        }
    })

}
