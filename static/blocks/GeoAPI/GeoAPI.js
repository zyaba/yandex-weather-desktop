var GeoAPI = (function () {
    
    return {
        getGeoId: function() {
            var promise = new Promise(function(resolve, reject) {                
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function(position) {                
                        if (position && position.coords) {
                            $.get( "/locality", { latitude: position.coords.latitude, longitude: position.coords.longitude}).done(function( data ) {
                                console.log(data)
                                resolve(data.geoid);
                            }).fail(function(error) {reject(error)}); 
                            
                        }

                    }, function(error) {
                        var msg = 'Unknown Error';
                        switch(error.code) {
                            case error.PERMISSION_DENIED:
                                msg = 'User denied the request for Geolocation.';
                                break;
                            case error.POSITION_UNAVAILABLE:
                                msg = 'Location information is unavailable.';
                                break;
                            case error.TIMEOUT:
                                msg = 'The request to get user location timed out.';
                                break;
                            case error.UNKNOWN_ERROR:
                                msg = 'An unknown error occurred.';
                                break;
                        }

                    });

                }
            });
            
            return promise;
            
        }
    }
})()
