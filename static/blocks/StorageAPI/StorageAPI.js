
var StorageAPI = (function () {
    var supportStorage = ('localStorage' in window && window['localStorage'] !== null);
    return {
        getItem: function(key) {
            var result = undefined;
            if (supportStorage) {
                result = window.localStorage.getItem("yaWeather")
            } else {
                var matches = document.cookie.match(new RegExp("(?:^|; )" + key.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
                result = matches ? decodeURIComponent(matches[1]) : undefined;
            }
            return result;
        },
        setItem: function(key, val) {
            if (supportStorage) {
                window.localStorage.setItem(key, val);
            } else {
                var options = {};

                var expires = options.expires;

                if (typeof expires == "number" && expires) {
                    var d = new Date();
                    d.setTime(d.getTime() + expires*1000);
                    expires = options.expires = d;
                }
                if (expires && expires.toUTCString) { 
                    options.expires = expires.toUTCString();
                }

                value = encodeURIComponent(val);

                var updatedCookie = key + "=" + value;

                for(var propName in options) {
                    updatedCookie += "; " + propName;
                    var propValue = options[propName];    
                    if (propValue !== true) { 
                        updatedCookie += "=" + propValue;
                    }
                }

                document.cookie = updatedCookie;

            }
        }
    };
})();