var GeoAPI = (function () {
    
    return {
        getGeoId: function() {
            var promise = $.Deferred();
            
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {                
                    if (position && position.coords) {
                        $.get( "/locality", { latitude: position.coords.latitude, longitude: position.coords.longitude}).done(function( data ) {
                            promise.resolve(data.geoid);
                        }).fail(function(error) {promise.reject(error)}); 

                    }

                }, function(error) {
                    promise.resolve(1);
                });

            } else {
                promise.resolve(1);
            };
            
            return promise.promise();
        }
    }
})()
