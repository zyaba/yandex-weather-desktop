var apiTestData = require("../data.json");

var locality = require('../locality.js'),
	cities = require('../cities-list.js'),
	provinces = require('../provinces-list.js'),
	temp = require('../factual-temp.js'),
	info = require('../locality-info.js'),
	vow = require('vow'),
	colors = require('../colors.js'),
	extend = require('node.extend'),
    suggest = require('../suggest.js');

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
exports.suggest = function(req, res){
    var q = req.query;
    suggest(q).then(function(data) { 
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

exports.forecast = function(req, res){
    var geoid = req.params.geoid;
	var q = req.query;
    
    info(geoid).then(function(result) {
        //Short view        
        var short = []        
        result.forecast.map(function(object, i){
            if ( i < 10 ) {
                var day = object.parts[0];
                short[short.length] = {
                    date: object.date,
                    weather: day.weather,
                    weather_icon: day.weather_icon,
                    temp_max: day.temp_max,
                    temp_min: day.temp_min,
                    color_max: colors[day.temp_max],
                    color_min: colors[day.temp_min]
                };
            }
        })
        
        //Full view      
        result.forecast.map(function(object, i){            
            object.parts.map(function(object, i){
                object.color = colors[object.temp];
            })
        })
        
        //Today view
        var todayParts = []        
        result.forecast[0].parts.map(function(object, i){
            if (object.type == "day" || object.type == "evening" || object.type == "night") {
                object.color = colors[object.temp];
                todayParts[todayParts.length] = object;            
            }
        })
        
        //Hourly view
        var hoursSource = (result.forecast[0].hours).concat(result.forecast[1].hours);        
        if (hoursSource.length > 24) {
            hoursSource = hoursSource.slice(-24);
        }
        var hours = [],
            hours_min = 0,
            hours_max = 0;
        hoursSource.map(function(object, i){
            hours_min = object.temp < hours_min ? object.temp : hours_min;
            hours_max = object.temp > hours_max ? object.temp : hours_max;
            hours[hours.length] = {
                temp: object.temp,
                hour: object.hour,
                color: colors[object.temp]
            };
        })
        
        
        var data = {
            info: result.info,
            title: 'Погода ' + result.info.nameprep,
            today: {
                now: extend(true, result.fact, {                
                    sunrise: result.forecast[0].sunrise,
                    sunset: result.forecast[0].sunset,
                    color: colors[result.fact.temp]
                }),
                yesterday: result.yesterday.temp,
                parts: todayParts
            },
            short: short,
            full: result.forecast,
            hourly: {
                hours: hours,
                min: hours_min,
                max: hours_max
            }
        };
                
        res.render( __dirname + '/../../static/pages/views/index', data)
        
    })
    
    /*vow.all(
        //[ locality([q.longitude, q.latitude]),
    	//cities(req.params.geoid),
    	//provinces(req.params.geoid),
    	//temp([req.params.geoid]),
    	info(geoid)
    	]).spread(function(locality, cities, provinces, temp, info) { 
        
		res.json({ locality: locality,
			cities: cities,
			provinces: provinces,
			temp: temp,
			info: info });
		
        
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
	    });*/
};
