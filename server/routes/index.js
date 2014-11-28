var apiTestData = require("../data.json");

exports.index = function(req, res){
    var path = require('path');
    var file = path.resolve(__dirname+'../../../dist/index.html');
    res.sendFile(file);
};

exports.locality = function(req, res){
    var q = req.query;
    require('../locality.js')([q.longitude, q.latitude], function(data) { res.json(data) })
};
exports.geoid = function(req, res){
    res.render( __dirname + '/../../static/pages/views/index', {
        title: 'Yandex Weather ' + req.params.geoid,
        apiData: apiTestData
    });
};
