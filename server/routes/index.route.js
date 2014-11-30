module.exports = function (req, res) {
    var path = require('path');
    var file = path.resolve(__dirname + '../../../dist/index.html');
    res.sendFile(file);
};
