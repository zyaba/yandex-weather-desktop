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
		displayKey: 'name'
	});
    input.parents('form').on('submit', function(e) {
        e.preventDefault();
        if (geoid) {
            location.pathname = '/' + geoid;
        }
    });
    input.on('typeahead:selected', function(e, data) {
        geoid = data.geoid;
    });
    input.on('typeahead:autocompleted', function(e, data) {
        geoid = data.geoid;
    })
})
