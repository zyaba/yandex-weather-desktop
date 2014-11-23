exports.index = function(req, res){
    var path = require('path');
    var file = path.resolve(__dirname+'../../../dist/index.html');
    res.sendFile(file);
};

exports.locality = function(req, res){
    var q = req.query;
    require('../locality.js').getGeoid([q.longitude, q.latitude], console.log.bind(console))
};
