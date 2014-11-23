var request = require('request'),
	config = require('./config');

var request = require('request');

function getTemp(array, callback) {
	array = array.join(',');
	var uri = url.format({
	    protocol: 'http',
	    hostname: config.uri,
	    pathname: 'factual',
	    query: {
	        ids: array
	    }
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
}

module.exports = getTemp;