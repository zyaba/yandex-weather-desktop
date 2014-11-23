module.exports.getGeoid = getGeoid;

var request = require('request');

function getGeoid(array, callback) {
	var lon = array[0];
	var lat = array [1];
	var uri = 'http://ekb.shri14.ru/api/geocode?coords=' + lon + ',' + lat;

	request.get(
		{
			uri:uri,
			json: true
		},
		function (error, response, body) {
			if (!error && response.statusCode == 200) {
			    callback(body.geoid);
		}
	});
}