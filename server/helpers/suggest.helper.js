var request = require('request'),
    urlsConfig = require('../configs/urls.config'),
    suggestConfig = require('../configs/suggest.config.js'),
	url = require('url'),
	vow = require('vow');

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
		if (!error) {
		    deferred.resolve(data);
		} else {
			deferred.reject();
		}
	});

	return deferred.promise();
};

module.exports = suggest;
