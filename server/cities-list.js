var request = require('request'),
	config = require('./config');

function getCities(geoid, callback) {
	var uri = path.join(config.uri, 'localities', geoid, '/cities');

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
