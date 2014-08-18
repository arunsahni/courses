var path = require('path');
var rootPath = path.normalize(__dirname +'/../../');
module.exports = {
    development: {
        db: 'mongodb://localhost/activities',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
        db: 'mongodb://arun:admin@ds053429.mongolab.com:53429/activities',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }

}
