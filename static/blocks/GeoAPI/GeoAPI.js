var GeoAPI = (function () {
    var MOSCOW_ID = 213;
    return {
        getGeoId: function() {
            var promise = $.Deferred();
            
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {                
                    if (position && position.coords) {
                        $.get( "/locality", { latitude: position.coords.latitude, longitude: position.coords.longitude}).done(function( data ) {
                            promise.resolve(data.geoid);
                        }).fail(function(error) {promise.resolve(MOSCOW_ID);});
                    } else {
                        promise.resolve(MOSCOW_ID);
                    }

                }, function(error) {
                    promise.resolve(MOSCOW_ID);
                });

            } else {
                promise.resolve(MOSCOW_ID);
            };
            
            return promise.promise();
        }
    };
})();
