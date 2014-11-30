var vow = require('vow'),
    locality = require('../helpers/locality.helper.js'),
    temp = require('../helpers/factual.temp.helper.js'),
    info = require('../helpers/locality.info.helper.js'),
    cities = require('../helpers/cities.helper.js'),
    provinces = require('../helpers/provinces.helper.js'),
    commonLocale = require('../locales/common.locale');

module.exports = function (req, res) {
    var q = req.query;
    
    vow.all([locality([q.longitude, q.latitude]),
        cities(req.params.geoid),
        provinces(req.params.geoid),
        temp([req.params.geoid]),
        info(req.params.geoid)
    ]).spread(function (locality, cities, provinces, temp, info) {
            res.json({
                locality: locality,
                cities: cities,
                provinces: provinces,
                temp: temp,
                info: info
            });

            res.render(__dirname + '/../../static/pages/views/index', {
                title: commonLocale.pageTitle.replace('{cityid}', req.params.geoid)
            })
        },
        function (error) {
            res.render(__dirname + '/../../static/pages/views/index', {
                title: commonLocale.pageTitle.replace('{cityid}', req.params.geoid)
            })
        });
};
