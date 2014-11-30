var GeoAPI = (function () {
    var MOSCOW_ID = 213;
    return {
        getGeoId: function() {
            var promise = $.Deferred();
            var weather = null;
            if ('localStorage' in window && window['localStorage'] !== null) {
                weather = JSON.parse(window.localStorage.getItem ("yaWeather")) || {};
            }
            
            if (weather && weather.cities) {
                var city = weather.cities.filter(function(object, i) {
                    return object.last == true;
                })[0];
                promise.resolve(city.id);
                
            } else {            
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function(position) {                
                        if (position && position.coords) {
                            $.get( "/locality", { latitude: position.coords.latitude, longitude: position.coords.longitude}).done(function( data ) {
                                if (weather) {
                                    if (!weather.cities) weather.cities = [];
                                    var inArray = false;
                                    weather.cities.map(function(object, i) {
                                        object.last = false;
                                        if (object.id == data.geoid) {object.last = true; inArray = true;}
                                    })
                                    if (!inArray) {
                                        weather.cities.push({id: data.geoid, last: true})
                                    }
                                    
                                    window.localStorage.setItem("yaWeather",JSON.stringify(weather));
                                }
                                

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
            }
            
            return promise.promise();
        }
    };
})();
