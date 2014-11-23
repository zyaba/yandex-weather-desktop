var request = require('request'),
	config = require('./config');

var request = require('request');

function getInfo(geoid, callback) {
	var uri = path.join(config.uri, '/localities/', geoid);

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

module.exports = getInfo;