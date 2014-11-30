var request = require('request'),
    urlsConfig = require('../configs/urls.config'),
	url = require('url'),
	vow = require('vow');

var request = require('request');

function getTemp(array) {
	var deferred = vow.defer();

	var uri = url.format({
	    protocol: 'http',
	    hostname: urlsConfig.api,
	    pathname: 'factual',
	    query: {
	        ids: array.join(',')
	    }
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

module.exports = getTemp;
