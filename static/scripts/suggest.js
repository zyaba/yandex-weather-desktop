var dataSourse = new Bloodhound({
    name: 'ya-weather',
    remote: {
        url: 'http://localhost:8080/suggest?query=%QUERY'
    },
    datumTokenizer: function(d) {
    	return d;
    },
    queryTokenizer: function(q) {
    	return Bloodhound.tokenizers.whitespace(q)
    }
})

$(function () {
	dataSourse.initialize();
	$('.city-search__input').typeahead({
		minLength: 1
	},
	{
		source: dataSourse.ttAdapter(),
		displayKey: 'name'
	});
})
