var locality = require('../helpers/locality.helper.js');
    
module.exports = function (req, res) {
    var q = req.query;

    locality([q.longitude, q.latitude]).then(function (data) {
        res.json(data)
    });
};
