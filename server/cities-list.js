var request = require('request'),
	config = require('./config'),
	url = require('url');

function getCities(geoid, callback) {
	var uri = url.format({
	    protocol: 'http',
	    hostname: config.uri,
	    pathname: 'localities' + geoid + 'cities'
	});

	request.get(
		{
			uri:uri,
			json: true
		},
		function (error, response, data) {
			if (!error && response.statusCode == 200) {
			    callback(data);
		}
	});
};

module.exports = getCities;
