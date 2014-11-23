module.exports.getCities = getCities;

var request = require('request');

function getCities(geoid, callback) {
	var uri = 'http://ekb.shri14.ru/api/localities/' + geoid + '/cities';

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