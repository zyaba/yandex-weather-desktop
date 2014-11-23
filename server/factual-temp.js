var request = require('request'),
	config = require('./config');

var request = require('request');

function getTemp(array, callback) {
	var uri = path.join(config.uri, '/factual?ids=', array.join(','));

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