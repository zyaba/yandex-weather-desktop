var geolocation = (function () {
    
    var getGeoCoords = function(success) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {                
                if (success && typeof(success) === "function") {
                    success(position);
                }                
            }, function(error) {
                var msg = "Unknown Error";
                switch(error.code) {
                    case error.PERMISSION_DENIED:
                        msg = "User denied the request for Geolocation."
                        break;
                    case error.POSITION_UNAVAILABLE:
                        msg = "Location information is unavailable."
                        break;
                    case error.TIMEOUT:
                        msg = "The request to get user location timed out."
                        break;
                    case error.UNKNOWN_ERROR:
                        msg = "An unknown error occurred."
                        break;
                }
                
            });
            
        }        
    }
    
    return {
        getGeoId: function() {
            getGeoCoords(function(result) {
                var geoObj = null;
                if (result && result.coords) {
                    var position = [ result.coords.latitude, result.coords.longitude ];
                    //call get geoid server
                    geoObj = getGeoid([  result.coords.longitude, result.coords.latitude ], function(id) {
                        geoObj = id;
                    });
                    
                }
                return geoObj;
            });
            return "Start getGeoId";
        }
    }
})()