var mongoose = require('mongoose'),
    crypto = require('crypto');

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
        username: String,
        salt: String,
        hashed_pwd: String,
        roles: [String]
    });

    userSchema.methods = {
        authenticate: function(passwordToMatch){
            return hashedPwd(this.salt, passwordToMatch) === this.hashed_pwd;
        }
    }
    var User = mongoose.model('User',userSchema);

    User.find({}).exec(function(err, collection){
        if(collection.length == 0){
            var salt,hash;
            salt = createSalt();
            hash = hashedPwd(salt,'sahni');
            User.create({firstName: 'arun',lastName: 'sahni',username: 'sahni', salt: salt, hashed_pwd: hash, roles: ['admin']});

            salt = createSalt();
            hash = hashedPwd(salt,'pinkhand');
            User.create({firstName: 'pink',lastName: 'hand',username: 'pinkhand', salt: salt, hashed_pwd: hash, roles: []});
        } else {
            console.log("collection",collection);
        }
    })

}

function createSalt(){
    return crypto.randomBytes(128).toString('base64');
}

function hashedPwd(salt, pwd){
    var hmac = crypto.createHmac('sha1',salt);
    return hmac.update(pwd).digest('hex');
}
