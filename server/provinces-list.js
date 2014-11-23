module.exports.getProvinces = getProvinces;

var request = require('request');

function getProvinces(geoid, callback) {
	var uri = 'http://ekb.shri14.ru/api/localities/' + geoid + '/provinces';

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