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
})
