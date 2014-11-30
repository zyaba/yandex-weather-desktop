var request = require('request'),
    urlsConfig = require('../configs/urls'),
	url = require('url'),
	vow = require('vow');

function getCities(geoid) {
	var deferred = vow.defer();

	var uri = url.format({
	    protocol: 'http',
	    hostname: urlsConfig.api,
	    pathname: ['localities', geoid, 'cities'].join('/')
	});


	request.get({
		uri:uri,
		json: true
	}, function (error, response, data) {
		if (!error && response.statusCode == 200) {
		    deferred.resolve(data);
		} else {
			deferred.reject();
		}
	});

	return deferred.promise();
};

module.exports = getCities;
