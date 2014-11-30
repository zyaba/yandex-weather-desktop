var request = require('request'),
    urlsConfig = require('../configs/urls.config'),
    suggestConfig = require('../configs/suggest.config.js'),
	url = require('url'),
	vow = require('vow');
	temp = require('../helpers/factual.temp.helper.js'),
	colors = require('../configs/colors.config.js');

function suggest(q) {
	var deferred = vow.defer();

	var uri = url.format({
		protocol: suggestConfig.protocol,
	    hostname: urlsConfig.api,
	    pathname: suggestConfig.path,
	    query: q
	});
	request.get({
		uri:uri,
		json: true
	}, function (error, response, data) {
		//[{name, geoid}]
		if (!error) {
			data = data.slice(0,3);
			var geoids = data.map(function(d) {
				return d.geoid
			});
			temp(geoids).then(function(tempdata){
				tempdata.forEach(function(d) {
		    		if (d.temp > 0) {
		    			d.temp = '+' + d.temp;
		    		}
		    		else {
		    			d.temp = String(d.temp);
		    		}
					d.color = colors[d.temp];
				});
		    	deferred.resolve(tempdata); 
			});
		} else {
			deferred.reject();
		}
	});

	return deferred.promise();
};

module.exports = suggest;
