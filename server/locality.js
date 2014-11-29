var request = require('request'),
	config = require('./config'),
	url = require('url'),
	vow = require('vow');

/*** Return geo id by latitlude and longitude***/

function getGeoid(array) {
	var deferred = vow.defer();

	var uri = url.format({
	    protocol: 'http',
	    hostname: config.uri,
	    pathname: 'geocode',
	    query: {
	        coords: array.join()
	    }
	});
    
	request.get({
		uri:uri,
		json: true
	}, function (error, response, data) {
		if (!error) {
            if (response.statusCode !== 200) {
                data = {
                  "geoid": 213,
                  "name": "Москва"
                }
            }
		    deferred.resolve(data);
		} else {
			deferred.reject();
		}
	});

	return deferred.promise();
};

module.exports = getGeoid;