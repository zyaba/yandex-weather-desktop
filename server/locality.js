var request = require('request'),
    config = require('./config'),
    url = require('url');

function getGeoid(array, callback) {
    var lon = array[0];
    var lat = array [1];
    var uri = url.format({
        protocol: 'http',
        hostname: config.uri,
        pathname: 'geocode',
        query: {
            coords: lon + ',' + lat
        }
    });
    request.get(
        {
            uri: uri,
            json: true
        },
        function (error, response, data) {
            
            if (!error && response.statusCode == 200) {
                callback(data);
            }
        });
};

module.exports = getGeoid;
