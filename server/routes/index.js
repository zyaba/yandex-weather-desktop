
var apiTestData = require("../data.json");

var locality = require('../locality.js'),
	cities = require('../cities-list.js'),
	provinces = require('../provinces-list.js'),
	temp = require('../factual-temp.js'),
	info = require('../locality-info.js'),
	vow = require('vow');

exports.index = function(req, res){
    var path = require('path');
    var file = path.resolve(__dirname+'../../../dist/index.html');
    res.sendFile(file);
};

exports.locality = function(req, res){
	var q = req.query;
    require('../locality.js')([q.longitude, q.latitude]).then(function(data) { 
    	res.json(data) 
    });
};
exports.geoid = function(req, res){
	var q = req.query;
    vow.all([ locality([q.longitude, q.latitude]),
    	cities(req.params.geoid),
    	provinces(req.params.geoid),
    	temp([req.params.geoid]),
    	info(req.params.geoid)
    	]).spread(function(locality, cities, provinces, temp, info) { 
		res.json({ locality: locality,
			cities: cities,
			provinces: provinces,
			temp: temp,
			info: info });
		console.log(locality,
			cities,
			provinces,
			temp,
			info);
	    res.render( __dirname + '/../../static/pages/views/index', {
	        title: 'Yandex Weather ' + req.params.geoid,
	        apiData: apiTestData
	    })
	},
    function(error){
    	console.log('rejected', arguments)
    	res.render( __dirname + '/../../static/pages/views/index', {
	        title: 'Yandex Weather ' + req.params.geoid,
	        apiData: apiTestData
	    })
	    });
};
