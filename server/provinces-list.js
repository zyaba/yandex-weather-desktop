var request = require('request'),
	config = require('./config'),
	url = require('url'),
	vow = require('vow');

function getProvinces(geoid) {
	var deferred = vow.defer();

	var uri = url.format({
	    protocol: 'http',
	    hostname: config.uri,
	    pathname: 'localities' + geoid + 'provinces'
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
}

module.exports = getProvinces;
