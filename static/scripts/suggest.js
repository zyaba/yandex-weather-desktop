var dataSourse = new Bloodhound({
    name: 'ya-weather',
    remote: {
        url: '/suggest?query=%QUERY'
    },
    datumTokenizer: function(d) {
    	return d;
    },
    queryTokenizer: function(q) {
    	return Bloodhound.tokenizers.whitespace(q)
    }
})

$(function () {
    var input = $('.city-search__input');
    var geoid;
	dataSourse.initialize();
	input.typeahead({
		minLength: 1
	},
	{
		source: dataSourse.ttAdapter(),
		displayKey: 'name',
        templates: {suggestion:function(data) 
            {
                return '<p style="background-color:' + data.color + '">' + data.name + '<span class="tt-suggestion__span">' + data.temp
                 + '</span></p>'
            }
        }
	});
    input.parents('form').on('submit', function(e) {
        e.preventDefault();
        if (geoid) {
            location.pathname = '/' + geoid;
        }
    });
    input.on('typeahead:selected typeahead:autocompleted', function(e, data) {
        geoid = data.geoid;
    });
});

window.addEventListener('load', function() {
    (function(w, d, n, s, t) {
        w[n] = w[n] || [];
        w[n].push(function() {
            Ya.Context.AdvManager.render({
                blockId: "D-I-106713-4",
                renderTo: "yandex_direct_D-I-106713-4",
                async: true
            });
        });
        t = d.getElementsByTagName("script")[0];
        s = d.createElement("script");
        s.type = "text/javascript";
        s.src = "//an.yandex.ru/system/context.js";
        s.async = true;
        t.parentNode.insertBefore(s, t);
    })(window, document, "yandexContextAsyncCallbacks");
});
