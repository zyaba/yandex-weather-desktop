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
	dataSourse.initialize();
	input.typeahead({
		minLength: 1
	},
	{
		source: dataSourse.ttAdapter(),
		displayKey: 'name'
	}).parent('form').on('submit', function(e) {
        e.preventDefault();
    });
})
