var path = require('path');
var rootPath = path.normalize(__dirname +'/../../');
module.exports = {
    development: {
        db: 'mongodb://sahni:sahni@ds029831.mongolab.com:29831/courses',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
        db: 'mongodb://sahni:sahni@ds029831.mongolab.com:29831/courses',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }

}
